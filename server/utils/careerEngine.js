function getCareer(data) {
  if (data.interestType.includes("problem")) {
    return {
      domains: ["Analytical Thinking"],
      careers: ["Lawyer", "Police Officer", "Data Analyst"],
    };
  }

  if (data.interestType.includes("creativity")) {
    return {
      domains: ["Creative Arts"],
      careers: ["Architect", "Designer", "Content Creator"],
    };
  }

  return {
    domains: ["General"],
    careers: ["Teacher", "Manager", "HR"],
  };
}

module.exports = getCareer;