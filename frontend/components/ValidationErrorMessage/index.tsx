import styles from "./ValidationErrorMessage.module.css";

type Props = {
  isVisible: boolean;
  text: string;
};

export default function ValidationErrorMessage({ isVisible, text }: Props) {
  if (!isVisible) return null;

  return <p className={styles.errorText}>{text}</p>;
}
