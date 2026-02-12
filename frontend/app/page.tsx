import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black p-8">
      <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
        Welcome to Quiz App
      </h1>
      <div className="flex gap-4">
        <Link
          href="/create"
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create Quiz
        </Link>
        <Link
          href="/quizzes"
          className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
        >
          View Quizzes
        </Link>
      </div>
    </div>
  );
}
