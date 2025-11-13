
export enum QuestionType {
  MultipleChoice = 'multiple-choice',
  FillInTheBlank = 'fill-in-the-blank',
}

export interface MultipleChoiceQuestion {
  type: QuestionType.MultipleChoice;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface FillInTheBlankQuestion {
  type: QuestionType.FillInTheBlank;
  parts: (string | null)[]; // string for text, null for blank
  correctAnswer: string;
}

export type Question = MultipleChoiceQuestion | FillInTheBlankQuestion;

export interface MatchingPair {
  id: string;
  term: string;
  definition: string;
}

export interface SectionData {
  id: number;
  title: string;
  content: string[];
  questions: Question[];
  matchingExercise?: {
    instruction: string;
    pairs: MatchingPair[];
  };
}
