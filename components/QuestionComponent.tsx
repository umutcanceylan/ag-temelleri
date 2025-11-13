
import React, { useState, useEffect } from 'react';
import { Question, QuestionType } from '../types';

interface QuestionProps {
  questionData: Question;
  questionNumber: number;
}

const QuestionComponent: React.FC<QuestionProps> = ({ questionData, questionNumber }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    setUserAnswer('');
    setIsSubmitted(false);
    setIsCorrect(null);
  }, [questionData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswer) return;
    setIsSubmitted(true);
    setIsCorrect(userAnswer.trim().toLowerCase() === questionData.correctAnswer.toLowerCase());
  };
  
  const getFeedbackClasses = () => {
    if (!isSubmitted) return '';
    return isCorrect ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500';
  };

  const renderQuestion = () => {
    switch (questionData.type) {
      case QuestionType.MultipleChoice:
        return (
          <div>
            <p className="font-semibold mb-3">{questionData.question}</p>
            <div className="space-y-2">
              {questionData.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !isSubmitted && setUserAnswer(option)}
                  disabled={isSubmitted}
                  className={`w-full text-left p-3 border rounded-lg transition ${
                    userAnswer === option ? 'bg-blue-100 border-blue-500' : 'bg-white hover:bg-gray-50'
                  } ${isSubmitted && questionData.correctAnswer === option ? 'bg-green-100 border-green-500' : ''}
                   ${isSubmitted && userAnswer === option && !isCorrect ? 'bg-red-100 border-red-500' : ''}
                   disabled:cursor-not-allowed`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      case QuestionType.FillInTheBlank:
        return (
          <div className="flex items-center flex-wrap">
            {questionData.parts.map((part, index) =>
              part === null ? (
                <input
                  key={index}
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  disabled={isSubmitted}
                  className={`border-b-2 focus:outline-none text-center mx-2 w-32 ${isSubmitted && isCorrect ? 'border-green-500 bg-green-50' : ''} ${isSubmitted && !isCorrect ? 'border-red-500 bg-red-50' : 'border-gray-400 focus:border-blue-500'} disabled:bg-gray-100`}
                />
              ) : (
                <span key={index} className="font-semibold">{part}</span>
              )
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`p-4 border rounded-xl shadow-sm my-4 ${getFeedbackClasses()}`}>
        <h4 className="text-lg font-bold text-slate-700 mb-4">Soru {questionNumber}</h4>
        <form onSubmit={handleSubmit}>
            {renderQuestion()}
            <div className="mt-4">
            {!isSubmitted ? (
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-gray-300" disabled={!userAnswer}>
                Cevabı Kontrol Et
                </button>
            ) : (
                <p className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                {isCorrect ? 'Doğru!' : `Yanlış. Doğru cevap: ${questionData.correctAnswer}`}
                </p>
            )}
            </div>
        </form>
    </div>
  );
};

export default QuestionComponent;
