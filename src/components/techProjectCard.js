import StackIcon from '@/components/stackIcon';
import LinkButton from '@/components/linkButton';
import MainLinkButton from './mainLinkButton';
import ProjectLogo from './projectLogo';
import RotatingScreenshots from './rotatingScreenshots';

export default function TechProjectCard({ project }) {
  return (
    <div className="project-container flex column">
      <div className="project-screenshot">
        {/* <RotatingScreenshots folderRoute={project.folder} galleryArray={project.images} /> */}
      </div>
      <div className="project-text-container">
        <div className="project-title">{project.logo ? <ProjectLogo project={project} /> : project.title}</div>
        <div className="project-about">
          {project.text.split('\n').map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
        <div className="main-link-container">
          <MainLinkButton targetLink={project.mainLink} />
        </div>
      </div>
      <div className="buttons-container" style={{ flexWrap: 'wrap' }}>
        <div className="made-with">
          <div className="made-with-text">Made with:</div>
          <div className="stack-icons-container flex">
            {project.stack.map(tech => (
              <StackIcon key={tech.name} itemName={tech} />
            ))}
          </div>
        </div>
        <div className="repo-links-container">
          {project.repoLinks.map(link => (
            <LinkButton key={link.url} targetLink={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
