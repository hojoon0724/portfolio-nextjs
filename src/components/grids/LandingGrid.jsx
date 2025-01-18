import styled from 'styled-components';

const TestDiv = styled.div`
  font-size: 1.5rem;
`;

export default function LandingGrid({ children }) {
  return <div className="landing-grid w-full flex flex-col">{children}</div>;
}
