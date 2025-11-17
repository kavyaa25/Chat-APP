module.exports = {
  generateAnswer(prompt) {
    return {
      description: `This is an AI-generated explanation for: "${prompt}"`,
      table: [
        { Attribute: "Relevance", Score: "High" },
        { Attribute: "Confidence", Score: "92%" }
      ]
    };
  }
};
