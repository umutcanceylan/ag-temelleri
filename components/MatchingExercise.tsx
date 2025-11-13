
import React, { useState, useMemo, useEffect } from 'react';
import { MatchingPair } from '../types';

interface MatchingExerciseProps {
  instruction: string;
  pairs: MatchingPair[];
}

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};


const MatchingExercise: React.FC<MatchingExerciseProps> = ({ instruction, pairs }) => {
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [incorrectAttempts, setIncorrectAttempts] = useState<string[]>([]);
  
  const shuffledDefinitions = useMemo(() => shuffleArray(pairs), [pairs]);
  
  useEffect(() => {
    setSelectedTermId(null);
    setMatchedPairs({});
    setIncorrectAttempts([]);
  }, [pairs]);

  const handleTermSelect = (id: string) => {
    if (matchedPairs[id]) return; // Already matched
    setSelectedTermId(id);
    setIncorrectAttempts([]);
  };

  const handleDefinitionSelect = (definitionPair: MatchingPair) => {
    if (!selectedTermId || Object.values(matchedPairs).includes(definitionPair.id)) return;

    if (selectedTermId === definitionPair.id) {
      setMatchedPairs(prev => ({ ...prev, [selectedTermId]: definitionPair.id }));
      setSelectedTermId(null);
    } else {
      setIncorrectAttempts([selectedTermId, definitionPair.id]);
      setTimeout(() => setIncorrectAttempts([]), 800);
    }
  };

  const isComplete = Object.keys(matchedPairs).length === pairs.length;

  return (
    <div className="p-4 border rounded-xl shadow-sm my-6 bg-white">
      <h4 className="text-lg font-bold text-slate-700 mb-2">Eşleştirme Alıştırması</h4>
      <p className="text-slate-600 mb-4">{instruction}</p>
      
      {isComplete && (
        <div className="p-3 mb-4 text-center bg-green-100 text-green-800 font-bold rounded-lg">
          Tebrikler, tüm eşleştirmeleri tamamladınız!
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Terms Column */}
        <div className="space-y-2">
          {pairs.map(pair => {
            const isSelected = selectedTermId === pair.id;
            const isMatched = !!matchedPairs[pair.id];
            const isIncorrect = incorrectAttempts.includes(pair.id);
            return (
              <button
                key={pair.id}
                onClick={() => handleTermSelect(pair.id)}
                className={`w-full p-3 border rounded-lg text-left transition ${
                  isMatched ? 'bg-green-100 border-green-300 cursor-default' : 
                  isSelected ? 'bg-blue-100 border-blue-400 ring-2 ring-blue-300' :
                  isIncorrect ? 'bg-red-100 border-red-300 animate-pulse' :
                  'bg-white hover:bg-slate-50'
                }`}
              >
                {pair.term}
              </button>
            );
          })}
        </div>
        {/* Definitions Column */}
        <div className="space-y-2">
          {shuffledDefinitions.map(pair => {
             const isMatched = Object.values(matchedPairs).includes(pair.id);
             const isIncorrect = incorrectAttempts.includes(pair.id);
             return (
              <button
                key={pair.id}
                onClick={() => handleDefinitionSelect(pair)}
                className={`w-full p-3 border rounded-lg text-left transition ${
                  isMatched ? 'bg-green-100 border-green-300 cursor-default' : 
                  isIncorrect ? 'bg-red-100 border-red-300 animate-pulse' :
                  'bg-white hover:bg-slate-50'
                }`}
              >
                {pair.definition}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MatchingExercise;

