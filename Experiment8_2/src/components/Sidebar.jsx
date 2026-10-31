function Sidebar({ open, onClose }) {
  return (
    <>
      <aside className={open ? "sidebar open" : "sidebar"}>
        <a href="#home" onClick={onClose}>🏠 Dashboard</a>
        <a href="#courses" onClick={onClose}>📚 Courses</a>
        <a href="#tasks" onClick={onClose}>✅ Tasks</a>
        <a href="#profile" onClick={onClose}>👤 Profile</a>
      </aside>

      {open && <div className="overlay" onClick={onClose}></div>}
    </>
  );
}

export default Sidebar;
