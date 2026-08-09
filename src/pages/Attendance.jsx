import React from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  TrendingUp
} from "lucide-react";

const attendanceData = [
  {
    code: "BCS101",
    subject: "Problem Solving Using C",
    faculty: "Dr. Arjun Rao",
    total: 48,
    present: 45,
    percentage: 94,
    color: "blue"
  },
  {
    code: "MAT101",
    subject: "Applied Mathematics",
    faculty: "Dr. Priya Sharma",
    total: 46,
    present: 35,
    percentage: 76,
    color: "violet"
  },
  {
    code: "WEB101",
    subject: "Web Design & Development",
    faculty: "Prof. Karan Mehta",
    total: 40,
    present: 35,
    percentage: 88,
    color: "green"
  },
  {
    code: "DCF101",
    subject: "Digital Computer Fundamentals",
    faculty: "Dr. Neha Kapoor",
    total: 42,
    present: 35,
    percentage: 83,
    color: "orange"
  },
  {
    code: "ENG101",
    subject: "Professional Communication",
    faculty: "Prof. Riya Nair",
    total: 32,
    present: 29,
    percentage: 91,
    color: "pink"
  }
];

export default function Attendance() {
  const totalClasses = attendanceData.reduce(
    (sum, item) => sum + item.total,
    0
  );

  const totalPresent = attendanceData.reduce(
    (sum, item) => sum + item.present,
    0
  );

  const overall = Math.round((totalPresent / totalClasses) * 100);

  const lowAttendance = attendanceData.filter(
    (item) => item.percentage < 80
  );

  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <span className="panel-kicker">ACADEMICS</span>
          <h1>Attendance</h1>
          <p>
            Monitor your attendance and stay above the university requirement.
          </p>
        </div>

        <button className="semester-selector">
          <CalendarDays size={16} />
          Semester 1
        </button>
      </div>

      {lowAttendance.length > 0 && (
        <div className="attendance-alert">
          <div className="attendance-alert-icon">
            <AlertTriangle size={18} />
          </div>

          <div>
            <strong>Attendance attention required</strong>
            <p>
              {lowAttendance[0].subject} is currently below 80%.
              Attend upcoming classes regularly to improve your percentage.
            </p>
          </div>

          <button>
            View details
            <ArrowUpRight size={14} />
          </button>
        </div>
      )}

      <div className="attendance-summary">
        <div className="attendance-summary-card main">
          <div className="attendance-ring">
            <svg viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                className="ring-background"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                className="ring-progress"
                style={{
                  strokeDasharray: `${overall * 3.14} 314`
                }}
              />
            </svg>

            <div className="ring-value">
              <strong>{overall}%</strong>
              <span>Overall</span>
            </div>
          </div>

          <div className="summary-text">
            <span className="panel-kicker">CURRENT STATUS</span>
            <h2>Good attendance</h2>
            <p>
              You have attended {totalPresent} out of {totalClasses} classes
              this semester.
            </p>

            <div className="summary-status">
              <CheckCircle2 size={15} />
              Above minimum requirement
            </div>
          </div>
        </div>

        <SummaryCard
          icon={<Clock3 />}
          label="Classes attended"
          value={totalPresent}
          meta={`out of ${totalClasses}`}
        />

        <SummaryCard
          icon={<TrendingUp />}
          label="This month"
          value="+2.4%"
          meta="Improvement"
          green
        />

        <SummaryCard
          icon={<AlertTriangle />}
          label="Need attention"
          value={lowAttendance.length}
          meta="Subjects below 80%"
          orange
        />
      </div>

      <section className="attendance-card">
        <div className="section-title">
          <div>
            <span className="panel-kicker">SUBJECT WISE</span>
            <h2>Attendance details</h2>
          </div>

          <button className="text-button">
            Download report
            <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="attendance-table-head">
          <span>SUBJECT</span>
          <span>CLASSES</span>
          <span>PRESENT</span>
          <span>ATTENDANCE</span>
          <span>STATUS</span>
        </div>

        <div className="attendance-table">
          {attendanceData.map((item) => (
            <div className="attendance-table-row" key={item.code}>
              <div className="attendance-subject">
                <div className={`attendance-subject-icon ${item.color}`}>
                  {item.code.slice(0, 2)}
                </div>

                <div>
                  <strong>{item.subject}</strong>
                  <span>
                    {item.code} • {item.faculty}
                  </span>
                </div>
              </div>

              <div className="attendance-number">
                {item.total}
              </div>

              <div className="attendance-number">
                {item.present}
              </div>

              <div className="attendance-percentage">
                <div className="attendance-percentage-top">
                  <strong className={item.percentage < 80 ? "low" : ""}>
                    {item.percentage}%
                  </strong>
                </div>

                <div className="attendance-progress">
                  <span
                    className={item.percentage < 80 ? "warning-bar" : ""}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>

              <div>
                {item.percentage >= 80 ? (
                  <span className="attendance-status good">
                    <CheckCircle2 size={12} />
                    Safe
                  </span>
                ) : (
                  <span className="attendance-status warning">
                    <AlertTriangle size={12} />
                    Attention
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="attendance-tips">
        <div className="tips-icon">
          <Clock3 size={19} />
        </div>

        <div>
          <strong>Attendance calculator</strong>
          <p>
            Need to know how many classes you can miss or need to attend
            to reach a target percentage?
          </p>
        </div>

        <button>
          Calculate
          <ArrowUpRight size={14} />
        </button>
      </section>
    </div>
  );
}

function SummaryCard({ icon, label, value, meta, green, orange }) {
  return (
    <div className="attendance-summary-card">
      <div
        className={`attendance-summary-icon ${
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