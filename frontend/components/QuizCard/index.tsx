'use client';

import Link from 'next/link';
import { Quiz } from '../../types';
import styles from './QuizCard.module.css';
import Question from '../Icons/Question';
import Delete from '../Icons/Delete';

interface QuizCardProps {
  quiz: Quiz;
  onDelete: (id: string) => void;
}

export default function QuizCard({ quiz, onDelete }: QuizCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <Link href={`/quizzes/${quiz.id}`} className={styles.title}>
              {quiz.title}
            </Link>

            <div className={styles.questionCount}>
             <Question />
              <span>{quiz.questions.length} {quiz.questions.length === 1 ? 'Question' : 'Questions'}</span>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href={`/quizzes/${quiz.id}`} className={styles.viewButton}>
            View Quiz
          </Link>

          <button
            onClick={() => quiz.id && onDelete(quiz.id)}
            className={styles.deleteButton}
            title="Delete quiz"
          >
            <Delete />
          </button>
        </div>
      </div>

      <div className={styles.accent}></div>
    </div>
  );
}
