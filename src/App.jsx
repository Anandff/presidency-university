import React, { useState } from "react";
import Login from "./pages/Login";
import Academics from "./pages/Academics";
import Timetable from "./pages/Timetable";
import Attendance from "./pages/Attendance";
import Assignments from "./pages/Assignments";
import Examinations from "./pages/Examinations";
import Faculty from "./pages/Faculty";
import Fees from "./pages/Fees";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import SettingsPage from "./pages/SettingsPage";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import CampusMap from "./pages/CampusMap";
import Helpdesk from "./pages/Helpdesk";
import {
  Bell, CalendarDays, ChevronRight, Clock3, FileText, GraduationCap,
  Home, LayoutDashboard, MapPin, Menu, MessageSquare, Moon, Search,
  Settings, Sparkles, Sun, Ticket, TrendingUp, UserRound, X, BookOpen,
  CheckCircle2, AlertTriangle, ArrowUpRight
} from "lucide-react";

const navGroups = [
  {
    label: "Overview",
    items: [{ label: "Home", icon: LayoutDashboard }]
  },
  {
    label: "Academics",
    items: [
      { label: "My Academics", icon: BookOpen },
      { label: "Timetable", icon: CalendarDays },
      { label: "Attendance", icon: TrendingUp },
      { label: "Assignments", icon: FileText },
      { label: "Examinations", icon: GraduationCap },
      { label: "Faculty", icon: UserRound },
    ]
  },
  {
    label: "Campus",
    items: [
      { label: "Campus Map", icon: MapPin },
      { label: "Events", icon: CalendarDays },
      { label: "Resources", icon: FileText }
    ]
  },
  {
    label: "Services",
    items: [
      { label: "Helpdesk", icon: Ticket },
      { label: "Messages", icon: MessageSquare },
      { label: "Fees & Services", icon: FileText }
    ]
  },
  {
  label: "Account",
  items: [
    { label: "My Profile", icon: UserRound }
  ]
}
];

const schedule = [
  { time: "09:00", end: "09:50", title: "Problem Solving Using C", room: "AB-2 • 204", color: "blue" },
  { time: "11:00", end: "11:50", title: "Applied Mathematics", room: "AB-2 • 301", color: "violet" },
  { time: "14:00", end: "14:50", title: "Web Design & Development", room: "SJT • Lab 2", color: "green" }
];

