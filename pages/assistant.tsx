// pages/assistant.tsx
import { useState } from "react";
import withAuth from "../utils/withAuth";
import { Send, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default withAuth(function AssistantPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) {
      setError("Please enter a message.");
      return;
    }

    setError("");
    setLoading(true);
    const userMessage = input;

    setMessages((prev) => [...prev, `🧑 You: ${userMessage}`]);
    setInput("");

    // Simulated AI response (since backend is removed)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        `🤖 AI: This feature is currently unavailable without backend integration.`,
      ]);
      setLoading(false);
    }, 800);
  };

  return (
    <main role="main" aria-labelledby="assistant-heading" className="max-w-2xl mx-auto px-4 py-6">
      <h2 id="assistant-heading" className="text-2xl font-semibold mb-4" tabIndex={0}>
        AI Assistant
      </h2>

      <section
        className="bg-gray-100 dark:bg-gray-800 p-4 rounded h-80 overflow-y-auto space-y-2"
        aria-live="polite"
        aria-label="Message history"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg, idx) => (
            <motion.div
              key={msg + idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm"
              tabIndex={0}
            >
              {msg}
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      <form onSubmit={handleSend} className="mt-4 flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <label htmlFor="assistant-input" className="sr-only">
            Message input
          </label>
          <input
            id="assistant-input"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (error) setError("");
            }}
            className={`flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              error ? "border-red-500" : ""
            }`}
            placeholder="Ask something..."
            aria-label="Type a message to the assistant"
            aria-invalid={!!error}
            aria-describedby={error ? "input-error" : undefined}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center gap-1"
            aria-label="Send message"
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Send className="w-5 h-5" />}
            Send
          </button>
        </div>
        {error && (
          <p id="input-error" className="text-sm text-red-600" role="alert" aria-live="assertive">
            {error}
          </p>
        )}
      </form>
    </main>
  );
});
