import styles from './design.module.css';
import DesignProjectCard from '@/components/designProjectCardLarge';
import { designProjectsData } from '@/data/designProjectsData';

export default function Design() {
  const data = designProjectsData;

  return (
    <div className="section full-width projects-section design scroll-anchor" id="design">
      <div className="max-width-block">
        <h3 style={{ color: 'var(--aqua)', display: 'inline', padding: '4px', borderRadius: '4px' }}>
          Design Projects
        </h3>
      </div>
      <div className="projects-scroll-container flex">
        {data.map(project => (
          <DesignProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
