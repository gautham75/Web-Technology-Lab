function CourseList({ courses }) {
  return (
    <section className="course-section" id="courses">
      <h2>My Courses</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <div className="course-item" key={index}>
            {course}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseList;
