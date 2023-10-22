import React, { useState } from "react";
import quizData from "./quizData";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Quiz completed! Your score: ${score}`);
    }
  };

  return (
    <div className="quiz-container">
      <h2>{quizData[currentQuestion].question}</h2>
      <ul>
        {quizData[currentQuestion].options.map((option, index) => (
          <li key={index} onClick={() => handleAnswerClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
