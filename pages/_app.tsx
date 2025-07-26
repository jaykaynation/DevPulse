// pages/_app.tsx

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "../lib/auth";
import Layout from "../components/Layout";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class">
      <AuthProvider>
        <Layout>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={router.route}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
}
