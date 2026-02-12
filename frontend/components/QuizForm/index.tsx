'use client';

import { useState } from 'react';
import { Quiz, Question, QuestionType } from '../../types';
import QuestionInput from '../QuestionInput';

interface QuizFormProps {
  onSubmit: (quiz: Quiz) => void;
}

export default function QuizForm({ onSubmit }: QuizFormProps) {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { title: '', type: 'BOOLEAN', options: [], correctAnswers: '' },
    ]);
  };

  const updateQuestion = (index: number, updated: Question) => {
    const newQuestions = [...questions];
    newQuestions[index] = updated;
    setQuestions(newQuestions);
  };

  const removeQuestion = (index: number) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Quiz title is required');
      return;
    }
    if (questions.length === 0) {
      alert('Add at least one question');
      return;
    }
    onSubmit({ title, questions });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Quiz Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter quiz title"
        />
      </div>

      <h3>Questions</h3>
      {questions.map((q, idx) => (
        <QuestionInput
          key={idx}
          question={q}
          onChange={(updated) => updateQuestion(idx, updated)}
          onRemove={() => removeQuestion(idx)}
        />
      ))}

      <button type="button" onClick={addQuestion}>
        Add Question
      </button>

      <button type="submit">Create Quiz</button>
    </form>
  );
}
