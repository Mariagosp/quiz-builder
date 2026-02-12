'use client';

import Link from 'next/link';
import { Quiz } from '../../types';

interface QuizCardProps {
  quiz: Quiz;
  onDelete: (id: string) => void;
}

export default function QuizCard({ quiz, onDelete }: QuizCardProps) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
      <h3>
        <Link href={`/quizzes/${quiz.id}`}>{quiz.title}</Link>
      </h3>
      <p>Questions: {quiz.questions.length}</p>
      <button onClick={() => quiz.id && onDelete(quiz.id)}>Delete</button>
    </div>
  );
}
