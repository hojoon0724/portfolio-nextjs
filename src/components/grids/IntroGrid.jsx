import style from './introGrid.module.css';

const shortBioText = (
  <div>
    <p className="text-mono-small">
      I’m a <span style={{ color: 'var(--yellow)' }}>design-centered</span>
      <span style={{ color: 'var(--pink)' }}> software engineer </span>
      with a background in
      <span style={{ color: 'var(--light-blue)' }}> design, research, and consulting </span>
      and I build systemic solutions for people.
    </p>
  </div>
);

export default function IntroGrid({}) {
  return (
    <section className="intro-grid">
      <div className={style.helloContainer}>
        <div className="text-mono-small">{`Hi, my name is`}</div>
        <div className={style.hojoon}>{`Hojoon Kim`}</div>
        <div className={style.Intro}>{`I design and build apps and stuff`}</div>
        <div className={style.shortBio}>{shortBioText}</div>
      </div>
    </section>
  );
}
