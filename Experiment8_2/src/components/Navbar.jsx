const profileImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='%234f46e5'%3E%3Ccircle cx='50' cy='50' r='50' fill='%234f46e5'/%3E%3Ccircle cx='50' cy='38' r='18' fill='white'/%3E%3Cpath d='M20 85 c0 -18 16 -28 30 -28 s30 10 30 28 Z' fill='white'/%3E%3C/svg%3E";

function Navbar({
  darkMode,
  toggleTheme,
  toggleMenu,
  search,
  setSearch,
  notifications,
  showNotifications,
  toggleNotifications,
}) {
  return (
    <nav className="navbar" id="profile">
      <div className="nav-left">
        <button className="menu-btn" onClick={toggleMenu} aria-label="Menu">
          ☰
        </button>
        <h2>EduDashboard URK24CS1158</h2>
      </div>

      <input
        className="search-bar"
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="nav-right">
        <div className="notification-wrapper">
          <button
            className="icon-btn"
            onClick={toggleNotifications}
            aria-label="Notifications"
          >
            🔔
            {notifications.length > 0 && (
              <span className="badge">{notifications.length}</span>
            )}
          </button>
          {showNotifications && (
            <div className="dropdown">
              {notifications.map((note, index) => (
                <p key={index}>{note}</p>
              ))}
            </div>
          )}
        </div>

        <button className="btn" onClick={toggleTheme}>
          {darkMode ? "Light" : "Dark"}
        </button>

        <img className="avatar" src={profileImage} alt="Student profile" />
      </div>
    </nav>
  );
}

export default Navbar;
