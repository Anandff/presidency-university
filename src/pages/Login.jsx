import React, { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles
} from "lucide-react";

const DEMO_USERS = {
  "anand@test.com": { password: "anand123", role: "Student" },
  "faculty@test.com": { password: "password123", role: "Faculty" },
  "badal@test.com": { password: "password123", role: "Admin" },
  "tarun@test.com": { password: "password123", role: "Admin" }
};

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const user = DEMO_USERS[email.toLowerCase().trim()];

    if (!user || user.password !== password) {
      setError("Invalid email or password.");
      return;
    }

    onLogin({
      email: email.toLowerCase().trim(),
      role: user.role
    });
  }

  return (
    <div className="login-page">
      <div className="login-decoration decoration-one" />
      <div className="login-decoration decoration-two" />

      <div className="login-shell">
        <div className="login-brand">
          <div className="login-logo"><img
  src="https://e7.pngegg.com/pngimages/286/102/png-clipart-presidency-college-bangalore-presidency-university-bangalore-bangalore-university-p-e-s-institute-of-technology-bangalore-south-campus-school-text-logo.png" height="40" width="40"
  alt="Presidency OS"
  className="login-logo-image"
/></div>
          <div>
            <strong>Presidency</strong>
            <span>OS</span>
          </div>
        </div>

        <div className="login-content">
          <div className="login-intro">
            <div className="login-badge">
              <Sparkles size={14} />
              DIGITAL CAMPUS
            </div>

            <h1>
              Your university,
              <br />
              <span>in your hand.</span>
            </h1>

            <p>
              Access academics, campus services, schedules and everything
              you need for your Presidency journey.
            </p>

            <div className="login-feature">
              <div><ShieldCheck size={18} /></div>
              <span>Secure university workspace</span>
            </div>
          </div>

          <div className="login-card">
            <div className="login-card-head">
              <div>
                <h2>Welcome back</h2>
                <p>Sign in to your student workspace.</p>
              </div>
              <div className="login-lock">
                <LockKeyhole size={18} />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <label>University email</label>
              <div className="login-input">
                <Mail size={17} />
                <input
                  type="email"
                  placeholder="you@presidencyuniversity.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <label>Password</label>
              <div className="login-input">
                <LockKeyhole size={17} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>

              {error && <div className="login-error">{error}</div>}

              <div className="login-options">
                <label className="remember">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <button type="button">Forgot password?</button>
              </div>

              <button className="login-submit" type="submit">
                Sign in
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="demo-hint">
              <strong>Development login</strong>
              <span>student@anand.com / anand123</span>
            </div>
          </div>
        </div>

        <div className="login-footer">
          <span>Presidency OS</span>
          <span>Secure digital campus</span>
        </div>
      </div>
    </div>
  );
}