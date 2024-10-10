import style from '@/sections/design.module.css';
import StackIcon from '@/components/stackIcon';
import LinkButton from '@/components/linkButton';
import MainLinkButton from './mainLinkButton';
import ProjectLogo from './projectLogo';

export default function DesignProjectCard({ project }) {
  return (
    <div className={`${style['design-project-container']} flex column`}>
      <div className={`${style['design-project-screenshot']} project-screenshot`}></div>
      <div className={`${style['design-project-text-container']}`}>
        <div className={`${style['design-project-title']}`}>
          {project.logo ? <ProjectLogo project={project} /> : project.title}
        </div>
        <div className={`${style['design-project-tags']} flex`}>
          {/* {project.tags.map(tag => (
            <div className={`${style['design-tag-item']}`} key={tag}>
              {tag}
            </div>
          ))} */}
        </div>
        <div className={`${style['design-project-about']}`}>
          {project.text.split('\n').map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
        <div className={`${style['design-main-link-container']}`}>
          <MainLinkButton targetLink={project.mainLink} />
        </div>
      </div>
      <div className={`${style['design-buttons-container']}`}>
        <div className={`${style['design-made-with']}`} style={{ width: '100%' }}>
          <div className={`${style['design-made-with-text']}`}>Tools used:</div>
          <div className={`${style['design-stack-icons-container']} flex`}>
            {project.stack.map(tech => (
              <StackIcon key={tech.name} itemName={tech} />
            ))}
          </div>
        </div>
        <div className={`${style['design-repo-links-container']}`}>
          {project.repoLinks.map(link => (
            <LinkButton key={link.url} bgColor={'white'} padding={'0px'} targetLink={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
