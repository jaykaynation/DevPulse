// types/dashboard.ts
export type WidgetType = "Analytics" | "Tasks" | "Notifications";

export interface Widget {
  id: WidgetType;
  items: string[];
}
