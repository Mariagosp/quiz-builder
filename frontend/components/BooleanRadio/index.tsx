import styles from './BooleanRadio.module.css'

interface BooleanRadioProps {
  value: boolean | null;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  error?: string;
}

export default function BooleanRadio({
  value,
  onChange,
  disabled,
  error,
}: BooleanRadioProps) {
  return (
    <div>
      <div className={styles.radioGroup}>
        <button
          type="button"
          className={`${styles.radioOption} ${
            value === true ? styles.activeTrue : ''
          }`}
          onClick={() => onChange(true)}
          disabled={disabled}
        >
          True
        </button>

        <button
          type="button"
          className={`${styles.radioOption} ${
            value === false ? styles.activeFalse : ''
          }`}
          onClick={() => onChange(false)}
          disabled={disabled}
        >
          False
        </button>
      </div>

      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
}
