"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getQuizzes, deleteQuiz } from "../../services/quizzesApi";
import { Quiz } from "../../types";
import QuizCard from "../../components/QuizCard";
import Tapbar from "@/components/Tapbar";
import styles from "../shared.module.css";
import File from "@/components/Icons/File";
import Plus from "@/components/Icons/Plus";

export default function QuizzesPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQuizzes = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await getQuizzes();
      setQuizzes(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load quizzes. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this quiz?")) return;

    try {
      await deleteQuiz(id);
      setQuizzes(quizzes.filter((q) => q.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete quiz. Please try again.");
    }
  };

  return (
    <div className={styles.pageContainer}>
      <Tapbar
        extra={{
          title: "Create Quiz",
          link: "/new-quiz",
        }}
      />

      <div className={styles.mainContent}>
        <div className={`${styles.pageHeader} ${styles.fadeIn}`}>
          <h1 className={styles.pageTitle}>All Quizzes</h1>
          <p className={styles.pageDescription}>
            Browse and manage your quiz collection
          </p>
        </div>

        {error && (
          <div
            className={`${styles.alert} ${styles.alertError} ${styles.fadeIn}`}
          >
            {error}
          </div>
        )}

        {isLoading ? (
          <div className={styles.spinner}>
            <div className={styles.spinnerIcon}></div>
          </div>
        ) : quizzes.length === 0 ? (
          <div className={`${styles.emptyState} ${styles.fadeIn}`}>
            <div className={styles.emptyIcon}>
              <File />
            </div>
            <h3 className={styles.emptyTitle}>No quizzes yet</h3>
            <p className={styles.emptyText}>
              Get started by creating your first quiz
            </p>
            <Link href="/new-quiz" className={styles.emptyButton}>
              <Plus />
              Create Your First Quiz
            </Link>
          </div>
        ) : (
          <div
            className={`${styles.grid} ${styles.gridCols2} ${styles.gridCols3} ${styles.fadeIn}`}
          >
            {quizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
