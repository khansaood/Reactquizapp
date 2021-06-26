const INITIAL_STATE = {
  QUESTIONS: [
    {
      question: "Who is the founder of Pakistan?",
      options: ["Quaid-e-Azam", "Allam-e-iqbal", "Sir Syed Ahemd Khan"],
      correctAns: "Quaid-e-Azam",
    },
    {
      question: "What is the abbrevation of HTML",
      options: [
        "Hyper Text Markup Language",
        "Markup Language",
        "Hybrid Markup Language",
      ],
      correctAns: "Hyper Text Markup Language",
    },
    {
      question: "What is the abbrevation of CSS",
      options: [
        "Cascading Style Sheets",
        "Cisco Style Sheets",
        "Cascading Style Shoot",
      ],
      correctAns: "Cascading Style Sheets",
    },
    {
      question: "How Many Times Do Muslims pray a day ?",
      options: ["2", "3", "5"],
      correctAns: "5",
    },
  ],
};
export default (state = INITIAL_STATE) => {
  return state;
};
