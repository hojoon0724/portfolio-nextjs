import styled from 'styled-components';

const HelloContainer = styled.div`
  margin: clamp(60px, 20vw, 120px);
`;

const Hojoon = styled.div`
  font-family: var(--roboto-flex);
  font-variation-settings: var(--font-variation-wide-bold);
  font-size: var(--fs-900);
  margin-bottom: 20px;
`;

const Intro = styled.div`
  justify-content: center;
  align-items: center;
`;

const ShortBio = styled.div`
  max-width: 72ch;
  line-height: 1.5rem;
  margin-top: 64px;
`;

const shortBioText = (
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

export default function IntroGrid({}) {
  return (
    <section className="intro-grid">
      <HelloContainer>
        <div className="text-mono-small">{`Hi, my name is`}</div>
        <Hojoon>{`Hojoon Kim`}</Hojoon>
        <Intro className="text-mono-small">{`I design and build apps and stuff`}</Intro>
        <ShortBio className="text-mono-small">{shortBioText}</ShortBio>
      </HelloContainer>
    </section>
  );
}
