const Profile = require("../models/Profile");
const analyzeCareer = require("../services/aiService");

exports.saveProfile = async (req, res) => {
  try {
    const data = req.body;

    // AI CALL
    const aiResult = await analyzeCareer(data);

    const profile = new Profile({
      ...data,
      result: JSON.parse(aiResult),
    });

    await profile.save();

    res.json({
      message: "AI Analysis Completed",
      result: JSON.parse(aiResult),
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};