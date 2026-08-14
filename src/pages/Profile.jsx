import { useEffect, useState } from "react";

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

import { supabase } from "../lib/supabase";

export default function Profile({ user, onBack }) {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadStudentProfile();
  }, []);

  async function loadStudentProfile() {
  setLoading(true);
  setError("");

  try {
    const {
      data: { user: authUser },
      error: authError
    } = await supabase.auth.getUser();

    if (authError || !authUser) {
      console.error("Auth user error:", authError);
      setError("Unable to identify your account.");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("students")
      .select("*")
      .eq("auth_user_id", authUser.id)
      .maybeSingle();

    console.log("LOGGED IN AUTH USER:", authUser);
    console.log("STUDENT PROFILE:", data);
    console.log("PROFILE ERROR:", error);

    if (error) {
      console.error("Profile error:", error);
      setError("Unable to load profile from database.");
      setLoading(false);
      return;
    }

    if (!data) {
      setError("Student profile not found.");
      setLoading(false);
      return;
    }

    setStudent(data);
    setLoading(false);

  } catch (err) {
    console.error("Unexpected profile error:", err);
    setError("Something went wrong while loading your profile.");
    setLoading(false);
  }
}

  const profile = {
  name:
    student?.name ||
    user?.name ||
    "Student",

  studentId:
    student?.student_id ||
    user?.studentId ||
    "Not available",

  email:
    student?.email ||
    user?.universityEmail ||
    "Not available",

  phone:
    student?.phone ||
    "Not available",

  department:
    student?.department ||
    "Not available",

  program:
    student?.program ||
    "Not available",

  year:
    student?.year ||
    1,

  semester:
    student?.semester ||
    1,

  section:
    student?.section ||
    "Not available",

  campus:
    "Presidency University"
};

  const yearText =
    profile.year === 1
      ? "1st Year"
      : profile.year === 2
      ? "2nd Year"
      : profile.year === 3
      ? "3rd Year"
      : `${profile.year}th Year`;

  const semesterText = String(profile.semester).padStart(2, "0");

  return (
    <div className="page-content profile-page">

      <div className="page-heading">
        <div>
          <span className="panel-kicker">
            STUDENT ACCOUNT
          </span>

          <h1>My Profile</h1>

          <p>
            Manage your personal information and university profile.
          </p>
        </div>

        <button
          className="profile-back-button"
          onClick={onBack}
        >
          <ArrowLeft size={14} />
          Back to dashboard
        </button>
      </div>

      {loading && (
        <div className="panel" style={{ padding: "15px" }}>
          Loading profile...
        </div>
      )}

      {error && (
        <div
          className="panel"
          style={{
            padding: "15px",
            marginBottom: "15px"
          }}
        >
          {error}
        </div>
      )}

      <section className="profile-hero">

        <div className="profile-avatar-large">
  {(student?.name || user?.name || "Student")
    .split(" ")
    .map(word => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()}
</div>

        <div className="profile-identity">

          <div className="profile-name-row">

            <h2>
              {profile.name}
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
  {profile.program}
</span>

            <span>
              <BookOpen size={13} />
              {profile.program}
            </span>

            <span>
              <CalendarDays size={13} />
              {yearText}
            </span>

          </div>

        </div>

        <button
          className="profile-edit-button"
          onClick={() =>
            alert(
              "Profile editing will be enabled in the next backend update."
            )
          }
        >
          <Edit3 size={13} />
          Edit profile
        </button>

      </section>

      <div className="profile-grid">

        <section className="panel profile-panel">

          <div className="panel-head">

            <div>
              <span className="panel-kicker">
                PERSONAL INFORMATION
              </span>

              <h2>Basic details</h2>
            </div>

            <UserRound size={17} />

          </div>

          <div className="profile-details">

            <ProfileDetail
              icon={<UserRound size={14} />}
              label="Full name"
              value={profile.name}
            />

            <ProfileDetail
              icon={<BadgeCheck size={14} />}
              label="University ID"
              value={profile.studentId}
            />

            <ProfileDetail
              icon={<Mail size={14} />}
              label="University email"
              value={profile.email}
            />

            <ProfileDetail
              icon={<Phone size={14} />}
              label="Phone number"
              value={profile.phone}
            />

            <ProfileDetail
              icon={<MapPin size={14} />}
              label="Campus"
              value={profile.campus}
            />

            <ProfileDetail
              icon={<GraduationCap size={14} />}
              label="Program"
              value={profile.program}
            />

          </div>

        </section>

        <section className="panel profile-panel">

          <div className="panel-head">

            <div>
              <span className="panel-kicker">
                ACADEMIC INFORMATION
              </span>

              <h2>Academic overview</h2>
            </div>

            <GraduationCap size={17} />

          </div>

          <div className="academic-profile-grid">

            <AcademicBox
              label="YEAR"
              value={profile.year}
            />

            <AcademicBox
              label="SEMESTER"
              value={semesterText}
            />

            <AcademicBox
  label="PROGRAM"
  value={profile.program}
/>

            <AcademicBox
              label="DEPARTMENT"
              value={profile.department}
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
  You're currently in {yearText.toLowerCase()} of your
  undergraduate program.
</p>

          </div>

        </section>

      </div>

      <section className="panel profile-security">

        <div className="panel-head">

          <div>
            <span className="panel-kicker">
              ACCOUNT SECURITY
            </span>

            <h2>Security & access</h2>
          </div>

          <ShieldCheck size={17} />

        </div>

        <div className="security-row">

          <div className="security-icon">
            <ShieldCheck size={15} />
          </div>

          <div>
            <strong>
              University account
            </strong>

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
            <strong>
              Email verification
            </strong>

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

function ProfileDetail({
  icon,
  label,
  value
}) {
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

function AcademicBox({
  label,
  value
}) {
  return (
    <div className="academic-box">

      <span>{label}</span>

      <strong>{value}</strong>

    </div>
  );
}