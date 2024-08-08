export default function Intro() {
  const shortBio = (
    <div>
      <p className="text-mono-small">
        I’m a <span className="text-yellow">design-centered</span>
        <span className="text-pink"> software engineer </span>
        with a background in
        <span className="text-light-blue"> design, research, and consulting </span>
        and I build systemic solutions for people.
      </p>
    </div>
  );

  return (
    <div className="section intro flex scroll-anchor" id="intro">
      <div className="hello-container">
        <div className="hello text-mono-small">{`Hi, my name is`}</div>
        <div className="hojoon">{`Hojoon Kim`}</div>
        <div className="intro text-mono-small">{`I design and build apps and stuff`}</div>
        <div className="short-bio text-mono-small">{shortBio}</div>
      </div>
    </div>
  );
}
