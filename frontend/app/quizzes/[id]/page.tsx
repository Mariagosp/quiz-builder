'use client'

import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getQuiz } from '../../../services/quizzesApi';
import { Quiz } from '../../../types';

export default function QuizDetailPage() {
  const router = useRouter();
  const params = useParams(); // <-- App Router way
  const { id } = params;
  const [quiz, setQuiz] = useState<Quiz | null>(null);

  useEffect(() => {
    if (!id) return;
    getQuiz(id as string).then(setQuiz).catch(console.error);
  }, [id]);

  if (!quiz) return <div>Loading...</div>;

  return (
    <div>
      <h1>{quiz.title}</h1>
      {quiz.questions.map((q, idx) => (
        <div key={idx}>
          <strong>{q.title}</strong> ({q.type})
        </div>
      ))}
    </div>
  );
}
