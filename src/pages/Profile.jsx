import {
  ArrowLeft,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  Edit3,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound
} from "lucide-react";

export default function Profile({ user, onBack }) {
  return (
    <div className="page-content profile-page">

      <div className="page-heading">
        <div>
          <span className="panel-kicker">STUDENT ACCOUNT</span>
          <h1>My Profile</h1>
          <p>
            Manage your personal information and university profile.
          </p>
        </div>

        <button className="profile-back-button" onClick={onBack}>
          <ArrowLeft size={14} />
          Back to dashboard
        </button>
      </div>

      <section className="profile-hero">
        <div className="profile-avatar-large">
          AK
        </div>

        <div className="profile-identity">
          <div className="profile-name-row">
            <h2>
              {user?.name || "Anand Kumar Bhargav"}
            </h2>

            <span className="verified-badge">
              <BadgeCheck size={12} />
              Verified
            </span>
          </div>

          <p>
            {user?.role || "Student"} • Presidency University
          </p>

          <div className="profile-meta">
            <span>
              <GraduationCap size={13} />
              B.Tech
            </span>

            <span>
              <BookOpen size={13} />
              BCA in Cyber Security
            </span>

            <span>
              <CalendarDays size={13} />
              1st Year
            </span>
          </div>
        </div>

        <button className="profile-edit-button">
          <Edit3 size={13} />
          Edit profile
        </button>
      </section>

      <div className="profile-grid">

        <section className="panel profile-panel">
          <div className="panel-head">
            <div>
              <span className="panel-kicker">PERSONAL INFORMATION</span>
              <h2>Basic details</h2>
            </div>

            <UserRound size={17} />
          </div>

          <div className="profile-details">

            <ProfileDetail
              icon={<UserRound size={14} />}
              label="Full name"
              value={user?.name || "Anand Kumar Bhargav"}
            />

            <ProfileDetail
              icon={<BadgeCheck size={14} />}
              label="University ID"
              value="20261BCA0157"
            />

            <ProfileDetail
              icon={<Mail size={14} />}
              label="University email"
              value="ANAND.20261BCA0157@presidencyuniversity.in"
            />

            <ProfileDetail
              icon={<Phone size={14} />}
              label="Phone number"
              value="+91 7542942011"
            />

            <ProfileDetail
              icon={<MapPin size={14} />}
              label="Campus"
              value="Presidency University"
            />

            <ProfileDetail
              icon={<GraduationCap size={14} />}
              label="Program"
              value="BCA in Cyber Security"
            />

          </div>
        </section>

        <section className="panel profile-panel">
          <div className="panel-head">
            <div>
              <span className="panel-kicker">ACADEMIC INFORMATION</span>
              <h2>Academic overview</h2>
            </div>

            <GraduationCap size={17} />
          </div>

          <div className="academic-profile-grid">

            <AcademicBox
              label="YEAR"
              value="1st"
            />

            <AcademicBox
              label="SEMESTER"
              value="01"
            />

            <AcademicBox
              label="PROGRAM"
              value="BCA"
            />

            <AcademicBox
              label="DEPARTMENT"
              value="SOIS"
            />

          </div>

          <div className="profile-progress">

            <div className="profile-progress-head">
              <span>Degree progress</span>
              <strong>50%</strong>
            </div>

            <div className="progress-track">
              <span style={{ width: "50%" }} />
            </div>

            <p>
              You're currently in the first year of your undergraduate program.
            </p>

          </div>
        </section>

      </div>

      <section className="panel profile-security">

        <div className="panel-head">
          <div>
            <span className="panel-kicker">ACCOUNT SECURITY</span>
            <h2>Security & access</h2>
          </div>

          <ShieldCheck size={17} />
        </div>

        <div className="security-row">

          <div className="security-icon">
            <ShieldCheck size={15} />
          </div>

          <div>
            <strong>University account</strong>
            <span>
              Your account is currently active.
            </span>
          </div>

          <span className="security-status">
            ACTIVE
          </span>

        </div>

        <div className="security-row">

          <div className="security-icon">
            <Mail size={15} />
          </div>

          <div>
            <strong>Email verification</strong>
            <span>
              University email verification is enabled.
            </span>
          </div>

          <span className="security-status">
            VERIFIED
          </span>

        </div>

      </section>

    </div>
  );
}

function ProfileDetail({ icon, label, value }) {
  return (
    <div className="profile-detail">

      <div className="profile-detail-icon">
        {icon}
      </div>

      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>

    </div>
  );
}

function AcademicBox({ label, value }) {
  return (
    <div className="academic-box">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}