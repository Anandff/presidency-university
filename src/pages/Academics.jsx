import React from "react";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  TrendingUp
} from "lucide-react";

import { courses, assignments, examinations } from "../data/academicData";

export default function Academics() {
  const averageAttendance = Math.round(
    courses.reduce((sum, course) => sum + course.attendance, 0) /
      courses.length
  );

  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <span className="panel-kicker">ACADEMICS</span>
          <h1>My Academics</h1>
          <p>
            Everything related to your current semester in one place.
          </p>
        </div>

        <div className="semester-selector">
          <CalendarDays size={16} />
          Semester 1
          <ChevronRight size={15} />
        </div>
      </div>

      <div className="academic-stats">
        <AcademicStat
          icon={<BookOpen />}
          label="Courses"
          value={courses.length}
          meta="Current semester"
        />

        <AcademicStat
          icon={<TrendingUp />}
          label="Attendance"
          value={`${averageAttendance}%`}
          meta="Overall average"
          green
        />

        <AcademicStat
          icon={<GraduationCap />}
          label="Credits"
          value="16 / 24"
          meta="Completed this semester"
        />

        <AcademicStat
          icon={<CheckCircle2 />}
          label="Assignments"
          value="1 / 3"
          meta="Submitted"
          orange
        />
      </div>

      <div className="academic-layout">
        <section className="academic-main-card">
          <div className="section-title">
            <div>
              <span className="panel-kicker">CURRENT SEMESTER</span>
              <h2>Your courses</h2>
            </div>

            <span className="course-count">
              {courses.length} courses
            </span>
          </div>

          <div className="course-list">
            {courses.map((course) => (
              <div className="course-row" key={course.code}>
                <div className={`course-icon ${course.color}`}>
                  <BookOpen size={18} />
                </div>

                <div className="course-details">
                  <span>{course.code}</span>
                  <strong>{course.name}</strong>
                  <small>{course.faculty}</small>
                </div>

                <div className="course-attendance">
                  <span>Attendance</span>
                  <strong className={course.attendance < 80 ? "low" : ""}>
                    {course.attendance}%
                  </strong>
                  <div className="course-progress">
                    <span
                      style={{ width: `${course.attendance}%` }}
                    />
                  </div>
                </div>

                <div className="course-grade">
                  <span>Grade</span>
                  <strong>{course.grade}</strong>
                </div>

                <div className="course-credits">
                  <span>Credits</span>
                  <strong>{course.credits}</strong>
                </div>

                <button className="course-open">
                  <ArrowUpRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="academic-side-card">
          <div className="section-title">
            <div>
              <span className="panel-kicker">DEADLINES</span>
              <h2>Assignments</h2>
            </div>
          </div>

          <div className="assignment-list">
            {assignments.map((assignment) => (
              <div className="assignment-item" key={assignment.title}>
                <div className="assignment-icon">
                  <BookOpen size={16} />
                </div>

                <div>
                  <strong>{assignment.title}</strong>
                  <span>{assignment.course}</span>
                  <small>
                    {assignment.due} • {assignment.time}
                  </small>
                </div>

                <span
                  className={`assignment-status ${
                    assignment.status === "Submitted"
                      ? "submitted"
                      : ""
                  }`}
                >
                  {assignment.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="academic-main-card exam-card">
        <div className="section-title">
          <div>
            <span className="panel-kicker">ASSESSMENTS</span>
            <h2>Upcoming examinations</h2>
          </div>

          <button className="text-button">
            Academic calendar <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="exam-list">
          {examinations.map((exam) => (
            <div className="exam-row" key={`${exam.title}-${exam.course}`}>
              <div className="exam-date">
                <strong>{exam.date.split(" ")[0]}</strong>
                <span>{exam.date.split(" ")[1]}</span>
              </div>

              <div className="exam-info">
                <strong>{exam.title}</strong>
                <span>{exam.course}</span>
              </div>

              <div className="exam-time">
                <span>Time</span>
                <strong>{exam.time}</strong>
              </div>

              <div className="exam-room">
                <span>Venue</span>
                <strong>{exam.room}</strong>
              </div>

              <button className="course-open">
                <ChevronRight size={17} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function AcademicStat({ icon, label, value, meta, green, orange }) {
  return (
    <div className="academic-stat">
      <div
        className={`academic-stat-icon ${
          green ? "green" : orange ? "orange" : ""
        }`}
      >
        {icon}
      </div>

      <span>{label}</span>
      <strong>{value}</strong>
      <small>{meta}</small>
    </div>
  );
}