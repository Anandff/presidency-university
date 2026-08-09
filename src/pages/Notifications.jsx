import React from "react";
import {
  Bell,
  Check,
  CheckCheck,
  FileText,
  Megaphone,
  MoreHorizontal,
  ShieldAlert,
  UserRound
} from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "announcement",
    title: "University announces revised academic schedule",
    message:
      "The academic calendar has been updated. Please check the revised schedule for upcoming activities.",
    time: "12 min ago",
    unread: true
  },
  {
    id: 2,
    type: "assignment",
    title: "Assignment deadline approaching",
    message:
      "Web Development Assignment 03 is due tomorrow at 11:59 PM.",
    time: "1 hour ago",
    unread: true
  },
  {
    id: 3,
    type: "exam",
    title: "Examination schedule published",
    message:
      "Your upcoming internal assessment schedule is now available in the Examinations section.",
    time: "3 hours ago",
    unread: true
  },
  {
    id: 4,
    type: "finance",
    title: "Fee payment received",
    message:
      "Your semester tuition fee payment has been successfully recorded.",
    time: "Yesterday",
    unread: false
  },
  {
    id: 5,
    type: "faculty",
    title: "Faculty message received",
    message:
      "Dr. Arjun Rao has shared an update regarding the upcoming C programming lab.",
    time: "Yesterday",
    unread: false
  },
  {
    id: 6,
    type: "security",
    title: "New login detected",
    message:
      "Your student account was accessed from a new device.",
    time: "2 days ago",
    unread: false
  }
];

export default function Notifications() {
  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <span className="panel-kicker">COMMUNICATION</span>
          <h1>Notifications</h1>
          <p>
            Stay updated with university announcements, academics and account activity.
          </p>
        </div>

        <button className="notification-mark-all">
          <CheckCheck size={15} />
          Mark all as read
        </button>
      </div>

      <div className="notification-summary">
        <div className="notification-summary-main">
          <div className="notification-big-icon">
            <Bell size={20} />
          </div>

          <div>
            <span className="panel-kicker">INBOX</span>
            <h2>3 unread notifications</h2>
            <p>
              You have important updates waiting for your attention.
            </p>
          </div>
        </div>

        <div className="notification-mini-stat">
          <span>Total</span>
          <strong>{notifications.length}</strong>
        </div>

        <div className="notification-mini-stat">
          <span>Unread</span>
          <strong className="purple">3</strong>
        </div>
      </div>

      <section className="notifications-card">
        <div className="section-title">
          <div>
            <span className="panel-kicker">RECENT ACTIVITY</span>
            <h2>All notifications</h2>
          </div>

          <button className="notification-filter">
            All notifications
          </button>
        </div>

        <div className="notification-list">
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </div>
      </section>

      <section className="notification-preferences">
        <div className="notification-preferences-icon">
          <Bell size={18} />
        </div>

        <div>
          <strong>Notification preferences</strong>
          <p>
            Control which university updates you receive in the portal.
          </p>
        </div>

        <button>
          Manage preferences
        </button>
      </section>
    </div>
  );
}

function NotificationItem({ notification }) {
  const iconMap = {
    announcement: <Megaphone size={16} />,
    assignment: <FileText size={16} />,
    exam: <FileText size={16} />,
    finance: <Check size={16} />,
    faculty: <UserRound size={16} />,
    security: <ShieldAlert size={16} />
  };

  return (
    <div
      className={`notification-item ${
        notification.unread ? "unread" : ""
      }`}
    >
      <div className={`notification-icon ${notification.type}`}>
        {iconMap[notification.type]}
      </div>

      <div className="notification-content">
        <div className="notification-title-row">
          <strong>{notification.title}</strong>

          {notification.unread && (
            <span className="notification-new">NEW</span>
          )}
        </div>

        <p>{notification.message}</p>

        <span className="notification-time">
          {notification.time}
        </span>
      </div>

      <button className="notification-more">
        <MoreHorizontal size={16} />
      </button>
    </div>
  );
}