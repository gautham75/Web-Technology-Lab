import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import StatCard from "./components/StatCard";
import CourseList from "./components/CourseList";
import TaskSection from "./components/TaskSection";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);

  const courses = [
    "Web Technology",
    "Database Management",
    "Machine Learning",
    "Computer Networks",
  ];

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />

      <main className="dashboard" id="home">
        <section className="welcome">
          <h1>Welcome URK24CS1158!!!</h1>
          <p>Here is your academic overview.</p>
        </section>

        <section className="cards">
          <StatCard title="Courses" value="6" />
          <StatCard title="Assignments" value="12" />
          <StatCard title="Attendance" value="92%" />
          <StatCard title="CGPA" value="8.7" />
        </section>

        <CourseList courses={courses} />
        <TaskSection tasks={tasks} onAddTask={addTask} />
      </main>
    </div>
  );
}

export default App;
