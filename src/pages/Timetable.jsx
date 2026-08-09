import React from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  UserRound
} from "lucide-react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const schedule = [
  {
    day: "Mon",
    time: "09:00 - 10:00",
    subject: "Problem Solving Using C",
    code: "BCS101",
    faculty: "Dr. Arjun Rao",
    room: "AB-2 • 204",
    type: "Lecture",
    color: "blue"
  },
  {
    day: "Mon",
    time: "11:00 - 12:00",
    subject: "Applied Mathematics",
    code: "MAT101",
    faculty: "Dr. Priya Sharma",
    room: "AB-2 • 301",
    type: "Lecture",
    color: "violet"
  },
  {
    day: "Tue",
    time: "10:00 - 11:00",
    subject: "Web Design & Development",
    code: "WEB101",
    faculty: "Prof. Karan Mehta",
    room: "SJT • Lab 2",
    type: "Lab",
    color: "green"
  },
  {
    day: "Tue",
    time: "14:00 - 15:00",
    subject: "Professional Communication",
    code: "ENG101",
    faculty: "Prof. Riya Nair",
    room: "AB-1 • 106",
    type: "Lecture",
    color: "pink"
  },
  {
    day: "Wed",
    time: "09:00 - 10:00",
    subject: "Digital Computer Fundamentals",
    code: "DCF101",
    faculty: "Dr. Neha Kapoor",
    room: "AB-2 • 208",
    type: "Lecture",
    color: "orange"
  },
  {
    day: "Wed",
    time: "12:00 - 14:00",
    subject: "Problem Solving Using C",
    code: "BCS101",
    faculty: "Dr. Arjun Rao",
    room: "SJT • Lab 4",
    type: "Lab",
    color: "blue"
  },
  {
    day: "Thu",
    time: "10:00 - 11:00",
    subject: "Applied Mathematics",
    code: "MAT101",
    faculty: "Dr. Priya Sharma",
    room: "AB-2 • 301",
    type: "Lecture",
    color: "violet"
  },
  {
    day: "Thu",
    time: "13:00 - 14:00",
    subject: "Web Design & Development",
    code: "WEB101",
    faculty: "Prof. Karan Mehta",
    room: "AB-1 • 112",
    type: "Lecture",
    color: "green"
  },
  {
    day: "Fri",
    time: "09:00 - 10:00",
    subject: "Digital Computer Fundamentals",
    code: "DCF101",
    faculty: "Dr. Neha Kapoor",
    room: "AB-2 • 208",
    type: "Lecture",
    color: "orange"
  },
  {
    day: "Fri",
    time: "11:00 - 12:00",
    subject: "Professional Communication",
    code: "ENG101",
    faculty: "Prof. Riya Nair",
    room: "AB-1 • 106",
    type: "Lecture",
    color: "pink"
  }
];

export default function Timetable() {
  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <span className="panel-kicker">ACADEMIC SCHEDULE</span>
          <h1>My Timetable</h1>
          <p>Keep track of your classes, labs and campus locations.</p>
        </div>

        <button className="semester-selector">
          <CalendarDays size={16} />
          10 – 14 August 2026
          <ChevronRight size={15} />
        </button>
      </div>

      <div className="timetable-toolbar">
        <button className="week-button">
          <ChevronLeft size={16} />
        </button>

        <div className="week-title">
          <strong>Week 3</strong>
          <span>August 2026</span>
        </div>

        <button className="week-button">
          <ChevronRight size={16} />
        </button>

        <button className="today-button">
          Today
        </button>
      </div>

      <div className="timetable-card">
        <div className="timetable-head">
          <div className="time-column">TIME</div>

          {days.map((day) => (
            <div className="day-column" key={day}>
              <span>{day}</span>
              <strong>
                {day === "Mon"
                  ? "10"
                  : day === "Tue"
                  ? "11"
                  : day === "Wed"
                  ? "12"
                  : day === "Thu"
                  ? "13"
                  : "14"}
              </strong>
            </div>
          ))}
        </div>

        <div className="timetable-body">
          {["09:00", "10:00", "11:00", "12:00", "13:00", "14:00"].map(
            (time) => (
              <div className="time-row" key={time}>
                <div className="time-label">
                  <Clock3 size={12} />
                  {time}
                </div>

                {days.map((day) => {
                  const classItem = schedule.find(
                    (item) =>
                      item.day === day &&
                      item.time.startsWith(time)
                  );

                  return (
                    <div className="class-cell" key={day}>
                      {classItem && (
                        <div className={`class-block ${classItem.color}`}>
                          <span className="class-type">
                            {classItem.type}
                          </span>

                          <strong>{classItem.subject}</strong>

                          <small>{classItem.code}</small>

                          <div className="class-meta">
                            <span>
                              <UserRound size={11} />
                              {classItem.faculty}
                            </span>

                            <span>
                              <MapPin size={11} />
                              {classItem.room}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )
          )}
        </div>
      </div>

      <div className="timetable-legend">
        <span><i className="legend-blue" /> Programming</span>
        <span><i className="legend-violet" /> Mathematics</span>
        <span><i className="legend-green" /> Web / Lab</span>
        <span><i className="legend-orange" /> Computer Fundamentals</span>
        <span><i className="legend-pink" /> Communication</span>
      </div>
    </div>
  );
}