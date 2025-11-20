export interface Exercise {
  id: string;
  name: string;
  image: string;
  description: string;
  tip: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface WorkoutDayData {
  id: string;
  title: string;
  description: string;
  muscles: string[];
  exercises: Exercise[];
  quiz: QuizQuestion[];
}
