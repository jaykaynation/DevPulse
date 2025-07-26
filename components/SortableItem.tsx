// components/SortableItem.tsx
import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Plus, Trash2, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

type Props = {
  widget: { id: string; title: string };
  items: string[];
  onAddItem?: (item: string) => void;
  onClearItems?: () => void;
};

export default function SortableItem({
  widget,
  items,
  onAddItem,
  onClearItems,
}: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: widget.id });

  const [inputVisible, setInputVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleSubmit = () => {
    if (!inputText.trim()) {
      setError("Please enter a value.");
      return;
    }
    onAddItem?.(inputText.trim());
    setInputText("");
    setError("");
    setSubmitted(true);

    // Wait for checkmark animation before closing
    setTimeout(() => {
      setSubmitted(false);
      setInputVisible(false);
    }, 1000);
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <button
            {...listeners}
            className="cursor-grab text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            aria-label="Drag widget"
          >
            <GripVertical className="w-6 h-6" />
          </button>
          <h3 className="text-lg font-semibold">{widget.title}</h3>
        </div>

        <div className="flex items-center gap-3">
          {onAddItem && (
            <button
              onClick={() => setInputVisible((v) => !v)}
              className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="Add item"
            >
              <Plus className="w-5 h-5" />
            </button>
          )}
          {onClearItems && (
            <button
              onClick={onClearItems}
              className="rounded-full p-2 hover:bg-red-100 dark:hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              aria-label="Clear items"
            >
              <Trash2 className="w-5 h-5 text-red-500" />
            </button>
          )}
        </div>
      </div>

      <ul className="list-disc pl-4 text-sm space-y-1 mb-2 flex-grow overflow-y-auto">
        {items.length === 0 ? (
          <li className="italic text-gray-500">No items yet</li>
        ) : (
          items.map((item, idx) => <li key={idx}>{item}</li>)
        )}
      </ul>

      {inputVisible && onAddItem && (
        <div className="mt-2 flex flex-col sm:flex-row gap-2 sm:items-center">
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="Enter item..."
            className={classNames(
              "flex-grow px-3 py-2 text-sm rounded border",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
              error ? "border-red-500" : "border-gray-300"
            )}
            aria-label="New item input"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSubmit}
              className="flex items-center justify-center px-3 py-2 rounded bg-blue-500 text-white text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 min-w-[44px] min-h-[44px]"
              aria-label="Submit item"
            >
              <AnimatePresence mode="wait" initial={false}>
                {submitted ? (
                  <motion.div
                    key="check"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Check className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="add"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    Add
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <button
              onClick={() => {
                setInputVisible(false);
                setInputText("");
                setError("");
              }}
              className="flex items-center justify-center px-3 py-2 rounded bg-gray-200 dark:bg-gray-600 text-sm hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 min-w-[44px] min-h-[44px]"
              aria-label="Cancel add"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </motion.div>
  );
}
