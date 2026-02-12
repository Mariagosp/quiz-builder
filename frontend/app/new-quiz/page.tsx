"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { createQuiz } from "../../services/quizzesApi";
import { Quiz } from "../../types";
import QuizForm from "../../components/QuizForm";
import styles from "../shared.module.css";
import ArrowLeft from "@/components/Icons/ArrowLeft";

export default function CreatePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (quiz: Quiz) => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await createQuiz(quiz);

      router.push("/quizzes");
    } catch (err) {
      console.error(err);
      setError("Failed to create quiz. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.navContent}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}></div>
              <span className={styles.logoText}>Quiz Builder</span>
            </Link>
            <div>
              <Link href="/quizzes" className={styles.navLink}>
                All Quizzes
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className={`${styles.mainContent} ${styles.contentNarrow}`}>
        <div className={`${styles.pageHeader} ${styles.fadeIn}`}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft />
            Back to Home
          </Link>

          <h1 className={styles.pageTitle}>Create New Quiz</h1>
          <p className={styles.pageDescription}>
            Build your quiz by adding a title and questions below
          </p>
        </div>

        {error && (
          <div
            className={`${styles.alert} ${styles.alertError} ${styles.fadeIn}`}
          >
            {error}
          </div>
        )}

        <div className={`${styles.card} ${styles.fadeIn}`}>
          <QuizForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
