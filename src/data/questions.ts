import { GENERAL_QUESTIONS } from './questionsGeneral';
import { SPECIFIC_QUESTIONS } from './questionsSpecific';

export interface PracticeQuestion {
  id: string;
  disciplineId: string;
  discipline: string;
  topicCode: string;
  statement: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const PRACTICE_QUESTIONS: PracticeQuestion[] = [
  ...GENERAL_QUESTIONS,
  ...SPECIFIC_QUESTIONS,
];
