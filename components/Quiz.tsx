import React, { useState } from 'react';
import { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = questions[activeIndex];

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsSubmitted(true);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setActiveIndex((prev) => (prev + 1) % questions.length);
  };

  const isCorrect = selectedOption === currentQuestion.correctAnswer;

  return (
    <div className="mt-12 bg-gray-900 text-white rounded-2xl p-8 shadow-xl">
      <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
        <h3 className="text-xl font-bold text-white">Knowledge Check</h3>
        <span className="text-gray-400 text-sm">Question {activeIndex + 1} of {questions.length}</span>
      </div>

      <div className="mb-8">
        <p className="text-lg font-medium mb-6">{currentQuestion.question}</p>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            let buttonClass = "w-full text-left p-4 rounded-lg border transition-all duration-200 ";
            
            if (isSubmitted) {
              if (index === currentQuestion.correctAnswer) {
                buttonClass += "bg-green-600 border-green-500 text-white";
              } else if (index === selectedOption) {
                buttonClass += "bg-red-600 border-red-500 text-white";
              } else {
                buttonClass += "bg-gray-800 border-gray-700 text-gray-400 opacity-50";
              }
            } else {
              buttonClass += selectedOption === index 
                ? "bg-blue-600 border-blue-500 text-white" 
                : "bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-200";
            }

            return (
              <button
                key={index}
                onClick={() => !isSubmitted && setSelectedOption(index)}
                disabled={isSubmitted}
                className={buttonClass}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {isSubmitted && (
        <div className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-green-900/30 border border-green-800' : 'bg-red-900/30 border border-red-800'}`}>
          <p className={`font-bold mb-1 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            {currentQuestion.explanation}
          </p>
        </div>
      )}

      <div className="flex justify-end">
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="px-6 py-2 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Submit Answer
          </button>
        ) : (
           questions.length > 1 && (
            <button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors"
            >
                Next Question
            </button>
           )
        )}
      </div>
    </div>
  );
};

export default Quiz;