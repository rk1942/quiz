import React, { useState } from "react";
import "./App.css";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "When was the first Common Wealth Games held?",
      options: [
        { id: 0, text: "1982", isCorrect: false },
        { id: 1, text: "1860", isCorrect: false },
        { id: 2, text: "1951", isCorrect: false },
        { id: 3, text: "1930", isCorrect: true },
      ],
    },
    {
      text: "The term Butterfly Stroke is reffered to in which sport?",
      options: [
        { id: 0, text: "Swimming", isCorrect: true },
        { id: 1, text: "Soccer", isCorrect: false },
        { id: 2, text: "Rugby", isCorrect: false },
        { id: 3, text: "Tennis", isCorrect: false },
      ],
    },
    {
      text: "In what sport is the term putting used?",
      options: [
        { id: 0, text: "Golf", isCorrect: true },
        { id: 1, text: "Cricket", isCorrect: false },
        { id: 2, text: "Baseball", isCorrect: false },
        { id: 3, text: "Baasketball", isCorrect: false },
      ],
    },
    {
      text: "What is the most popular sport worldwide?",
      options: [
        { id: 0, text: "Badminton", isCorrect: false },
        { id: 1, text: "Soccer", isCorrect: true },
        { id: 2, text: "Hockey", isCorrect: false },
        { id: 3, text: "MMA", isCorrect: false },
      ],
    },
    {
      text: "Which of the following sports di Michael Phelps play?",
      options: [
        { id: 0, text: "Basketball", isCorrect: false },
        { id: 1, text: "Swimming", isCorrect: true },
        { id: 2, text: "Ice Hockey", isCorrect: true },
        { id: 3, text: "Football", isCorrect: false },
      ],
    },
  ];
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <h1>Sports Quiz</h1>
      <h2>Score: {score}</h2>
      {showResults ? (

        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;