const express = require("express");
const app = express();

function TriviaQuiz() {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Vincent van Gogh",
        "Michelangelo",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mercury", "Venus", "Earth", "Jupiter"],
      correctAnswer: "Jupiter",
    },
    {
      question: "What year did World War II end?",
      options: ["1939", "1945", "1955", "1965"],
      correctAnswer: "1945",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: [
        "William Shakespeare",
        "Charles Dickens",
        "Jane Austen",
        "Mark Twain",
      ],
      correctAnswer: "William Shakespeare",
    },
  ];

  function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }

  return {
    getRandomQuestion,
  };
}

// Example usage:
const quiz = TriviaQuiz();
const randomQuestion = quiz.getRandomQuestion();
console.log("Random Question:", randomQuestion.question);
console.log("Options:", randomQuestion.options);
console.log("Correct Answer:", randomQuestion.correctAnswer);

app.listen(process.env.PORT || 3000, () => {
  console.log(`listen ${process.env.PORT || 3000}`);
});
