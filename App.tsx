
import React, { useState } from 'react';
import { courseData } from './data/content';
import QuestionComponent from './components/QuestionComponent';
import MatchingExercise from './components/MatchingExercise';

const App: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const currentSection = courseData[currentSectionIndex];

  const goToNextSection = () => {
    setCurrentSectionIndex(prev => Math.min(prev + 1, courseData.length - 1));
  };

  const goToPreviousSection = () => {
    setCurrentSectionIndex(prev => Math.max(prev - 1, 0));
  };
  
  const ProgressBar = () => {
    const progress = ((currentSectionIndex + 1) / courseData.length) * 100;
    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 my-4">
            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700">2024-25 Ağ Temelleri Dersi</h1>
          <p className="text-slate-600">İnteraktif Ders Notları</p>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
            
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-slate-800">{currentSection.id}. {currentSection.title}</h2>
            <span className="text-sm font-semibold text-slate-500">{currentSectionIndex + 1} / {courseData.length}</span>
          </div>
          <ProgressBar />
          
          <div className="prose max-w-none text-slate-700 space-y-3 mb-6">
            {currentSection.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <hr className="my-6"/>

          <div>
            {currentSection.questions.map((q, index) => (
              <QuestionComponent key={index} questionData={q} questionNumber={index + 1} />
            ))}
            
            {currentSection.matchingExercise && (
              <MatchingExercise 
                instruction={currentSection.matchingExercise.instruction}
                pairs={currentSection.matchingExercise.pairs}
              />
            )}
          </div>
        </div>

        <nav className="flex justify-between items-center mt-6 p-4 bg-white rounded-xl shadow-md sticky bottom-4">
          <button
            onClick={goToPreviousSection}
            disabled={currentSectionIndex === 0}
            className="px-6 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Önceki
          </button>
          <div className="text-center">
            <p className="font-bold">{currentSection.title}</p>
          </div>
          <button
            onClick={goToNextSection}
            disabled={currentSectionIndex === courseData.length - 1}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Sonraki
          </button>
        </nav>
      </main>
    </div>
  );
};

export default App;
