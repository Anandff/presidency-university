import React from "react";
import { useEffect, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  Plus,
  RefreshCw,
  Send,
  Ticket,
  X
} from "lucide-react";

import { supabase } from "../lib/supabase";

export default function Helpdesk({ user }) {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    category: "Technical Support",
    subject: "",
    description: "",
    priority: "Medium"
  });

  const studentName = user?.name || "Anand Kumar";
  const studentEmail =
    user?.email || "student@presidency.edu.in";

  useEffect(() => {
    fetchTickets();
  }, []);

  async function fetchTickets() {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("helpdesk_tickets")
      .select("*")
      .eq("student_email", studentEmail)
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      setError("Unable to load your support tickets.");
    } else {
      setTickets(data || []);
    }

    setLoading(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setSubmitting(true);
    setError("");
    setSuccess("");

    const ticketNumber = `PU-${Date.now()
      .toString()
      .slice(-6)}`;

    const { data, error } = await supabase
      .from("helpdesk_tickets")
      .insert([
        {
          ticket_number: ticketNumber,
          student_name: studentName,
          student_email: studentEmail,
          category: form.category,
          subject: form.subject,
          description: form.description,
          priority: form.priority,
          status: "Open"
        }
      ])
      .select()
      .single();

    if (error) {
      console.error(error);
      setError(
        "Unable to create the ticket. Please try again."
      );
      setSubmitting(false);
      return;
    }

    setTickets((previous) => [data, ...previous]);

    setForm({
      category: "Technical Support",
      subject: "",
      description: "",
      priority: "Medium"
    });

    setShowForm(false);
    setSuccess(
      `Ticket ${ticketNumber} created successfully.`
    );

    setSubmitting(false);

    setTimeout(() => {
      setSuccess("");
    }, 5000);
  }

  function formatDate(date) {
    return new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  function getStatusIcon(status) {
    if (status === "Resolved") {
      return <CheckCircle2 size={14} />;
    }

    if (status === "In Progress") {
      return <Clock3 size={14} />;
    }

    return <AlertCircle size={14} />;
  }

  return (
    <div className="page-content helpdesk-page">

      <div className="page-heading">
        <div>
          <span className="panel-kicker">
            STUDENT SERVICES
          </span>

          <h1>Helpdesk</h1>

          <p>
            Create and track support requests with the
            university.
          </p>
        </div>

        <button
          className="helpdesk-create-button"
          onClick={() => {
            setShowForm(true);
            setError("");
            setSuccess("");
          }}
        >
          <Plus size={14} />
          New ticket
        </button>
      </div>

      {success && (
        <div className="helpdesk-alert success">
          <CheckCircle2 size={15} />
          <span>{success}</span>
        </div>
      )}

      {error && (
        <div className="helpdesk-alert error">
          <AlertCircle size={15} />
          <span>{error}</span>
        </div>
      )}

      <div className="helpdesk-stats">

        <div className="helpdesk-stat">
          <div className="helpdesk-stat-icon purple">
            <Ticket size={16} />
          </div>

          <div>
            <span>TOTAL TICKETS</span>
            <strong>{tickets.length}</strong>
          </div>
        </div>

        <div className="helpdesk-stat">
          <div className="helpdesk-stat-icon orange">
            <Clock3 size={16} />
          </div>

          <div>
            <span>ACTIVE</span>
            <strong>
              {
                tickets.filter(
                  (ticket) =>
                    ticket.status !== "Resolved"
                ).length
              }
            </strong>
          </div>
        </div>

        <div className="helpdesk-stat">
          <div className="helpdesk-stat-icon green">
            <CheckCircle2 size={16} />
          </div>

          <div>
            <span>RESOLVED</span>
            <strong>
              {
                tickets.filter(
                  (ticket) =>
                    ticket.status === "Resolved"
                ).length
              }
            </strong>
          </div>
        </div>

      </div>

      <section className="panel helpdesk-panel">

        <div className="panel-head">

          <div>
            <span className="panel-kicker">
              SUPPORT REQUESTS
            </span>

            <h2>My tickets</h2>
          </div>

          <button
            className="helpdesk-refresh"
            onClick={fetchTickets}
            title="Refresh tickets"
          >
            <RefreshCw size={14} />
          </button>

        </div>

        {loading ? (
          <div className="helpdesk-empty">
            <RefreshCw size={20} className="helpdesk-spin" />
            <p>Loading your tickets...</p>
          </div>
        ) : tickets.length === 0 ? (
          <div className="helpdesk-empty">
            <div className="helpdesk-empty-icon">
              <Ticket size={22} />
            </div>

            <h3>No support tickets yet</h3>

            <p>
              If you have a problem, create a support
              ticket and the university team can review it.
            </p>

            <button
              className="helpdesk-empty-button"
              onClick={() => setShowForm(true)}
            >
              <Plus size={13} />
              Create your first ticket
            </button>
          </div>
        ) : (
          <div className="ticket-list">

            {tickets.map((ticket) => (
              <div
                className="ticket-item"
                key={ticket.id}
              >

                <div className="ticket-main">

                  <div className="ticket-icon">
                    <Ticket size={15} />
                  </div>

                  <div className="ticket-content">

                    <div className="ticket-title-row">

                      <h3>{ticket.subject}</h3>

                      <span
                        className={`ticket-status ${ticket.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {getStatusIcon(ticket.status)}
                        {ticket.status}
                      </span>

                    </div>

                    <p>
                      {ticket.description}
                    </p>

                    <div className="ticket-meta">
                      <span>
                        #{ticket.ticket_number}
                      </span>

                      <span>
                        {ticket.category}
                      </span>

                      <span>
                        {ticket.priority} priority
                      </span>

                      <span>
                        {formatDate(ticket.created_at)}
                      </span>
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </section>

      {showForm && (
        <div
          className="helpdesk-modal-overlay"
          onClick={() => {
            if (!submitting) {
              setShowForm(false);
            }
          }}
        >
          <div
            className="helpdesk-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="helpdesk-modal-header">

              <div>
                <span className="panel-kicker">
                  NEW REQUEST
                </span>

                <h2>Create support ticket</h2>
              </div>

              <button
                className="helpdesk-close"
                onClick={() => setShowForm(false)}
                disabled={submitting}
              >
                <X size={16} />
              </button>

            </div>

            <form onSubmit={handleSubmit}>

              <label>Category</label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
              >
                <option>
                  Technical Support
                </option>

                <option>
                  Academic
                </option>

                <option>
                  Fees & Finance
                </option>

                <option>
                  Hostel
                </option>

                <option>
                  Library
                </option>

                <option>
                  Transport
                </option>

                <option>
                  Other
                </option>
              </select>

              <label>Subject</label>

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Briefly describe your issue"
                required
                maxLength={120}
              />

              <label>Priority</label>

              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>

              <label>Description</label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Explain your problem in detail..."
                rows="5"
                required
                maxLength={1000}
              />

              <button
                className="helpdesk-submit"
                type="submit"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <RefreshCw
                      size={14}
                      className="helpdesk-spin"
                    />
                    Creating...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Create ticket
                  </>
                )}
              </button>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}