import StackIcon from '@/z-notInUse/zBackup/stackIcon';
import RepoLinkButtons from '@/components/linkButtons';

export default function BlackjackCount() {
  const projectDetails = {
    title: 'Blackjack Count Trainer',

    text: 'Write project description',

    stack: [
      { icon: 'react.svg', description: 'react icon', bgColor: 'black', padding: '8px' },
      { icon: 'html5.svg', description: 'html5 icon', bgColor: 'white', padding: '8px' },
      { icon: 'css3.svg', description: 'css3 icon', bgColor: 'white', padding: '8px' },
    ],

    links: [{ button: 'Github', url: 'https://github.com/hojoon0724/hourglass' }],
  };

  return (
    <div className="project-container flex flex-col">
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
            {projectDetails.stack.map(tech => (
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
        {projectDetails.links.map(link => (
          <RepoLinkButtons key={link.url} targetLink={link} />
        ))}
      </div>
    </div>
  );
}