const attendance = [
  { name: "Problem Solving Using C", value: 92 },
  { name: "Applied Mathematics", value: 76 },
  { name: "Web Design & Development", value: 88 },
  { name: "Digital Computer Fundamentals", value: 84 }
];

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("presidency_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [active, setActive] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [search, setSearch] = useState("");
    function handleLogin(userData) {
    localStorage.setItem("presidency_user", JSON.stringify(userData));
    setUser(userData);
  }

  function handleLogout() {
    localStorage.removeItem("presidency_user");
    setUser(null);
  }

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className={dark ? "app dark" : "app"}>
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="brand">
          <div className="brand-mark"><img
  src="https://e7.pngegg.com/pngimages/286/102/png-clipart-presidency-college-bangalore-presidency-university-bangalore-bangalore-university-p-e-s-institute-of-technology-bangalore-south-campus-school-text-logo.png" height="40" width="40"
  alt="PU"
  className="brand-logo-image"
/></div>
          <div>
            <strong>Presidency</strong>
            <span>OS</span>
          </div>
          <button className="mobile-close" onClick={() => setSidebarOpen(false)}><X size={20}/></button>
        </div>

        <div className="side-search">
          <Search size={17}/>
          <input placeholder="Search campus..." />
        </div>

        <nav>
          {navGroups.map(group => (
            <div className="nav-group" key={group.label}>
              <div className="nav-label">{group.label}</div>
              {group.items.map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className={`nav-item ${active === item.label ? "active" : ""}`}
                    onClick={() => { setActive(item.label); setSidebarOpen(false); }}
                  >
                    <Icon size={18}/>
                    <span>{item.label}</span>
                    {active === item.label && <ChevronRight size={15} className="nav-arrow"/>}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button
  className={`nav-item ${active === "Settings" ? "active" : ""}`}
  onClick={() => {
    setActive("Settings");
    setSidebarOpen(false);
  }}
>
  <Settings size={18}/>
  <span>Settings</span>
  {active === "Settings" && (
    <ChevronRight size={15} className="nav-arrow"/>
  )}
</button>
          <div
  className="profile-mini"
  onClick={() => {
  setActive("My Profile");
  setSidebarOpen(false);
}}
  role="button"
  tabIndex={0}
>
  <div className="avatar">AK</div>

  <div className="profile-info">
    <strong>{user?.name || "Anand Kumar Bhargav"}</strong>
    <span>{user?.role || "Student"}</span>
  </div>

  <button
    className="logout-button"
    onClick={(e) => {
      e.stopPropagation();
      handleLogout();
    }}
    title="Sign out"
  >
    <ArrowUpRight size={15} />
  </button>
</div>
        </div>
      </aside>

      {sidebarOpen && <div className="backdrop" onClick={() => setSidebarOpen(false)} />}

      <main className="main">
        <header className="topbar">
          <div className="top-left">
            <button className="icon-button menu-button" onClick={() => setSidebarOpen(true)}><Menu size={21}/></button>
            <div className="breadcrumb">
              <span>Presidency OS</span>
              <ChevronRight size={14}/>
              <strong>{active}</strong>
            </div>
          </div>

          <div className="top-actions">
            <div className="global-search">
              <Search size={17}/>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." />
              <kbd>⌘ K</kbd>
            </div>
            <button className="icon-button" onClick={() => setDark(!dark)} title="Toggle theme">
              {dark ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
            <button className="notification"onClick={() => setActive("Notifications")}
><Bell size={19}/><i /></button>
            <div className="top-avatar">AK</div>
          </div>
        </header>

        <section className="content">
  {active === "My Academics" ? (
  <Academics />
) : active === "Timetable" ? (
  <Timetable />
) : active === "Attendance" ? (
  <Attendance />
) : active === "Assignments" ? (
  <Assignments />
) : active === "Examinations" ? (
  <Examinations />
) : active === "Faculty" ? (
  <Faculty />
) : active === "Fees & Services" ? (
  <Fees />
) : active === "Notifications" ? (
  <Notifications />
) : active === "My Profile" ? (
  <Profile
    user={user}
    onBack={() => {
      setShowProfile(false);
      setActive("Home");
    }}
  />
) : active === "Settings" ? (
  <SettingsPage dark={dark} setDark={setDark} />
) : active === "Events" ? (
  <Events />
) : active === "Resources" ? (
  <Resources />
) : active === "Campus Map" ? (
  <CampusMap />
) : active === "Helpdesk" ? (
  <Helpdesk user={user} />
) : (
  <>
          <div className="hero">
            <div>
              <div className="eyebrow"><Sparkles size={14}/> STUDENT SPACE</div>
              <h1>Good morning, Anand <span>👋</span></h1>
              <p>BCA • Cyber Security <span className="dot">•</span> Semester 1</p>
            </div>
            <button className="ask-button"><Sparkles size={17}/> Ask Presidency</button>
          </div>

          <div className="stat-grid">
            <StatCard label="Attendance" value="86.7%" meta="↑ 2.4% this month" positive icon={<TrendingUp/>} />
            <StatCard label="Current CGPA" value="8.62" meta="Strong academic standing" icon={<GraduationCap/>} />
            <StatCard label="Credits" value="24 / 24" meta="Semester progress" icon={<CheckCircle2/>} />
            <StatCard label="Action items" value="03" meta="2 assignments • 1 notice" warning icon={<AlertTriangle/>} />
          </div>

          <div className="dashboard-grid">
            <section className="panel schedule-panel">
              <div className="panel-head">
                <div>
                  <span className="panel-kicker">TODAY</span>
                  <h2>Your schedule</h2>
                </div>
                <button className="text-button">Full timetable <ArrowUpRight size={15}/></button>
              </div>

              <div className="schedule-list">
                {schedule.map((item, i) => (
                  <div className={`schedule-row ${i === 0 ? "current" : ""}`} key={item.title}>
                    <div className="schedule-time">
                      <strong>{item.time}</strong>
                      <span>{item.end}</span>
                    </div>
                    <div className={`schedule-line ${item.color}`} />
                    <div className="schedule-info">
                      <strong>{item.title}</strong>
                      <span><MapPin size={14}/> {item.room}</span>
                    </div>
                    {i === 0 && <span className="live-pill">NEXT</span>}
                  </div>
                ))}
              </div>
            </section>

            <section className="panel">
              <div className="panel-head">
                <div>
                  <span className="panel-kicker">ATTENTION</span>
                  <h2>Stay on track</h2>
                </div>
              </div>
              <div className="attention-card">
                <div className="attention-icon"><AlertTriangle size={20}/></div>
                <div>
                  <strong>Mathematics needs attention</strong>
                  <p>Your current attendance is 76%. Keep an eye on your next few classes.</p>
                  <button className="text-button">View analysis <ArrowUpRight size={15}/></button>
                </div>
              </div>
              <div className="mini-progress">
                <div><span>Semester progress</span><strong>64%</strong></div>
                <div className="progress-track"><span style={{width:"64%"}} /></div>
              </div>
            </section>
          </div>

          <div className="dashboard-grid lower">
            <section className="panel">
              <div className="panel-head">
                <div>
                  <span className="panel-kicker">ACADEMICS</span>
                  <h2>Attendance overview</h2>
                </div>
                <button className="icon-button small"><ArrowUpRight size={16}/></button>
              </div>
              <div className="attendance-list">
                {attendance.map(subject => (
                  <div className="attendance-item" key={subject.name}>
                    <div className="attendance-top"><span>{subject.name}</span><strong>{subject.value}%</strong></div>
                    <div className="progress-track"><span className={subject.value < 80 ? "warning-bar" : ""} style={{width:`${subject.value}%`}} /></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="panel">
              <div className="panel-head">
                <div>
                  <span className="panel-kicker">UPCOMING</span>
                  <h2>What's next</h2>
                </div>
                <button className="text-button">View all <ArrowUpRight size={15}/></button>
              </div>
              <div className="upcoming-list">
                <Upcoming icon={<FileText/>} title="Web Development Assignment" meta="Due tomorrow • 11:59 PM" />
                <Upcoming icon={<GraduationCap/>} title="Internal Assessment" meta="Applied Mathematics • 4 days" />
                <Upcoming icon={<CalendarDays/>} title="Campus Innovation Meetup" meta="Friday • Innovation Hub" />
              </div>
            </section>
          </div>

          <section className="quick-grid">
            <QuickAction icon={<MapPin/>} title="Find a place" text="Navigate around campus" />
            <QuickAction icon={<MessageSquare/>} title="Need help?" text="Create a support ticket" />
            <QuickAction icon={<FileText/>} title="Resources" text="Find study material" />
            <QuickAction icon={<Clock3/>} title="My schedule" text="Check your full week" />
          </section>

          <footer>
            <span>Presidency OS</span>
            <span>Student digital campus • v0.1.0</span>
          </footer>
            </>
  )}
</section>
</main>
    </div>
  );
}

function StatCard({ label, value, meta, icon, positive, warning }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <span className="stat-label">{label}</span>
      <strong className="stat-value">{value}</strong>
      <span className={`stat-meta ${positive ? "positive" : warning ? "warning" : ""}`}>{meta}</span>
    </div>
  );
}

function Upcoming({ icon, title, meta }) {
  return (
    <div className="upcoming-item">
      <div className="upcoming-icon">{icon}</div>
      <div><strong>{title}</strong><span>{meta}</span></div>
      <ChevronRight size={17}/>
    </div>
  );
}

function QuickAction({ icon, title, text }) {
  return (
    <button className="quick-action">
      <div className="quick-icon">{icon}</div>
      <div><strong>{title}</strong><span>{text}</span></div>
      <ArrowUpRight size={16}/>
    </button>
  );
}

export default App;