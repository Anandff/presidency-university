import React from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  FileText,
  MapPin,
  MoreHorizontal
} from "lucide-react";

const exams = [
  {
    title: "Internal Assessment 1",
    course: "Applied Mathematics",
    code: "MAT101",
    date: "18 Aug 2026",
    day: "Tuesday",
    time: "10:00 AM - 11:00 AM",
    room: "AB-2 • 301",
    type: "Theory",
    color: "violet"
  },
  {
    title: "Internal Assessment 1",
    course: "Problem Solving Using C",
    code: "BCS101",
    date: "20 Aug 2026",
    day: "Thursday",
    time: "02:00 PM - 03:00 PM",
    room: "AB-2 • 204",
    type: "Theory",
    color: "blue"
  },
  {
    title: "Practical Assessment",
    course: "Web Design & Development",
    code: "WEB101",
    date: "24 Aug 2026",
    day: "Monday",
    time: "11:00 AM - 01:00 PM",
    room: "SJT • Lab 2",
    type: "Practical",
    color: "green"
  },
  {
    title: "Internal Assessment 1",
    course: "Digital Computer Fundamentals",
    code: "DCF101",
    date: "26 Aug 2026",
    day: "Wednesday",
    time: "10:00 AM - 11:00 AM",
    room: "AB-2 • 208",
    type: "Theory",
    color: "orange"
  },
  {
    title: "Communication Assessment",
    course: "Professional Communication",
    code: "ENG101",
    date: "28 Aug 2026",
    day: "Friday",
    time: "02:00 PM - 03:00 PM",
    room: "AB-1 • 106",
    type: "Assessment",
    color: "pink"
  }
];

export default function Examinations() {
  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <span className="panel-kicker">ACADEMICS</span>
          <h1>Examinations</h1>
          <p>
            View upcoming assessments, timings and examination venues.
          </p>
        </div>

        <button className="semester-selector">
          <CalendarDays size={16} />
          Semester 1
        </button>
      </div>

      <div className="exam-overview">
        <div className="exam-overview-card">
          <div className="exam-overview-icon">
            <CalendarDays size={17} />
          </div>

          <span>Upcoming exams</span>
          <strong>{exams.length}</strong>
          <small>Scheduled assessments</small>
        </div>

        <div className="exam-overview-card">
          <div className="exam-overview-icon blue">
            <Clock3 size={17} />
          </div>

          <span>Next examination</span>
          <strong>18 Aug</strong>
          <small>Applied Mathematics</small>
        </div>

        <div className="exam-overview-card">
          <div className="exam-overview-icon green">
            <FileText size={17} />
          </div>

          <span>Exam format</span>
          <strong>3 Types</strong>
          <small>Theory • Practical • Assessment</small>
        </div>

        <div className="exam-overview-card">
          <div className="exam-overview-icon orange">
            <MapPin size={17} />
          </div>

          <span>Exam venues</span>
          <strong>4</strong>
          <small>Across university blocks</small>
        </div>
      </div>

      <section className="examinations-card">
        <div className="section-title">
          <div>
            <span className="panel-kicker">EXAM SCHEDULE</span>
            <h2>Upcoming examinations</h2>
          </div>

          <button className="text-button">
            Academic calendar
            <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="exam-schedule-list">
          {exams.map((exam) => (
            <div className="exam-schedule-row" key={`${exam.code}-${exam.date}`}>
              <div className={`exam-date-large ${exam.color}`}>
                <strong>{exam.date.split(" ")[0]}</strong>
                <span>{exam.date.split(" ")[1]}</span>
              </div>

              <div className="exam-schedule-main">
                <div>
                  <span className="exam-type">{exam.type}</span>
                  <strong>{exam.title}</strong>
                  <small>
                    {exam.course} • {exam.code}
                  </small>
                </div>
              </div>

              <div className="exam-detail">
                <span>DATE</span>
                <strong>{exam.day}</strong>
                <small>{exam.date}</small>
              </div>

              <div className="exam-detail">
                <span>TIME</span>
                <strong>{exam.time}</strong>
              </div>

              <div className="exam-detail">
                <span>VENUE</span>
                <strong>
                  <MapPin size={12} />
                  {exam.room}
                </strong>
              </div>

              <button className="exam-more">
                <MoreHorizontal size={17} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="exam-preparation">
        <div className="exam-prep-icon">
          <FileText size={19} />
        </div>

        <div>
          <strong>Examination preparation</strong>
          <p>
            Your examination timetable, hall ticket and important
            instructions will appear here when available.
          </p>
        </div>

        <button>
          View instructions
          <ArrowUpRight size={14} />
        </button>
      </section>
    </div>
  );
}