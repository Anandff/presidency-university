import React from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Users
} from "lucide-react";

const events = [
  {
    title: "TechNova 2026",
    category: "TECHNOLOGY",
    date: "18 AUG",
    day: "Tuesday",
    time: "10:00 AM – 5:00 PM",
    location: "Main Auditorium",
    attendees: "850+",
    color: "purple"
  },
  {
    title: "Innovation & Entrepreneurship Summit",
    category: "INNOVATION",
    date: "22 AUG",
    day: "Saturday",
    time: "9:30 AM – 3:30 PM",
    location: "Convention Centre",
    attendees: "420+",
    color: "blue"
  },
  {
    title: "Inter-Department Sports Meet",
    category: "SPORTS",
    date: "29 AUG",
    day: "Saturday",
    time: "8:00 AM – 6:00 PM",
    location: "University Sports Complex",
    attendees: "600+",
    color: "green"
  },
  {
    title: "Student Developer Meetup",
    category: "COMMUNITY",
    date: "04 SEP",
    day: "Friday",
    time: "2:00 PM – 6:00 PM",
    location: "Innovation Lab",
    attendees: "180+",
    color: "orange"
  }
];

export default function Events() {
  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <span className="panel-kicker">CAMPUS LIFE</span>
          <h1>Events</h1>
          <p>
            Discover what's happening across the university campus.
          </p>
        </div>

        <button className="semester-selector">
          <CalendarDays size={15} />
          August 2026
        </button>
      </div>

      <div className="event-overview">
        <div>
          <span>UPCOMING EVENTS</span>
          <strong>24</strong>
        </div>

        <div>
          <span>THIS WEEK</span>
          <strong>06</strong>
        </div>

        <div>
          <span>REGISTERED</span>
          <strong>1,284</strong>
        </div>

        <div>
          <span>CLUB EVENTS</span>
          <strong>11</strong>
        </div>
      </div>

      <section className="events-card">
        <div className="section-title">
          <div>
            <span className="panel-kicker">DISCOVER</span>
            <h2>Upcoming events</h2>
          </div>

          <button className="text-button">
            View calendar
            <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <EventCard
              key={event.title}
              event={event}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function EventCard({ event }) {
  return (
    <article className="event-card">
      <div className={`event-banner ${event.color}`}>
        <span>{event.category}</span>

        <div className="event-date">
          <strong>{event.date.split(" ")[0]}</strong>
          <small>{event.date.split(" ")[1]}</small>
        </div>
      </div>

      <div className="event-card-body">
        <h3>{event.title}</h3>

        <div className="event-detail">
          <Clock3 size={13} />
          <span>{event.day} • {event.time}</span>
        </div>

        <div className="event-detail">
          <MapPin size={13} />
          <span>{event.location}</span>
        </div>

        <div className="event-card-footer">
          <div className="event-attendees">
            <Users size={13} />
            <span>{event.attendees} registered</span>
          </div>

          <button>
            View
            <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </article>
  );
}