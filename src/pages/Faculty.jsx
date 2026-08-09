import React from "react";
import {
  ArrowUpRight,
  Building2,
  Mail,
  Search,
  Star,
  UserRound
} from "lucide-react";

const faculty = [
  {
    name: "Dr. Arjun Rao",
    designation: "Associate Professor",
    department: "Computer Science & Engineering",
    code: "CSE",
    cabin: "AB-2 • 314",
    email: "arjun.rao@presidency.edu.in",
    experience: "11 years",
    color: "blue"
  },
  {
    name: "Dr. Priya Sharma",
    designation: "Professor",
    department: "Mathematics",
    code: "MAT",
    cabin: "AB-2 • 407",
    email: "priya.sharma@presidency.edu.in",
    experience: "15 years",
    color: "violet"
  },
  {
    name: "Prof. Karan Mehta",
    designation: "Assistant Professor",
    department: "Computer Science & Engineering",
    code: "CSE",
    cabin: "SJT • 216",
    email: "karan.mehta@presidency.edu.in",
    experience: "7 years",
    color: "green"
  },
  {
    name: "Dr. Neha Kapoor",
    designation: "Associate Professor",
    department: "Computer Applications",
    code: "CA",
    cabin: "AB-1 • 208",
    email: "neha.kapoor@presidency.edu.in",
    experience: "9 years",
    color: "orange"
  },
  {
    name: "Prof. Riya Nair",
    designation: "Assistant Professor",
    department: "English & Communication",
    code: "ENG",
    cabin: "AB-1 • 119",
    email: "riya.nair@presidency.edu.in",
    experience: "6 years",
    color: "pink"
  },
  {
    name: "Dr. Vikram Singh",
    designation: "Professor",
    department: "Information Technology",
    code: "IT",
    cabin: "AB-2 • 221",
    email: "vikram.singh@presidency.edu.in",
    experience: "14 years",
    color: "blue"
  }
];

export default function Faculty() {
  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <span className="panel-kicker">UNIVERSITY FACULTY</span>
          <h1>Faculty List</h1>
          <p>
            Find faculty members, departments and official contact information.
          </p>
        </div>

        <button className="semester-selector">
          <UserRound size={16} />
          Faculty
        </button>
      </div>

      <div className="faculty-toolbar">
        <div className="faculty-search">
          <Search size={15} />
          <input
            type="text"
            placeholder="Search faculty, department..."
          />
        </div>

        <button className="faculty-filter active">
          All Faculty
        </button>

        <button className="faculty-filter">
          CSE
        </button>

        <button className="faculty-filter">
          IT
        </button>

        <button className="faculty-filter">
          Mathematics
        </button>
      </div>

      <div className="faculty-stats">
        <div>
          <span>Total faculty</span>
          <strong>126</strong>
        </div>

        <div>
          <span>Departments</span>
          <strong>18</strong>
        </div>

        <div>
          <span>Available today</span>
          <strong>94</strong>
        </div>

        <div>
          <span>Student support</span>
          <strong>24/7</strong>
        </div>
      </div>

      <section className="faculty-card">
        <div className="section-title">
          <div>
            <span className="panel-kicker">ACADEMIC STAFF</span>
            <h2>Faculty members</h2>
          </div>

          <button className="text-button">
            View departments
            <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="faculty-grid">
          {faculty.map((member) => (
            <div className="faculty-profile" key={member.email}>
              <div className="faculty-profile-top">
                <div className={`faculty-avatar ${member.color}`}>
                  {member.name
                    .replace("Dr. ", "")
                    .replace("Prof. ", "")
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <button className="faculty-star">
                  <Star size={14} />
                </button>
              </div>

              <div className="faculty-name">
                <strong>{member.name}</strong>
                <span>{member.designation}</span>
              </div>

              <div className="faculty-department">
                <Building2 size={13} />
                <span>{member.department}</span>
              </div>

              <div className="faculty-info">
                <div>
                  <span>OFFICE</span>
                  <strong>{member.cabin}</strong>
                </div>

                <div>
                  <span>EXPERIENCE</span>
                  <strong>{member.experience}</strong>
                </div>
              </div>

              <div className="faculty-actions">
                <a href={`mailto:${member.email}`}>
                  <Mail size={13} />
                  Contact
                </a>

                <button>
                  Profile
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}