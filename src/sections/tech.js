import TechProjectCard from '@/components/techProjectCard';
import { techProjectsData } from '@/data/techProjectsData';

export default function Tech() {
  const data = techProjectsData;

  return (
    <div className="section full-width projects-section tech scroll-anchor" id="tech">
      <div className="max-width-block">
        <h3 style={{ color: 'var(--aqua)', display: 'inline', padding: '4px', borderRadius: '4px' }}>Tech Projects</h3>
      </div>
      <div className="projects-scroll-container flex">
        {data.map((project) => (
          <TechProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
