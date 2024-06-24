import ReactIcon from '@/components/stack/react';
import LinkButtons from '../../components/linkButtons';

export default function Bkmrkd() {
  const projectDetails = {
    title: 'bkmrkd',

    text: 'Description about bookmark saving full crud and user auth with JWT',

    links: [
      { button: 'Github Front', url: 'https://github.com/hojoon0724/bkmrkd-frontend' },
      { button: 'Github Back', url: 'https://github.com/hojoon0724/bkmrkd-backend' },
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
        <div className="stack-icons-container">
          <ReactIcon />
        </div>
      </div>
      <div className="buttons-container">
        {projectDetails.links.map((link) => (
          <LinkButtons key={link.url} targetLink={link} />
        ))}
      </div>
    </div>
  );
}
