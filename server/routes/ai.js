import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

const companyDB = [
  { company: "Google", demandLevel: "VERY HIGH" },
  { company: "Microsoft", demandLevel: "VERY HIGH" },
  { company: "Amazon", demandLevel: "VERY HIGH" },
  { company: "Apple", demandLevel: "VERY HIGH" },
  { company: "Meta", demandLevel: "VERY HIGH" },
  { company: "Netflix",demandLevel: "HIGH" },
  { company: "Tesla", demandLevel: "HIGH" },
  { company: "Adobe", demandLevel: "HIGH" },
  { company: "IBM",  demandLevel: "HIGH" },
  { company: "Intel", demandLevel: "HIGH" }
];

dotenv.config();

function safeJSONParse(text) {
  try {
    return JSON.parse(text);
  } catch (err) {
    console.log("⚠️ JSON failed, trying repair...");

    // remove markdown
    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // remove trailing commas (common AI mistake)
    text = text.replace(/,\s*}/g, "}").replace(/,\s*]/g, "]");

    try {
      return JSON.parse(text);
    } catch (e) {
      console.log("❌ Still invalid JSON");
      return null;
    }
  }
}

const router = express.Router();

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

function getRandomCompanies() {
  const shuffled = [...companyDB].sort(() => Math.random() - 0.5);

  return shuffled.slice(0, 5).map((c) => ({
    company: c.company,
    demandLevel: c.demandLevel
  }));
}
router.post("/analyze", async (req, res) => {
  try {
    const { answers } = req.body;

const prompt = `

You are a STRICT JSON generator.

ABSOLUTE RULES:
- Output ONLY valid JSON
- No markdown
- No explanation
- No backticks
- No extra text
- No comments

IMPORTANT:
- Ensure JSON is perfectly valid
- All strings must be properly closed
- No trailing commas

You are an expert Career Guidance AI System.

You MUST generate HIGH QUALITY, DETAILED, HUMAN-LIKE CAREER REPORTS.

RULES:
- Return ONLY valid JSON
- No markdown
- No explanations
- EXACTLY 3 careers
- Every section MUST be DETAILED and LONG (very important)
- Salary MUST be short and in Indian rupees format (LPA)
- Salary MUST be ONLY in LPA format
- Do NOT explain salary
- Example: 4-8

LPA
Each career must look like a professional career guide report.

Student Answers:
${answers.join(", ")}

OUTPUT FORMAT:

{
  "careers": [
    {
      "role": "",
      "matchScore": "",
      
      "description": "Write a long, detailed paragraph (5–10 lines) explaining what this career is, what they do in real world, and why it is important.",

      "salary": {
  "beginner": "ONLY in LPA format like 4-8 LPA",
  "intermediate": "ONLY in LPA format like 12-18 LPA",
  "experienced": "ONLY in LPA format like 25-40 LPA"
},

      "skills": [
        "Give at least 10 real skills"
      ],

      "technologies": [
        "Give at least 10 real technologies/tools used in industry"
      ],

      "roadmap": [
        "Give at least 10 detailed step-by-step learning stages"
      ],

      "dailyRoutine": [
        "Give at least 6 detailed daily activities of a professional in this role"
      ],

      "projects": [
        "Give at least 5 real-world level project ideas"
      ],

      "youtube": [
        {
          "name": "ONLY REAL CHANNEL NAME",
          "link": "FULL WORKING YOUTUBE URL"
        },
        {
          "name": "ONLY REAL CHANNEL NAME",
          "link": "FULL WORKING YOUTUBE URL"
        },
        {
          "name": "ONLY REAL CHANNEL NAME",
          "link": "FULL WORKING YOUTUBE URL"
        }
      ],

      "internship": [
        "Give at least 5 internship preparation steps"
      ],

      "placementPreparation": [
        "Give at least 6 placement preparation steps"
      ],

      "future": "Write a long 5–6 line future scope explanation",

      "topCompanies": [
        {
          "company": "",
          "demandLevel": ""
        },
        {
          "company": "",
          "demandLevel": ""
        },
       {
          "company": "",
          "demandLevel": ""
        },
        {
          "company": "",
          "demandLevel": ""
        },
        {
          "company": "",
          "demandLevel": ""
        }
      ]
    }
  ]
}
`;

   const completion = await client.chat.completions.create({
  model: "llama-3.3-70b-versatile", // ✅ FIXED
  messages: [{ role: "user", content: prompt }],
  temperature: 0.7,
});

    let text = completion.choices[0].message.content;

    // remove markdown formatting
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();

    let parsedData = safeJSONParse(text);

if (!parsedData) {
  return res.status(500).json({
    error: "AI returned invalid JSON (could not auto-fix)",
  });
}

    // SAFETY FIX: ensure topCompanies always exists and normalized
   parsedData.careers = (parsedData.careers || []).map((career) => {
  
  return {
    role: career.role || "Not Available",
    matchScore: career.matchScore || "N/A",
    description: career.description || "No description available",

    salary: {
  beginner: career?.salary?.beginner || "Salary data unavailable",
  intermediate: career?.salary?.intermediate || "Salary data unavailable",
  experienced: career?.salary?.experienced || "Salary data unavailable",
},
    skills: Array.isArray(career.skills) && career.skills.length > 0
      ? career.skills
      : ["Skill data not generated"],

    technologies: Array.isArray(career.technologies) && career.technologies.length > 0
      ? career.technologies
      : ["Tech data not generated"],

    roadmap: Array.isArray(career.roadmap) && career.roadmap.length > 0
      ? career.roadmap
      : ["Roadmap not generated properly"],

    dailyRoutine: Array.isArray(career.dailyRoutine) && career.dailyRoutine.length > 0
      ? career.dailyRoutine
      : ["Routine not available"],

    projects: Array.isArray(career.projects) && career.projects.length > 0
      ? career.projects
      : ["Project ideas not available"],

    youtube: Array.isArray(career.youtube) && career.youtube.length > 0
      ? career.youtube
      : [
          {
            name: "freeCodeCamp",
            link: "https://www.youtube.com/@freecodecamp"
          },
          {
            name: "CodeWithHarry",
            link: "https://www.youtube.com/@CodeWithHarry"
          }
        ],

    internship: Array.isArray(career.internship) && career.internship.length > 0
      ? career.internship
      : ["Internship suggestions not available"],

    placementPreparation: Array.isArray(career.placementPreparation) && career.placementPreparation.length > 0
      ? career.placementPreparation
      : ["Prepare DSA, Aptitude, Projects"],

    future: career.future || "Career has strong future growth in global tech industry.",

    topCompanies: Array.isArray(career.topCompanies) && career.topCompanies.length > 0
  ? career.topCompanies.slice(0, 5)
  : getRandomCompanies()
  };
});

    res.json(parsedData);
  } catch (error) {
    console.log("FULL AI ERROR:", error);

    res.status(500).json({
      error: "AI Failed",
    });
  }
});

export default router;