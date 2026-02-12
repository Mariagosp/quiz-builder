'use client'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getQuiz } from '../../../services/quizzesApi';
import { Quiz } from '../../../types';
import sharedStyles from '../../shared.module.css';
import ArrowLeft from '@/components/Icons/ArrowLeft';
import Question from '@/components/Icons/Question';
import styles from './page.module.css';

export default function QuizDetailPage() {
  const params = useParams();
  const { id } = params;
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchQuiz = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getQuiz(id as string);

        setQuiz(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load quiz. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuiz();
  }, [id]);

  if (isLoading) {
    return (
      <div className={sharedStyles.pageContainer}>
        <div className={sharedStyles.spinner}>
          <div className={sharedStyles.spinnerIcon}></div>
        </div>
      </div>
    );
  }

  if (error || !quiz) {
    return (
      <div className={sharedStyles.pageContainer}>
        <nav className={sharedStyles.nav}>
          <div className={sharedStyles.navContainer}>
            <div className={sharedStyles.navContent}>
              <Link href="/" className={sharedStyles.logo}>
                <div className={sharedStyles.logoIcon}></div>
                <span className={sharedStyles.logoText}>Quiz Builder</span>
              </Link>
            </div>
          </div>
        </nav>
        <div className={sharedStyles.mainContent}>
          <div className={`${sharedStyles.alert} ${sharedStyles.alertError}`} style={{ display: 'inline-block', marginTop: '5rem' }}>
            <p>{error || 'Quiz not found'}</p>
            <Link href="/quizzes" className={sharedStyles.navLink} style={{ marginTop: '1rem', display: 'inline-block' }}>
              Back to Quizzes
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={sharedStyles.pageContainer}>
      <nav className={sharedStyles.nav}>
        <div className={sharedStyles.navContainer}>
          <div className={sharedStyles.navContent}>
            <Link href="/" className={sharedStyles.logo}>
              <div className={sharedStyles.logoIcon}></div>
              <span className={sharedStyles.logoText}>Quiz Builder</span>
            </Link>
            <Link href="/quizzes" className={sharedStyles.navLink}>
              All Quizzes
            </Link>
          </div>
        </div>
      </nav>

      <div className={`${sharedStyles.mainContent} ${sharedStyles.contentNarrow}`}>
        <div className={`${sharedStyles.pageHeader} ${sharedStyles.fadeIn}`}>
          <Link href="/quizzes" className={sharedStyles.backLink}>
            <ArrowLeft />
            Back to Quizzes
          </Link>

          <h1 className={styles.quizTitle}>
            {quiz.title}
          </h1>
          <div className={styles.metaInfo}>
            <Question />
            <span>{quiz.questions.length} {quiz.questions.length === 1 ? 'Question' : 'Questions'}</span>
          </div>
        </div>

        <div className={`${styles.questionsList} ${sharedStyles.fadeIn}`}>
          {quiz.questions.map((q, idx) => (
            <div key={idx} className={styles.questionCard}>
              <div className={styles.questionContent}>
                <div className={styles.questionNumber}>
                  {idx + 1}
                </div>
                <div className={styles.questionBody}>
                  <h3 className={styles.questionTitle}>
                    {q.title}
                  </h3>

                  <div className={styles.typeBadge}>
                    {q.type === 'BOOLEAN' ? 'True/False' : q.type === 'INPUT' ? 'Text Input' : 'Multiple Choice'}
                  </div>

                  {q.type === 'CHECKBOX' && q.options && q.options.length > 0 && (
                    <div>
                      <p className={styles.optionsLabel}>Options:</p>
                      <ul className={styles.optionsList}>
                        {q.options.map((option, optIdx) => (
                          <li key={optIdx} className={styles.optionItem}>
                            <div className={styles.optionDot}></div>
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {q.type === 'BOOLEAN' && (
                    <div className={styles.answerBox}>
                      <span className={styles.answerLabel}>Correct Answer:</span> {q.correctAnswers ? 'True' : 'False'}
                    </div>
                  )}

                  {q.type === 'INPUT' && q.correctAnswers && (
                    <div className={styles.answerBox}>
                      <span className={styles.answerLabel}>Expected Answer:</span> {q.correctAnswers as string}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
