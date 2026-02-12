import Link from "next/link";
import styles from "./Tapbar.module.css";

type Props = {
  extra: {
    title: string;
    link: string;
  };
};

export default function Tapbar({ extra }: Props) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}></div>
            <span className={styles.logoText}>Quiz Builder</span>
          </Link>
          <Link href={extra.link} className={styles.navButton}>
            {extra.title}
          </Link>
        </div>
      </div>
    </nav>
  );
}
