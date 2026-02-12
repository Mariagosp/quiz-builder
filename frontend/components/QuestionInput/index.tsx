"use client";

import { Question, QuestionType } from "../../types";
import styles from "./QuestionInput.module.css";
import ValidationErrorMessage from "../ValidationErrorMessage";
import BooleanRadio from "../BooleanRadio";
import Close from "../Icons/Close";
import Plus from "../Icons/Plus";
import Delete from "../Icons/Delete";

interface QuestionInputProps {
  question: Question;
  questionNumber: number;
  onChange: (q: Question) => void;
  onRemove: () => void;
  disabled?: boolean;
  error?: string;
}

export default function QuestionInput({
  question,
  questionNumber,
  onChange,
  onRemove,
  disabled,
  error,
}: QuestionInputProps) {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...question,
      title: e.target.value,
    });
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as QuestionType;

    onChange({
      ...question,
      type: newType,
      options: newType === "CHECKBOX" ? question.options || [""] : [],
      correctAnswers: newType === "BOOLEAN" ? false : "",
    });
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...(question.options || [])];
    newOptions[index] = value;
    onChange({
      ...question,
      options: newOptions,
    });
  };

  const handleAddOption = () => {
    onChange({
      ...question,
      options: [...(question.options || []), ""],
    });
  };

  const handleRemoveOption = (index: number) => {
    const newOptions = (question.options || []).filter((_, i) => i !== index);
    onChange({
      ...question,
      options: newOptions,
    });
  };

  const handleCorrectAnswersChange = (value: string | boolean) => {
    onChange({
      ...question,
      correctAnswers: value,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <div className={styles.badge}>{questionNumber}</div>
          <input
            type="text"
            placeholder="Enter your question..."
            value={question.title || ""}
            onChange={handleTitleChange}
            className={styles.titleInput}
            disabled={disabled}
          />
        </div>

        <button
          type="button"
          onClick={onRemove}
          disabled={disabled}
          className={styles.removeButton}
          title="Remove question"
        >
          <Close />
        </button>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Question Type</label>
        <select
          value={question.type}
          onChange={handleTypeChange}
          className={styles.select}
          disabled={disabled}
        >
          <option value="BOOLEAN">True/False</option>
          <option value="INPUT">Text Input</option>
          <option value="CHECKBOX">Multiple Choice</option>
        </select>
      </div>

      {question.type === "CHECKBOX" && (
        <div className={styles.optionsSection}>
          <div className={styles.optionsHeader}>
            <label className={styles.label}>Answer Options</label>
            <button
              type="button"
              onClick={handleAddOption}
              disabled={disabled}
              className={styles.addOptionButton}
            >
              <Plus />
              Add Option
            </button>
          </div>

          <div className={styles.optionsList}>
            {(question.options || []).map((option, idx) => (
              <div key={idx} className={styles.optionRow}>
                <p className={styles.label}>{idx + 1}</p>
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(idx, e.target.value)}
                  placeholder={`Option ${idx + 1}`}
                  className={styles.optionInput}
                  disabled={disabled}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveOption(idx)}
                  disabled={disabled}
                  className={styles.deleteOptionButton}
                  title="Remove option"
                >
                  <Delete />
                </button>
              </div>
            ))}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              Correct Answers
              <span className={styles.hint}>
                (comma separated indices: e.g., 1,3 for first and third options)
              </span>
            </label>
            <input
              type="text"
              value={
                typeof question.correctAnswers === "string"
                  ? question.correctAnswers
                  : ""
              }
              onChange={(e) => handleCorrectAnswersChange(e.target.value)}
              placeholder="1,2,3"
              className={styles.input}
              disabled={disabled}
            />
          </div>
        </div>
      )}

      {question.type === "BOOLEAN" && (
        <div className={styles.formGroup}>
          <label className={styles.label}>Correct Answer</label>
          <BooleanRadio
            value={!!question.correctAnswers}
            onChange={handleCorrectAnswersChange}
            disabled={disabled}
          />
        </div>
      )}

      {question.type === "INPUT" && (
        <div className={styles.formGroup}>
          <label className={styles.label}>Expected Answer</label>
          <input
            type="text"
            value={
              typeof question.correctAnswers === "string"
                ? question.correctAnswers
                : ""
            }
            onChange={(e) => handleCorrectAnswersChange(e.target.value)}
            placeholder="Enter the correct answer..."
            className={styles.input}
            disabled={disabled}
          />
        </div>
      )}
      <ValidationErrorMessage isVisible={!!error} text={error || ""} />
    </div>
  );
}
