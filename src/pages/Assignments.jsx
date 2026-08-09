import React from "react";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Filter,
  MoreHorizontal,
  UploadCloud
} from "lucide-react";

const assignments = [
  {
    id: 1,
    title: "Web Development Assignment 03",
    course: "Web Design & Development",
    code: "WEB101",
    faculty: "Prof. Karan Mehta",
    due: "11 Aug 2026",
    time: "11:59 PM",
    status: "Pending",
    priority: "High",
    color: "green"
  },
  {
    id: 2,
    title: "C Programming Lab Record",
    course: "Problem Solving Using C",
    code: "BCS101",
    faculty: "Dr. Arjun Rao",
    due: "16 Aug 2026",
    time: "05:00 PM",
    status: "Pending",
    priority: "Medium",
    color: "blue"
  },
  {
    id: 3,
    title: "Mathematics Problem Set",
    course: "Applied Mathematics",
    code: "MAT101",
    faculty: "Dr. Priya Sharma",
    due: "18 Aug 2026",
    time: "11:59 PM",
    status: "Submitted",
    priority: "Normal",
    color: "violet"
  },
  {
    id: 4,
    title: "Computer Fundamentals Report",
    course: "Digital Computer Fundamentals",
    code: "DCF101",
    faculty: "Dr. Neha Kapoor",
    due: "21 Aug 2026",
    time: "06:00 PM",
    status: "Pending",
    priority: "Medium",
    color: "orange"
  },
  {
    id: 5,
    title: "Communication Skills Presentation",
    course: "Professional Communication",
    code: "ENG101",
    faculty: "Prof. Riya Nair",
    due: "25 Aug 2026",
    time: "02:00 PM",
    status: "Submitted",
    priority: "Normal",
    color: "pink"
  }
];

export default function Assignments() {
  const pending = assignments.filter(
    (item) => item.status === "Pending"
  ).length;

  const submitted = assignments.filter(
    (item) => item.status === "Submitted"
  ).length;

  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <span className="panel-kicker">ACADEMICS</span>
          <h1>Assignments</h1>
          <p>
            Track submissions, deadlines and coursework from one place.
          </p>
        </div>

        <button className="semester-selector">
          <CalendarDays size={16} />
          Semester 1
        </button>
      </div>

      <div className="assignment-overview">
        <OverviewCard
          icon={<FileText />}
          label="Total assignments"
          value={assignments.length}
          meta="This semester"
        />

        <OverviewCard
          icon={<Clock3 />}
          label="Pending"
          value={pending}
          meta="Need submission"
          orange
        />

        <OverviewCard
          icon={<CheckCircle2 />}
          label="Submitted"
          value={submitted}
          meta="Successfully submitted"
          green
        />

        <OverviewCard
          icon={<UploadCloud />}
          label="Completion"
          value={`${Math.round(
            (submitted / assignments.length) * 100
          )}%`}
          meta="Overall progress"
        />
      </div>

      <section className="assignments-card">
        <div className="section-title">
          <div>
            <span className="panel-kicker">COURSEWORK</span>
            <h2>All assignments</h2>
          </div>

          <div className="assignment-actions">
            <button className="assignment-filter">
              <Filter size={14} />
              Filter
            </button>

            <button className="text-button">
              Calendar view
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

        <div className="assignment-table-head">
          <span>ASSIGNMENT</span>
          <span>COURSE</span>
          <span>DUE DATE</span>
          <span>PRIORITY</span>
          <span>STATUS</span>
          <span></span>
        </div>

        <div className="assignment-table">
          {assignments.map((item) => (
            <div className="assignment-table-row" key={item.id}>
              <div className="assignment-main">
                <div className={`assignment-file-icon ${item.color}`}>
                  <FileText size={16} />
                </div>

                <div>
                  <strong>{item.title}</strong>
                  <span>{item.faculty}</span>
                </div>
              </div>

              <div className="assignment-course">
                <strong>{item.course}</strong>
                <span>{item.code}</span>
              </div>

              <div className="assignment-due">
                <strong>{item.due}</strong>
                <span>{item.time}</span>
              </div>

              <div>
                <span
                  className={`priority-badge ${item.priority.toLowerCase()}`}
                >
                  {item.priority}
                </span>
              </div>

              <div>
                {item.status === "Submitted" ? (
                  <span className="assignment-status submitted">
                    <CheckCircle2 size={12} />
                    Submitted
                  </span>
                ) : (
                  <span className="assignment-status pending">
                    <Clock3 size={12} />
                    Pending
                  </span>
                )}
              </div>

              <button className="assignment-more">
                <MoreHorizontal size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="assignment-reminder">
        <div className="reminder-icon">
          <Clock3 size={18} />
        </div>

        <div>
          <strong>Upcoming deadline</strong>
          <p>
            Web Development Assignment 03 is due tomorrow at 11:59 PM.
          </p>
        </div>

        <button>
          Open assignment
          <ArrowUpRight size={14} />
        </button>
      </section>
    </div>
  );
}

function OverviewCard({ icon, label, value, meta, green, orange }) {
  return (
    <div className="assignment-overview-card">
      <div
        className={`assignment-overview-icon ${
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