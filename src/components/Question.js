// src/components/Question.js
import React from 'react';

const Question = ({ question, options, selectedOption, handleOptionChange, showAnswer, correctAnswer, explanation }) => {
  const getOptionClass = (option) => {
    if (!showAnswer) return '';
    return option === correctAnswer
      ? 'correct'
      : option === selectedOption
      ? 'incorrect'
      : '';
  };

  return (
    <div className="question-container">
      <h3>{question}</h3>
      <div className="options">
        {options.map((option, index) => (
          <div key={index} className={`option-box ${getOptionClass(option)}`}>
            <input
              type="radio"
              name="quiz"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              disabled={showAnswer}
            />
            {option}
          </div>
        ))}
      </div>
      {showAnswer && (
        <div className="answer">
          <p><strong>Correct Answer:</strong> {correctAnswer}</p>
          <p><strong>Explanation:</strong> {explanation}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
