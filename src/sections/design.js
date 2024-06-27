import DesignProjectCard from '@/components/designProjectCard';
import { designProjectsData } from '@/data/designProjectsData';

export default function Desig() {
  const data = designProjectsData;

  return (
    <div className="full-width-section tech" id="tech">
      <div className="max-width-block">
        <h3 style={{ color: 'var(--aqua)', display: 'inline', padding: '4px', borderRadius: '4px' }}>
          Design Projects
        </h3>
      </div>
      <div className="projects-scroll-container flex">
        {data.map((project) => (
          <DesignProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
