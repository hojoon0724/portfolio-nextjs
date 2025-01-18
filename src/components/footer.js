import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  font-weight: 400;
  letter-spacing: 0.1ch;
  bottom: 0px;
  box-shadow: 0px -4px 8px 0px hsla(0, 0%, 0%, 0.25);
  color: rgb(255, 255, 255);
  background-color: hsla(0, 0%, 60%, 0.25);
  isolation: isolate;
  position: absolute; 
  backdrop-filter: blur(3rem) saturate(165%);
  z-index: 100;
`;

const FooterInner = styled.div`
  text-shadow: 0px 0px 2px var(--black);
  width: 100%;
  padding: 8px;
  font-size: 8pt;
  position: sticky;
`;

export default function Footer() {
  return (
    <FooterContainer className="footer-container flex items-center justify-center">
      <FooterInner className="footer flex items-center justify-center">
        <span style={{ color: 'var(--blue)' }}>&#91;&nbsp;</span>
        <span style={{ color: 'var(--pink)' }}>designed&nbsp;</span>
        <span style={{ color: 'var(--white)' }}>and&nbsp;</span>
        <span style={{ color: 'var(--light-green)' }}>built&nbsp;</span>
        <span style={{ color: 'var(--blue)' }}>&#93;&nbsp;</span>
        <span style={{ color: 'var(--white)' }}>by&nbsp;</span>
        <span style={{ color: 'var(--yellow)' }}>&#123;&nbsp;</span>
        <span style={{ color: 'var(--light-blue)' }}>Hojoon Kim&nbsp;</span>
        <span style={{ color: 'var(--yellow)' }}>&#125;</span>
      </FooterInner>
    </FooterContainer>
  );
}
