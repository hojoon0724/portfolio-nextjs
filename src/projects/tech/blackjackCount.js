import StackIcon from '@/components/stackIcon';
import LinkButtons from '../../components/linkButtons';

export default function BlackjackCount() {
  const projectDetails = {
    title: 'Blackjack Count Trainer',

    text: 'Write project description',

    links: [{ button: 'Github', url: 'https://github.com/hojoon0724/hourglass' }],
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
            <StackIcon icon={'/html5.svg'} bgColor={'white'} padding={'8px'} />
            <StackIcon icon={'/css3.svg'} bgColor={'white'} padding={'8px'} />
          </div>
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
