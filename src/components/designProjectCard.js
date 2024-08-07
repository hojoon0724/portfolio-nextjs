import StackIcon from '@/components/stackIcon';
import LinkButton from '@/components/linkButton';

export default function DesignProjectCard({ project }) {
  return (
    <div className="project-container flex column">
      <div className="project-screenshot"></div>
      <div className="project-text-container">
        <div className="project-title">{project.title}</div>
        <div className="project-about">
          {project.text.split('\n').map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
        <div className="made-with">
          <div className="made-with-text">Made with:</div>
          <div className="stack-icons-container flex">
            {project.stack.map(tech => (
              <StackIcon key={tech.name} itemName={tech} />
            ))}
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <div className="repo-links-container">
          {project.repoLinks.map(link => (
            <LinkButton key={link.url} bgColor={'white'} padding={'0px'} targetLink={link} />
          ))}
        </div>
        <div className="main-link-container">
          <LinkButton targetLink={project.mainLink} />
        </div>
      </div>
    </div>
  );
}
