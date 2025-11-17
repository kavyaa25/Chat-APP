module.exports = {
  sessions: [
    { id: "session1", title: "Marketing Strategy" },
    { id: "session2", title: "Frontend Debugging" }
  ],
  conversations: {
    "session1": [
      {
        question: "What is our marketing plan?",
        answer: {
          description: "Here is a breakdown of strategies.",
          table: [
            { Channel: 'Social Media', Budget: '$5000', ROI: '120%' },
            { Channel: 'Email', Budget: '$2000', ROI: '150%' }
          ]
        }
      }
    ],
    "session2": []
  }
};
