'use client'

import { useRouter } from 'next/navigation';
import { createQuiz } from '../../services/quizzesApi';
import { Quiz } from '../../types';
import QuizForm from '../../components/QuizForm';

export default function CreatePage() {
  const router = useRouter();

  const handleSubmit = async (quiz: Quiz) => {
    try {
      await createQuiz(quiz);
      router.push('/quizzes'); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Create Quiz</h1>
      <QuizForm onSubmit={handleSubmit} />
    </div>
  );
}
