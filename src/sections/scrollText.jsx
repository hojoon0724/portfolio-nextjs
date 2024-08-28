import { useScroll } from 'framer-motion';

export default function ScrollText({ text }) {
  console.log(text);
  return (
    <div className="section about column scroll-anchor" id="about">
      <div className="software-list-container">
        <p>{text}</p>
      </div>
      <div className="spacer-large" style={{ height: '100px' }}></div>
    </div>
  );
}
