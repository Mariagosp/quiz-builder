import axios from 'axios';
import { Quiz } from '../types';

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000';

export const getQuizzes = async () => {
  const res = await axios.get<Quiz[]>(`${API_URL}/quizzes`);
  return res.data;
};

export const getQuiz = async (id: string) => {
  const res = await axios.get<Quiz>(`${API_URL}/quizzes/${id}`);
  return res.data;
};

export const createQuiz = async (data: Quiz) => {
  const res = await axios.post<Quiz>(`${API_URL}/quizzes`, data);
  return res.data;
};

export const deleteQuiz = async (id: string) => {
  await axios.delete(`${API_URL}/quizzes/${id}`);
};
