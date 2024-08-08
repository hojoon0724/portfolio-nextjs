import StackIcon from '@/components/stackIcon';
import LinkButton from '@/components/linkButton';
import MainLinkButton from './mainLinkButton';

export default function DesignProjectCard({ project }) {
  return (
    <div className="project-container flex column">
      <div className="project-screenshot"></div>
      <div className="project-text-container">
        <div className="project-title">{project.title}</div>
        <div className="project-tags flex">
          {project.tags.map(tag => (
            <div className="tag-item" key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <div className="project-about">
          {project.text.split('\n').map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
        <div className="main-link-container">
          <MainLinkButton targetLink={project.mainLink} />
        </div>
      </div>
      <div className="buttons-container">
        <div className="made-with" style={{ width: '100%' }}>
          <div className="made-with-text">Tools used:</div>
          <div className="stack-icons-container flex">
            {project.stack.map(tech => (
              <StackIcon key={tech.name} itemName={tech} />
            ))}
          </div>
        </div>
        <div className="repo-links-container">
          {project.repoLinks.map(link => (
            <LinkButton key={link.url} bgColor={'white'} padding={'0px'} targetLink={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
