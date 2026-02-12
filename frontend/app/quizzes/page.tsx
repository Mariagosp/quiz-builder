'use client'

import { useEffect, useState } from 'react';
import { getQuizzes, deleteQuiz } from '../../services/quizzesApi';
import { Quiz } from '../../types';
import QuizCard from '../../components/QuizCard';

export default function QuizzesPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  const fetchQuizzes = async () => {
    const data = await getQuizzes();
    setQuizzes(data);
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteQuiz(id);
    setQuizzes(quizzes.filter(q => q.id !== id));
  };

  return (
    <div>
      <h1>Quizzes</h1>
      {quizzes.map(quiz => (
        <QuizCard key={quiz.id} quiz={quiz} onDelete={handleDelete} />
      ))}
    </div>
  );
}
