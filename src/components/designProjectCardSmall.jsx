import style from '@/sections/design.module.css';
import StackIcon from '@/components/stackIcon';
import LinkButton from '@/components/linkButton';
import ProjectLogo from './projectLogo';
import ArrowLinkButton from './arrowLinkButton';

export default function DesignProjectCardSmall({ project }) {
  return (
    <div className="design-project-container">
      <div className="design-project-title">{project.logo ? <ProjectLogo project={project} /> : project.title}</div>
    </div>
  );
}
