// pages/index.tsx
import Link from "next/link";
import { useAuth } from "../lib/auth";

export default function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
        Welcome to DevPulse
      </h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300 max-w-xl">
        DevPulse helps developers monitor project progress, manage tasks, and collaborate efficiently using integrated AI assistance.
      </p>

      <div className="space-x-4">
        {!isAuthenticated && (
          <Link
            href="/login"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </Link>
        )}
        <Link
          href="/dashboard"
          className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
