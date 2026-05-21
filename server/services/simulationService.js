const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateSimulation(profile, career) {
  const prompt = `
You are Aspira AI, a cinematic career simulation engine.

User Profile:
- Personality: ${profile.personality}
- Interests: ${profile.interestType}
- Motivation: ${profile.motivation}

Selected Career:
${career.title}

TASK:
Create a realistic FUTURE LIFE SIMULATION for year 2035.

Include:
1. Job position growth journey
2. Workplace description
3. Salary progression
4. Daily life routine
5. Achievements
6. Emotional experience
7. Challenges faced
8. Final success outcome

Make it cinematic, storytelling style, inspiring but realistic.

Return in JSON format:
{
  "title": "",
  "story": "",
  "timeline": [
    "2026: ...",
    "2028: ...",
    "2032: ...",
    "2035: ..."
  ],
  "salaryGrowth": {
    "starting": "",
    "mid": "",
    "final": ""
  },
  "careerPath": ""
}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      { role: "system", content: "You are a cinematic AI storyteller." },
      { role: "user", content: prompt },
    ],
  });

  return response.choices[0].message.content;
}

module.exports = generateSimulation;