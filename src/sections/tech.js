import Bkmrkd from '@/projects/tech/bkmrkd';
import BlackjackCount from '@/projects/tech/blackjackCount';
import Hourglass from '@/projects/tech/hourglass';

export default function Tech() {
  return (
    <div className="full-width-section tech" id="tech">
      <div className="max-width-block">
        <h1>Tech Projects</h1>
      </div>
      <div className="projects-scroll-container flex">
        <Hourglass />
        <BlackjackCount />
        <Bkmrkd />
      </div>
    </div>
  );
}
