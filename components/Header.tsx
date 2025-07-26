// components/Header.tsx
import Link from "next/link";
import { LayoutDashboard, MessageSquare, User, Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 mb-6 shadow-sm relative z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          DevPulse
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
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

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label="Toggle navigation menu"
        >
          <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded shadow-md p-4 space-y-3 md:hidden"
          >
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Link>
            <Link
              href="/assistant"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageSquare className="w-4 h-4" />
              Assistant
            </Link>
            <Link
              href="/profile"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User className="w-4 h-4" />
              Profile
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
