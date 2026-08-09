import React from "react";
import {
  ArrowUpRight,
  BookOpen,
  BookMarked,
  Download,
  FileText,
  FolderOpen,
  Search,
  Video
} from "lucide-react";

const resources = [
  {
    title: "Data Structures & Algorithms",
    type: "COURSE MATERIAL",
    description: "Lecture notes, references and practice material.",
    files: "18 files",
    icon: <BookOpen size={17} />,
    color: "purple"
  },
  {
    title: "Web Development",
    type: "COURSE MATERIAL",
    description: "HTML, CSS, JavaScript and React learning resources.",
    files: "24 files",
    icon: <BookMarked size={17} />,
    color: "blue"
  },
  {
    title: "Programming in C",
    type: "LAB RESOURCES",
    description: "Programs, lab manuals and practical references.",
    files: "16 files",
    icon: <FileText size={17} />,
    color: "green"
  },
  {
    title: "Computer Networks",
    type: "REFERENCE",
    description: "Lecture presentations and additional references.",
    files: "12 files",
    icon: <FolderOpen size={17} />,
    color: "orange"
  }
];

const recentFiles = [
  {
    name: "DSA Unit 3 Lecture Notes.pdf",
    subject: "Data Structures",
    size: "2.4 MB",
    date: "Today"
  },
  {
    name: "React Components Workshop.pdf",
    subject: "Web Development",
    size: "4.1 MB",
    date: "Yesterday"
  },
  {
    name: "C Programming Lab Manual.pdf",
    subject: "Programming in C",
    size: "1.8 MB",
    date: "06 Aug"
  },
  {
    name: "Computer Networks Unit 2.pdf",
    subject: "Computer Networks",
    size: "3.2 MB",
    date: "04 Aug"
  }
];

export default function Resources() {
  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <span className="panel-kicker">ACADEMIC RESOURCES</span>
          <h1>Resources</h1>
          <p>
            Access course material, documents and digital learning resources.
          </p>
        </div>

        <button className="semester-selector">
          <BookOpen size={15} />
          My Resources
        </button>
      </div>

      <div className="resource-search">
        <Search size={15} />
        <input
          type="text"
          placeholder="Search notes, subjects, documents..."
        />
      </div>

      <section className="resources-card">
        <div className="section-title">
          <div>
            <span className="panel-kicker">MY COURSES</span>
            <h2>Course resources</h2>
          </div>

          <button className="text-button">
            View all
            <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="resource-grid">
          {resources.map((resource) => (
            <div className="resource-course" key={resource.title}>
              <div className={`resource-icon ${resource.color}`}>
                {resource.icon}
              </div>

              <span className="resource-type">
                {resource.type}
              </span>

              <h3>{resource.title}</h3>

              <p>{resource.description}</p>

              <div className="resource-course-footer">
                <span>{resource.files}</span>

                <button>
                  Open
                  <ArrowUpRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="resources-card recent-resources">
        <div className="section-title">
          <div>
            <span className="panel-kicker">RECENTLY ADDED</span>
            <h2>Recent files</h2>
          </div>

          <button className="text-button">
            <Download size={13} />
            Downloads
          </button>
        </div>

        <div className="resource-file-list">
          {recentFiles.map((file) => (
            <div className="resource-file" key={file.name}>
              <div className="resource-file-icon">
                <FileText size={15} />
              </div>

              <div className="resource-file-info">
                <strong>{file.name}</strong>
                <span>
                  {file.subject} • {file.size}
                </span>
              </div>

              <span className="resource-file-date">
                {file.date}
              </span>

              <button className="resource-download">
                <Download size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="resource-help-banner">
        <div className="resource-help-icon">
          <Video size={18} />
        </div>

        <div>
          <strong>Looking for recorded lectures?</strong>
          <p>
            Access recorded classes and supplementary learning videos.
          </p>
        </div>

        <button>
          Open library
          <ArrowUpRight size={13} />
        </button>
      </section>
    </div>
  );
}