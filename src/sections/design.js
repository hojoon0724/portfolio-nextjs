import Ensrq from '@/projects/design/ensrq';
import Mongrel from '@/projects/design/mongrel';
import PartnerEnergy from '@/projects/design/partnerEnergy';
import Rcnm from '@/projects/design/rcnm';

export default function Design() {
  return (
    <div className="full-width-section design" id="design">
      <div className="max-width-block">
        <h1>Design Projects</h1>
      </div>
      <div className="projects-scroll-container flex">
        <Rcnm />
        <PartnerEnergy />
        <Mongrel />
        <Ensrq />
      </div>
    </div>
  );
}
