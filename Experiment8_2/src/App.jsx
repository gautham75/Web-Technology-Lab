import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import CourseList from "./components/CourseList";
import TaskSection from "./components/TaskSection";

const courseData = [
  { name: "Web Technology", progress: 80 },
  { name: "Database Management", progress: 65 },
  { name: "Machine Learning", progress: 40 },
  { name: "Computer Networks", progress: 90 },
];

const notifications = [
  "Assignment 3 due tomorrow",
  "New material added: Machine Learning",
  "Lab exam on Friday",
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const filteredCourses = courseData.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  const completion = Math.round(
    courseData.reduce((sum, c) => sum + c.progress, 0) / courseData.length
  );

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar
        darkMode={darkMode}
        toggleTheme={() => setDarkMode(!darkMode)}
        toggleMenu={() => setMenuOpen(!menuOpen)}
        search={search}
        setSearch={setSearch}
        notifications={notifications}
        showNotifications={showNotifications}
        toggleNotifications={() => setShowNotifications(!showNotifications)}
      />
      <div className="layout">
        <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
        <main className="dashboard" id="home">
          <section className="welcome">
            <h1>Welcome URK24CS1158!!!</h1>
            <p>Here is your academic overview.</p>
          </section>

          <section className="cards">
            <StatCard title="Courses" value={courseData.length} />
            <StatCard title="Assignments" value="12" />
            <StatCard title="Attendance" value="92%" />
            <StatCard title="Completion" value={`${completion}%`} />
          </section>

          <CourseList courses={filteredCourses} />
          <TaskSection
            tasks={tasks}
            onAddTask={addTask}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
