const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function analyzeCareer(data) {
  const prompt = `
You are Aspira AI, a world-class career psychologist and advisor.

Analyze this user deeply:

Decision Style: ${data.decisionStyle}
Interest Type: ${data.interestType}
Work Environment: ${data.workEnvironment}
Pressure Handling: ${data.pressureHandling}
Motivation: ${data.motivation}

TASK:
1. Identify personality type
2. Suggest suitable career domains (NOT just tech)
3. Suggest top 5 real-world careers (law, doctor, police, architect, teacher, business, design, etc.)
4. Give reason for each career
5. Give short roadmap for starting each career
6. Be realistic for a student (10th / college level)

Return response in structured JSON:
{
  "personality": "",
  "domains": [],
  "careers": [
    {
      "title": "",
      "reason": "",
      "roadmap": ""
    }
  ]
}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      { role: "system", content: "You are a strict career guidance AI." },
      { role: "user", content: prompt },
    ],
  });

  return response.choices[0].message.content;
}

module.exports = analyzeCareer;