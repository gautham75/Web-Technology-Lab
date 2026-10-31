import ProgressBar from "./ProgressBar";

function CourseList({ courses }) {
  return (
    <section className="course-section" id="courses">
      <h2>My Courses</h2>
      {courses.length === 0 && <p className="empty">No courses found.</p>}
      <div className="course-list">
        {courses.map((course) => (
          <div className="course-item" key={course.name}>
            <div className="course-top">
              <span>{course.name}</span>
              <strong>{course.progress}%</strong>
            </div>
            <ProgressBar percent={course.progress} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseList;
