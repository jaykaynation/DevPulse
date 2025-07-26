// components/Header.tsx
import Link from "next/link";
import { Home, LayoutDashboard, MessageSquare, User } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 mb-6 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          DevPulse
        </Link>

        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/dashboard"
            className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
          <Link
            href="/assistant"
            className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            <MessageSquare className="w-4 h-4" />
            Assistant
          </Link>
          <Link
            href="/profile"
            className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            <User className="w-4 h-4" />
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
}
