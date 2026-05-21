const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: String,

  answers: {
    decisionStyle: String,
    interestType: String,
    workEnvironment: String,
    pressureHandling: String,
    motivation: String,
  },

  result: {
    personalityType: String,
    careerDomains: [String],
    careers: [String],
  },
});

module.exports = mongoose.model("Profile", profileSchema);