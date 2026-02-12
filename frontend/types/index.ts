export type QuestionType = 'BOOLEAN' | 'INPUT' | 'CHECKBOX';

export interface Question {
  id?: string;
  title: string;
  type: QuestionType;
  options?: string[];
  correctAnswers?: string | boolean | string[];
}

export interface Quiz {
  id?: string;
  title: string;
  questions: Question[];
}

