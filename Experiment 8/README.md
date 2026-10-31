# Experiment 8: Modern User Interface Design using ReactJS

**Course:** Web Technology Laboratory  
**Register Number:** URK24CS1158  
**Student Name:** Gautham Manoj  
**Date of Exercise:** 18.09.2026  
**GitHub Host Link:** [https://gautham75.github.io/Web-Technology-Lab/](https://gautham75.github.io/Web-Technology-Lab/)

---

## 🎯 Aim
To design and develop a modern, responsive user interface using ReactJS by applying the following concepts:
- React components
- JSX
- Props
- State (`useState`)
- Event handling (`onClick`, `onChange`)
- CSS styling & CSS variables
- Responsive design & media queries
- Reusable UI components

---

## 📁 Folder Contents

```
Experiment 8/
├── Experiment8_1/                 # Student Lab Activity (Core Dashboard)
│   ├── src/
│   │   ├── components/
│   │   │   ├── CourseList.jsx     # Reusable Course List Component
│   │   │   ├── Navbar.jsx         # Responsive Navigation Bar with Theme Toggle
│   │   │   ├── StatCard.jsx       # Reusable Statistic Metric Card
│   │   │   └── TaskSection.jsx    # Controlled Form for Adding Tasks
│   │   ├── App.css                # CSS styling, Dark Mode, and Media Queries
│   │   ├── App.jsx                # Main Dashboard Component & State Management
│   │   ├── index.css              # Global styles
│   │   └── main.jsx               # Application entry point
│   ├── index.html                 # HTML shell
│   ├── package.json               # Dependencies (React 18 & Vite)
│   └── vite.config.js             # Vite configuration
│
├── Experiment8_2/                 # Additional Student Challenge (Full-Featured Dashboard)
│   ├── src/
│   │   ├── components/
│   │   │   ├── CourseList.jsx     # Dynamic Course List with Progress Bars
│   │   │   ├── Navbar.jsx         # Header with Search, Notification Badge, Profile Avatar
│   │   │   ├── ProgressBar.jsx    # Reusable Progress Indicator Bar
│   │   │   ├── Sidebar.jsx        # Slide-out Navigation Drawer with Overlay
│   │   │   ├── StatCard.jsx       # Metric Cards (Dynamic Course Count & Completion %)
│   │   │   └── TaskSection.jsx    # Task list with Checkbox Completion & Delete Button
│   │   ├── App.css                # Comprehensive modern styling with CSS variables
│   │   ├── App.jsx                # Extended State Management (Search, Notifications, Tasks)
│   │   ├── index.css              # Global styles
│   │   └── main.jsx               # Application entry point
│   ├── index.html                 # HTML shell
│   ├── package.json               # Dependencies (React 18 & Vite)
│   └── vite.config.js             # Vite configuration
│
└── WT LAB Experiment 8 1158.docx  # Formatted Word Lab Report
```

---

## 🚀 How to Run Locally

### Experiment 8.1 (Core Dashboard)
```bash
cd Experiment8_1
npm install
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

### Experiment 8.2 (Additional Challenge)
```bash
cd Experiment8_2
npm install
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

---

## ✨ Features Implemented

### Part 1: Student Lab Activity (`Experiment8_1`)
1. **Navigation Bar**: Responsive navbar with branding, links, and Theme Toggle button.
2. **Welcome Section**: Personalized greeting (`Welcome URK24CS1158!!!`) and summary text.
3. **Four Statistic Cards**: Reusable cards displaying Courses, Assignments, Attendance, and CGPA.
4. **Course List**: Dynamic list rendered using JavaScript `.map()` method.
5. **Controlled Input Form**: Task entry using React state (`value` and `onChange`).
6. **Event Handling**: Button click triggers task addition to the list.
7. **Light/Dark Theme Switching**: Toggles CSS variables between light and dark themes.
8. **Responsive Layout**: Media queries for desktop, tablet (2 columns), and mobile (1 column).
9. **Hover Effects**: Subtle hover animations and elevations on cards and buttons.
10. **Reusable Components**: Separated into `Navbar`, `StatCard`, `CourseList`, and `TaskSection`.

### Part 2: Additional Student Challenge (`Experiment8_2`)
- **Profile Image**: Vector student avatar icon rendered in the navigation header.
- **Search Bar**: Real-time course filtering input with instant matching.
- **Notification Icon & Dropdown**: Bell icon with unread count badge (3 notifications) and interactive popup menu.
- **Progress Bars**: Custom animated progress bar component for each enrolled course.
- **Overall Completion Percentage**: Dynamically calculated overall course completion metric displayed in a stat card.
- **Task Completion (Checkboxes)**: Checkbox toggles task status with visual strikethrough styling.
- **Task Deletion**: Red delete button with hover effects to remove individual tasks.
- **Collapsible Sidebar**: Slide-over navigation panel with backdrop blur and overlay on mobile/tablet viewports.
- **Responsive Drawer Menu**: Hamburger menu toggle (`☰`) for mobile screens.
