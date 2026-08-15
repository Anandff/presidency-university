import React, { useState } from "react";
import { ArrowLeft, UserPlus, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function AddStudent({ onBack }) {
  const [form, setForm] = useState({
    name: "",
    student_id: "",
    email: "",
    password: "",
    phone: "",
    department: "SOIS",
    program: "BCA in Cyber Security",
    year: 1,
    semester: 1,
    section: "A"
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "year" || name === "semester"
          ? Number(value)
          : value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const { data, error } = await supabase.functions.invoke(
        "create-student",
        {
          body: form
        }
      );

      if (error) {
        throw new Error(error.message);
      }

      if (!data?.success) {
        throw new Error(
          data?.error || "Unable to create student."
        );
      }

      setMessage(
        `Student ${data.student.name} created successfully.`
      );

      setForm({
        name: "",
        student_id: "",
        email: "",
        password: "",
        phone: "",
        department: "SOIS",
        program: "BCA in Cyber Security",
        year: 1,
        semester: 1,
        section: "A"
      });

    } catch (err) {
      console.error("Create student error:", err);
      setError(
        err.message || "Unable to create student."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page-content">

      <div className="page-heading">

        <div>
          <span className="panel-kicker">
            ADMINISTRATION
          </span>

          <h1>Add Student</h1>

          <p>
            Create a new university student account.
          </p>
        </div>

        <button
          className="profile-back-button"
          onClick={onBack}
        >
          <ArrowLeft size={14} />
          Back
        </button>

      </div>

      <section className="panel" style={{ padding: "24px" }}>

        <div className="panel-head">

          <div>
            <span className="panel-kicker">
              STUDENT REGISTRATION
            </span>

            <h2>
              New student
            </h2>
          </div>

          <UserPlus size={18} />

        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            gap: "16px",
            marginTop: "20px"
          }}
        >

          <div className="profile-grid">

            <div>
              <label>Full name</label>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Student name"
                required
              />
            </div>

            <div>
              <label>Student ID</label>

              <input
                name="student_id"
                value={form.student_id}
                onChange={handleChange}
                placeholder="20261BCA0158"
                required
              />
            </div>

            <div>
              <label>University email</label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="student@test.com"
                required
              />
            </div>

            <div>
              <label>Temporary password</label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Temporary password"
                required
                minLength={6}
              />
            </div>

            <div>
              <label>Phone</label>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91..."
              />
            </div>

            <div>
              <label>Department</label>

              <input
                name="department"
                value={form.department}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Program</label>

              <input
                name="program"
                value={form.program}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Section</label>

              <input
                name="section"
                value={form.section}
                onChange={handleChange}
              />
            </div>

          </div>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          {message && (
            <div>
              {message}
            </div>
          )}

          <button
            type="submit"
            className="login-submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2
                  size={17}
                  className="spin"
                />
                Creating student...
              </>
            ) : (
              <>
                <UserPlus size={17} />
                Create student
              </>
            )}
          </button>

        </form>

      </section>

    </div>
  );
}