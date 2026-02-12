'use client';

import { useState, useEffect } from 'react';
import { Question, QuestionType } from '../../types';

interface QuestionInputProps {
  question: Question;
  onChange: (q: Question) => void;
  onRemove: () => void;
}

export default function QuestionInput({
  question,
  onChange,
  onRemove,
}: QuestionInputProps) {
  const [title, setTitle] = useState(question.title);
  const [type, setType] = useState<QuestionType>(question.type);
  const [options, setOptions] = useState<string[]>(question.options || []);
  const [correctAnswers, setCorrectAnswers] = useState<any>(
    question.correctAnswers || ''
  );

  useEffect(() => {
    onChange({ title, type, options, correctAnswers });
  }, [title, type, options, correctAnswers]);

  const addOption = () => setOptions([...options, '']);

  const updateOption = (idx: number, value: string) => {
    const newOptions = [...options];
    newOptions[idx] = value;
    setOptions(newOptions);
  };

  const removeOption = (idx: number) => {
    const newOptions = [...options];
    newOptions.splice(idx, 1);
    setOptions(newOptions);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <input
        type="text"
        placeholder="Question title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value as QuestionType)}>
        <option value="BOOLEAN">Boolean (True/False)</option>
        <option value="INPUT">Input</option>
        <option value="CHECKBOX">Checkbox</option>
      </select>

      {type === 'CHECKBOX' && (
        <div>
          <h5>Options</h5>
          {options.map((opt, idx) => (
            <div key={idx}>
              <input
                type="text"
                value={opt}
                onChange={(e) => updateOption(idx, e.target.value)}
                placeholder={`Option ${idx + 1}`}
              />
              <button type="button" onClick={() => removeOption(idx)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addOption}>
            Add Option
          </button>

          <label>Correct Answers (comma separated indices starting from 1)</label>
          <input
            type="text"
            value={Array.isArray(correctAnswers) ? correctAnswers.join(',') : ''}
            onChange={(e) =>
              setCorrectAnswers(e.target.value.split(',').map((v) => v.trim()))
            }
          />
        </div>
      )}

      {type === 'BOOLEAN' && (
        <div>
          <label>Correct Answer:</label>
          <select
            value={correctAnswers ? 'true' : 'false'}
            onChange={(e) => setCorrectAnswers(e.target.value === 'true')}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      )}

      {type === 'INPUT' && (
        <div>
          <label>Correct Answer:</label>
          <input
            type="text"
            value={correctAnswers || ''}
            onChange={(e) => setCorrectAnswers(e.target.value)}
          />
        </div>
      )}

      <button type="button" onClick={onRemove}>
        Remove Question
      </button>
    </div>
  );
}
