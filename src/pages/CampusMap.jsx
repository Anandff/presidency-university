import { Maximize2, Map, Navigation, VolumeX } from "lucide-react";

export default function CampusMap() {
  return (
    <div className="page-content campus-tour-page">
      <div className="page-heading">
        <div>
          <span className="panel-kicker">CAMPUS NAVIGATION</span>
          <h1>Campus Map</h1>
          <p>
            Explore Presidency University through the virtual campus tour.
          </p>
        </div>

        <div className="campus-tour-controls">
          <span>
            <VolumeX size={13} />
            Sound off
          </span>

          <button
            onClick={() => {
              document
                .querySelector(".campus-tour-frame")
                ?.requestFullscreen?.();
            }}
          >
            <Maximize2 size={13} />
            Fullscreen
          </button>
        </div>
      </div>

      <div className="campus-tour-stats">
        <div className="campus-tour-stat">
          <div className="campus-tour-stat-icon purple">
            <Map size={16} />
          </div>

          <div>
            <span>TOUR TYPE</span>
            <strong>Virtual Campus</strong>
          </div>
        </div>

        <div className="campus-tour-stat">
          <div className="campus-tour-stat-icon blue">
            <Navigation size={16} />
          </div>

          <div>
            <span>EXPERIENCE</span>
            <strong>Interactive View</strong>
          </div>
        </div>

        <div className="campus-tour-stat">
          <div className="campus-tour-stat-icon green">
            <VolumeX size={16} />
          </div>

          <div>
            <span>AUDIO</span>
            <strong>Disabled</strong>
          </div>
        </div>
      </div>

      <section className="campus-tour-card">
        <div className="campus-tour-header">
          <div>
            <span className="panel-kicker">VIRTUAL TOUR</span>
            <h2>Presidency University</h2>
          </div>

          <span className="campus-tour-badge">
            VIEW ONLY
          </span>
        </div>

        <div className="campus-tour-frame">
          <iframe
            src="https://www.easytourz.com/BT-EmabedTour/all/3f80bfb1b86d522c"
            title="Presidency University Virtual Campus Tour"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}