
# DevPulse

A modern, responsive developer productivity dashboard with an AI assistant, drag-and-drop widgets, and real-time feedback – built using Next.js, TypeScript, and Tailwind CSS.

---

## 🚀 Live Demo

👉 [VIEW LIVE HERE](LIVE_DEPLOYMENT_LINK)

---

## ✨ Features

- 🔐 **Login Authentication**
  - Simple credential check (`admin` / `admin`) for access control
  - Hides login button when user is authenticated

- 🧩 **Modular Drag-and-Drop Dashboard**
  - Add, reorder, and delete widgets
  - Widgets include: Tasks, Notifications, Analytics
  - Persistent UI structure using DnD Kit and Framer Motion

- 🧠 **Assistant Chat Interface**
  - Real-time input validation
  - Spinner shows during assistant response loading
  - Clean, accessible conversation UI

- 🌗 **Dark/Light Mode Toggle**
  - One-click theme switcher
  - Remembers preference using `next-themes`

- 🖱️ **UX-Polished Widgets**
  - Subtle animations on widget render and add
  - Confirm checkmark when item is added
  - Clear cancel and add states

- 📱 **Responsive Design**
  - Fully optimized for mobile, tablet, and desktop
  - Accessible tap targets and keyboard nav

- ♿ **Accessibility Features**
  - ARIA attributes for screen reader support
  - Keyboard accessible inputs and buttons
  - Live regions and visually hidden labels for better a11y

- 🛠️ **Error Handling and Validation**
  - Input forms validate and give instant feedback
  - Authentication provides error for incorrect credentials

---

## 🧰 Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [DnD Kit](https://dndkit.com/)
- [Lucide React Icons](https://lucide.dev/)
- [Next Themes](https://github.com/pacocoursey/next-themes)

---

## 🛠️ Getting Started (Local Setup)

1. **Clone the repo**

   ```bash
   git clone GITHUB_REPOSITORY_URL
   cd devpulse
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the dev server**

   ```bash
   npm run dev
   ```

4. **Login Info**

   - Username: `admin`
   - Password: `admin`

---

## 🧪 Usage Guide

- **Dashboard:**
  - Add new widgets and items
  - Drag to rearrange widgets
  - Clear items with the delete icon

- **Assistant:**
  - Type messages and get intelligent responses
  - Shows loading spinner while assistant is processing

- **Theme:**
  - Use the toggle in the footer to switch themes

- **Logout:**
  - Accessible via button in the footer (when logged in)

---

## 📷 Screenshots

(SCREENSHOTS_HERE)

---

## 📄 License

MIT

---

## 🙋 Author

Built with ❤️ by YOUR_NAME
