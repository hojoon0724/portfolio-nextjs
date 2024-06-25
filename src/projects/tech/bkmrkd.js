import StackIcon from '@/components/stackIcon';
import LinkButtons from '../../components/linkButtons';

export default function Bkmrkd() {
  const projectDetails = {
    title: 'bkmrkd',

    text: 'Description about bookmark saving full crud and user auth with JWT',

    links: [
      { button: 'Github Front', icon: '/github.svg', url: 'https://github.com/hojoon0724/bkmrkd-frontend' },
      { button: 'Github Back', icon: '/github.svg', url: 'https://github.com/hojoon0724/bkmrkd-backend' },
    ],
  };

  return (
    <div className="project-container flex column">
      <div className="project-screenshot"></div>
      <div className="project-text-container">
        <div className="project-title">{projectDetails.title}</div>
        <div className="project-about">
          {projectDetails.text.split('\n').map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
        <div className="made-with">
          <div className="made-with-text">Made with:</div>
          <div className="stack-icons-container flex">
            <StackIcon icon={'/react.svg'} bgColor={'black'} padding={'8px'} />
            <StackIcon icon={'/mongodb.svg'} bgColor={'var(--dark)'} padding={'6px'} />
            <StackIcon icon={'/jwt.svg'} bgColor={'var(--dark)'} padding={'8px'} />
            <StackIcon icon={'/html5.svg'} bgColor={'white'} padding={'8px'} />
            <StackIcon icon={'/css3.svg'} bgColor={'white'} padding={'8px'} />
          </div>
        </div>
      </div>
      <div className="buttons-container">
        {projectDetails.links.map((link) => (
          <LinkButtons key={link.url} icon={link.icon} targetLink={link} />
        ))}
      </div>
    </div>
  );
}
