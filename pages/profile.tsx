// pages/profile.tsx
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import withAuth from "../utils/withAuth";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ProfilePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const seed = "johnkolade";
  const avatarUrl = `https://api.dicebear.com/9.x/initials/png?seed=${seed}`;

  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <main
      className="max-w-xl mx-auto text-center py-6 px-4"
      role="main"
      aria-labelledby="profile-heading"
    >
      <h2 id="profile-heading" className="sr-only">
        User Profile
      </h2>

      <Image
        src={avatarUrl}
        width={100}
        height={100}
        alt="User Avatar"
        className="rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold" tabIndex={0}>
        John Kolade
      </h3>
      <p className="text-gray-600 dark:text-gray-300" tabIndex={0}>
        Front‑End Developer at DevPulse
      </p>

      <div className="mt-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 inline-flex items-center gap-2"
          onClick={() => setTheme(nextTheme)}
          aria-label={`Switch to ${nextTheme} mode`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "light" ? (
              <motion.span
                key="moon"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="w-4 h-4" />
              </motion.span>
            ) : (
              <motion.span
                key="sun"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="w-4 h-4" />
              </motion.span>
            )}
          </AnimatePresence>
          Toggle to {nextTheme === "dark" ? "Dark" : "Light"} Mode
        </motion.button>
      </div>
    </main>
  );
}

export default withAuth(ProfilePage);
