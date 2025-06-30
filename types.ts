
export interface Choice {
  text: string;
}

export interface SubQuestion {
    question: string;
    answer: string;
}

export interface Question {
  id: number;
  questionText: string;
  type: 'mcq' | 'show-answer';
  choices?: Choice[];
  correctAnswer?: string;
  image?: string; 
  subQuestions?: SubQuestion[];
}
