import React from "react";
import {
  Bell,
  ChevronRight,
  Globe,
  Lock,
  Moon,
  Palette,
  ShieldCheck,
  Smartphone,
  Sun
} from "lucide-react";

export default function SettingsPage({ dark, setDark }) {
  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <span className="panel-kicker">PREFERENCES</span>
          <h1>Settings</h1>
          <p>
            Customize your Presidency Operating System experience and account preferences.
          </p>
        </div>
      </div>

      <div className="settings-layout">
        <section className="settings-card">
          <div className="section-title">
            <div>
              <span className="panel-kicker">APPEARANCE</span>
              <h2>Interface preferences</h2>
            </div>
          </div>

          <div className="settings-row">
            <div className="settings-icon purple">
              {dark ? <Moon size={17} /> : <Sun size={17} />}
            </div>

            <div className="settings-row-content">
              <strong>Dark mode</strong>
              <span>
                Use a darker interface that's easier on the eyes.
              </span>
            </div>

            <button
              className={`settings-toggle ${dark ? "active" : ""}`}
              onClick={() => setDark(!dark)}
            >
              <span />
            </button>
          </div>

          <div className="settings-row">
            <div className="settings-icon blue">
              <Palette size={17} />
            </div>

            <div className="settings-row-content">
              <strong>Accent colour</strong>
              <span>Presidency purple</span>
            </div>

            <div className="accent-preview" />
          </div>

          <div className="settings-row">
            <div className="settings-icon green">
              <Globe size={17} />
            </div>

            <div className="settings-row-content">
              <strong>Language</strong>
              <span>Choose the language used throughout the portal.</span>
            </div>

            <button className="settings-value">
              English
              <ChevronRight size={14} />
            </button>
          </div>
        </section>

        <section className="settings-card">
          <div className="section-title">
            <div>
              <span className="panel-kicker">NOTIFICATIONS</span>
              <h2>Notification preferences</h2>
            </div>
          </div>

          <SettingSwitch
            icon={<Bell size={17} />}
            title="University announcements"
            description="Receive important university updates."
            enabled
          />

          <SettingSwitch
            icon={<Smartphone size={17} />}
            title="Academic reminders"
            description="Assignments, examinations and timetable reminders."
            enabled
          />

          <SettingSwitch
            icon={<Bell size={17} />}
            title="Event notifications"
            description="Get updates about campus events and activities."
            enabled={false}
          />
        </section>

        <section className="settings-card">
          <div className="section-title">
            <div>
              <span className="panel-kicker">SECURITY & PRIVACY</span>
              <h2>Account protection</h2>
            </div>
          </div>

          <div className="settings-action">
            <div className="settings-icon green">
              <ShieldCheck size={17} />
            </div>

            <div className="settings-row-content">
              <strong>Two-factor authentication</strong>
              <span>Your account has an additional layer of protection.</span>
            </div>

            <span className="security-enabled">
              Enabled
            </span>
          </div>

          <div className="settings-action">
            <div className="settings-icon orange">
              <Lock size={17} />
            </div>

            <div className="settings-row-content">
              <strong>Password & login</strong>
              <span>Manage your account password and login sessions.</span>
            </div>

            <button className="settings-value">
              Manage
              <ChevronRight size={14} />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

function SettingSwitch({
  icon,
  title,
  description,
  enabled
}) {
  return (
    <div className="settings-row">
      <div className="settings-icon blue">
        {icon}
      </div>

      <div className="settings-row-content">
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

      <div className={`settings-toggle ${enabled ? "active" : ""}`}>
        <span />
      </div>
    </div>
  );
}