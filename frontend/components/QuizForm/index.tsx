"use client";

import { Quiz } from "../../types";
import QuestionInput from "../QuestionInput";
import styles from "./QuizForm.module.css";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import ValidationErrorMessage from "../ValidationErrorMessage";
import Question from "../../components/Icons/Question";
import Check from "../Icons/Check";
import Plus from "../Icons/Plus";

interface QuizFormProps {
  onSubmit: (quiz: Quiz) => void;
  isLoading?: boolean;
}

export default function QuizForm({ onSubmit, isLoading }: QuizFormProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Quiz>({
    defaultValues: {
      title: "",
      questions: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Quiz Title</label>
        <input
          type="text"
          {...register("title", { required: "Title is required" })}
          placeholder="Enter an engaging quiz title..."
          className={styles.input}
          disabled={isLoading}
        />
        <ValidationErrorMessage
          isVisible={!!errors.title}
          text={errors.title?.message || ""}
        />
      </div>

      <div className={styles.questionsSection}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Questions</h3>
          <span className={styles.badge}>
            {fields.length} {fields.length === 1 ? "Question" : "Questions"}
          </span>
        </div>

        {fields.length === 0 ? (
          <div className={styles.emptyState}>
            <Question />
            <p className={styles.emptyText}>No questions added yet</p>
            <button
              type="button"
              onClick={() =>
                append({
                  title: "",
                  type: "BOOLEAN",
                  options: [],
                  correctAnswers: "",
                })
              }
              className={styles.firstQuestionButton}
              disabled={isLoading}
            >
              Add Your First Question
            </button>
          </div>
        ) : (
          <div>
            <div className={styles.questionsList}>
              {fields.map((field, idx) => (
                <Controller
                  key={field.id}
                  control={control}
                  name={`questions.${idx}` as const}
                  rules={{
                    validate: (q) =>
                      q.title?.trim() !== "" || "Question title is required",
                  }}
                  render={({ field: qField, fieldState }) => (
                    <QuestionInput
                      question={qField.value}
                      questionNumber={idx + 1}
                      onChange={(updated) => qField.onChange(updated)}
                      onRemove={() => remove(idx)}
                      disabled={isLoading}
                      error={fieldState.error?.message}
                    />
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                append({
                  title: "",
                  type: "BOOLEAN",
                  options: [],
                  correctAnswers: "",
                })
              }
              className={styles.addQuestionButton}
              disabled={isLoading}
            >
              <Plus />
              Add Another Question
            </button>
          </div>
        )}
      </div>

      <div className={styles.actions}>
        <button
          type="submit"
          disabled={isLoading}
          className={styles.submitButton}
        >
          {isLoading ? (
            <>
              <div className={styles.spinner}></div>
              Creating Quiz...
            </>
          ) : (
            <>
              <Check />
              Create Quiz
            </>
          )}
        </button>
      </div>
    </form>
  );
}
