export default function About() {
  const shortBio = (
    <>
      <p>
        I’m a <span className="text-yellow">design-centered</span>
        <span className="text-pink"> software engineer </span>
        with a background in
        <span className="text-light-blue"> design, research, and consulting </span>
        and I build systemic solutions for people.
      </p>
      <p>I also love dogs. They're the best.</p>
    </>
  );

  return (
    <div className="section about" id="about">
      <div className="hello-container">
        <div className="hello">{`Hi, my name is`}</div>
        <div className="hojoon">{`Hojoon Kim`}</div>
        <div className="intro">{`I design and build apps and stuff`}</div>
        <div className="short-bio">{shortBio}</div>
      </div>
    </div>
  );
}
