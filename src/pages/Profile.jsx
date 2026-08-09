import React from "react";
import {
  Camera,
  Check,
  ChevronRight,
  Edit3,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound
} from "lucide-react";

export default function Profile() {
  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <span className="panel-kicker">ACCOUNT</span>
          <h1>My Profile</h1>
          <p>
            Manage your student information and account preferences.
          </p>
        </div>

        <button className="profile-save-button">
          <Check size={14} />
          Save changes
        </button>
      </div>

      <div className="profile-layout">
        <aside className="profile-sidebar">
          <div className="profile-avatar-large">
            AK
            <button>
              <Camera size={12} />
            </button>
          </div>

          <h2>Anand Kumar</h2>
          <span className="profile-role">Student</span>

          <div className="profile-id">
            <span>STUDENT ID</span>
            <strong>20261BCA0157</strong>
          </div>

          <div className="profile-sidebar-line" />

          <div className="profile-status">
            <span className="status-dot" />
            Active student
          </div>
        </aside>

        <main className="profile-main">
          <section className="profile-section">
            <div className="section-title">
              <div>
                <span className="panel-kicker">PERSONAL INFORMATION</span>
                <h2>Basic details</h2>
              </div>

              <button className="profile-edit">
                <Edit3 size={13} />
                Edit
              </button>
            </div>

            <div className="profile-fields">
              <ProfileField
                icon={<UserRound />}
                label="Full name"
                value="Anand Kumar"
              />

              <ProfileField
                icon={<Mail />}
                label="University email"
                value="anand.20261BCA0157@presidencyuniversity.in"
              />

              <ProfileField
                icon={<Phone />}
                label="Phone number"
                value="+91 7542942011"
              />

              <ProfileField
                icon={<MapPin />}
                label="Location"
                value="Bengaluru, Karnataka"
              />
            </div>
          </section>

          <section className="profile-section">
            <div className="section-title">
              <div>
                <span className="panel-kicker">ACADEMIC DETAILS</span>
                <h2>Programme information</h2>
              </div>
            </div>

            <div className="profile-fields">
              <ProfileField
                icon={<GraduationCap />}
                label="Programme"
                value="B.Tech — BCA in Cyber Security"
              />

              <ProfileField
                icon={<GraduationCap />}
                label="Academic year"
                value="1st Year"
              />

              <ProfileField
                icon={<GraduationCap />}
                label="Current semester"
                value="Semester 1"
              />

              <ProfileField
                icon={<GraduationCap />}
                label="Batch"
                value="2026 — 2029"
              />
            </div>
          </section>

          <section className="profile-section security-section">
            <div className="section-title">
              <div>
                <span className="panel-kicker">SECURITY</span>
                <h2>Account security</h2>
              </div>
            </div>

            <div className="security-row">
              <div className="security-icon">
                <ShieldCheck size={17} />
              </div>

              <div>
                <strong>Password</strong>
                <p>Last changed recently</p>
              </div>

              <button>
                Change password
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="security-row">
              <div className="security-icon">
                <ShieldCheck size={17} />
              </div>

              <div>
                <strong>Two-factor authentication</strong>
                <p>Additional protection for your account</p>
              </div>

              <span className="security-enabled">
                Enabled
              </span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function ProfileField({ icon, label, value }) {
  return (
    <div className="profile-field">
      <div className="profile-field-icon">
        {icon}
      </div>

      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}