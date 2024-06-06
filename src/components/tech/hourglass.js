export default function Hourglass() {
  return (
    <div className="project-container flex column">
      <div className="project-screenshot"></div>
      <div className="project-text-container">
        <div className="project-title">Hourglass</div>
        <div className="project-about">
          <p>
            A multiplatform time tracking app designed for professionals working on an hourly billing basis (such as
            consultants, lawyers, tutors, freelancers, and contractors) where users can allocate predetermined hours,
            deduct hours as the timer runs, and alerts users when client hours approaches the user's set threshold.
          </p>
          <p>Apparently "I couldn't find an app I liked so I built my own" is the most Hojoon sentence ever.</p>
          <p>App is available for iOS, iPadOS, macOS, and visionOS.</p>
        </div>
      </div>
      <div className="buttons-container">
        <button className="pri-accent-btn">Download on TestFlight</button>
        <button className="pri-accent-btn">GitHub</button>
      </div>
    </div>
  );
}
