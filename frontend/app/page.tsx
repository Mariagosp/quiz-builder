import Link from "next/link";
import styles from "./page.module.css";
import Tapbar from "@/components/Tapbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Tapbar
        extra={{
          title: "Browse Quizzes",
          link: "/quizzes",
        }}
      />

      <div className={styles.hero}>
        <div className={styles.fadeIn}>
          <h1 className={styles.heroTitle}>
            <span className={styles.gradientText}>Create Amazing Quizzes</span>
          </h1>
          <p className={styles.heroDescription}>
            Build interactive quizzes with multiple question types. Track
            responses, analyze results, and engage your audience.
          </p>

          <div className={styles.buttonGroup}>
            <Link href="/new-quiz" className={styles.primaryButton}>
              Create New Quiz
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link href="/quizzes" className={styles.secondaryButton}>
              View All Quizzes
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`${styles.features} ${styles.fadeIn}`}>
          <div className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.indigo}`}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Multiple Question Types</h3>
            <p className={styles.featureDescription}>
              Create boolean, input, and checkbox questions to match your needs.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.pink}`}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Easy to Use</h3>
            <p className={styles.featureDescription}>
              Intuitive interface makes creating quizzes quick and simple.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.purple}`}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Manage & Organize</h3>
            <p className={styles.featureDescription}>
              Keep all your quizzes organized and easily accessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
