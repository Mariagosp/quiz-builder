import Link from "next/link";
import styles from "./page.module.css";
import Tapbar from "@/components/Tapbar";
import File from "@/components/Icons/File";
import Lighting from "@/components/Icons/Lighting";
import Chain from "@/components/Icons/Chain";

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

        <div className={`${styles.features} ${styles.fadeIn}`}>
          <div className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.indigo}`}>
              <File />
            </div>
            <h3 className={styles.featureTitle}>Multiple Question Types</h3>
            <p className={styles.featureDescription}>
              Create boolean, input, and checkbox questions to match your needs.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.pink}`}>
              <Lighting />
            </div>
            <h3 className={styles.featureTitle}>Easy to Use</h3>
            <p className={styles.featureDescription}>
              Intuitive interface makes creating quizzes quick and simple.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.purple}`}>
              <Chain />
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
