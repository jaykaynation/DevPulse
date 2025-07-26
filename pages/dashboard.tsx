// pages/dashboard.tsx
import { useState } from "react";
import withAuth from "../utils/withAuth";
import SortableItem from "../components/SortableItem";
import { motion, AnimatePresence } from "framer-motion";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

function DashboardPage() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [analytics, setAnalytics] = useState<string[]>([]);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [widgetOrder, setWidgetOrder] = useState<string[]>([
    "tasks",
    "analytics",
    "notifications",
  ]);

  const handleAddItem = (
    type: "tasks" | "analytics",
    item: string
  ) => {
    if (!item.trim()) return;

    const timestamp = new Date().toLocaleTimeString();
    const note = `New ${type.slice(0, -1)} added at ${timestamp}`;
    setNotifications((prev) => [...prev, note]);

    if (type === "tasks") setTasks((prev) => [...prev, item]);
    else setAnalytics((prev) => [...prev, item]);
  };

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = widgetOrder.indexOf(active.id as string);
      const newIndex = widgetOrder.indexOf(over.id as string);
      setWidgetOrder((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  };

  const widgetMap: Record<string, JSX.Element> = {
    tasks: (
      <motion.div
        key="tasks"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <SortableItem
          widget={{ id: "tasks", title: "Tasks" }}
          items={tasks}
          onAddItem={(item) => handleAddItem("tasks", item)}
        />
      </motion.div>
    ),
    analytics: (
      <motion.div
        key="analytics"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <SortableItem
          widget={{ id: "analytics", title: "Analytics" }}
          items={analytics}
          onAddItem={(item) => handleAddItem("analytics", item)}
        />
      </motion.div>
    ),
    notifications: (
      <motion.div
        key="notifications"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <SortableItem
          widget={{ id: "notifications", title: "Notifications" }}
          items={notifications}
          onClearItems={handleClearNotifications}
        />
      </motion.div>
    ),
  };

  return (
    <main
      className="min-h-screen py-6 px-4 max-w-5xl mx-auto"
      role="main"
      aria-labelledby="dashboard-heading"
    >
      <h2 id="dashboard-heading" className="text-2xl font-semibold mb-6">
        Dashboard
      </h2>

      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={widgetOrder}
          strategy={verticalListSortingStrategy}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AnimatePresence>
              {widgetOrder.map((id) => widgetMap[id])}
            </AnimatePresence>
          </div>
        </SortableContext>
      </DndContext>
    </main>
  );
}

export default withAuth(DashboardPage);
