import StackIcon from '@/components/stackIcon';
import LinkButtons from '@/components/linkButtons';

export default function TechProjectCard({ project }) {
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
            {project.stack.map((tech) => (
              <StackIcon
                key={tech.icon}
                icon={tech.icon}
                description={tech.description}
                bgColor={tech.bgColor}
                padding={tech.padding}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="buttons-container">
        {project.links.map((link) => (
          <LinkButtons key={link.url} bgColor={'white'} padding={'0px'} targetLink={link} />
        ))}
      </div>
    </div>
  );
}
