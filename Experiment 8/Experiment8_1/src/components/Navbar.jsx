function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav className="navbar">
      <h2>EduDashboard URK24CS1158</h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#tasks">Tasks</a>
        <a href="#profile">Profile</a>
      </div>

      <button className="btn" onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
