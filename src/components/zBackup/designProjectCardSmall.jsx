import style from '@/sections/design.module.css';
import StackIcon from '@/z-notInUse/zBackup/stackIcon';
import LinkButton from '@/components/linkButton';
import ProjectLogo from './projectLogo';
import ArrowLinkButton from '../../components/arrowLinkButton';

export default function DesignProjectCardSmall({ project }) {
  return (
    <div className="design-project-container flex justify-center align-top">
      {project.logo ? <ProjectLogo project={project} /> : project.title}

      <div className="project-card-hover">&nbsp;</div>
    </div>
  );
}
