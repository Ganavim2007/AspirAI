const express = require("express");
const router = express.Router();
const generateSimulation = require("../services/simulationService");

router.post("/create", async (req, res) => {
  try {
    const { profile, career } = req.body;

    const result = await generateSimulation(profile, career);

    res.json({
      message: "Simulation generated",
      simulation: JSON.parse(result),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;