import StackIcon from '@/components/stackIcon';
import LinkButtons from '@/components/linkButtons';

export default function Hourglass() {
  const projectDetails = {
    title: 'Hourglass',

    text: 'A multiplatform time tracking app designed for professionals working on an hourly billing basis (such as consultants, lawyers, tutors, freelancers, and contractors) where users can allocate predetermined hours, deduct hours as the timer runs, and alerts users when client hours approaches the user\'s set threshold.\nApparently "I couldn\'t find an app I liked so I built my own" is the most Hojoon sentence ever.\nApp is available for iOS, iPadOS, macOS, and visionOS.',

    stack: [
      { icon: 'swift.svg', description: 'swift icon', bgColor: 'rgba(0,0,0,0)', padding: '0px' },
      { icon: 'swiftui.png', description: 'swiftui icon', bgColor: 'rgba(0,0,0,0)', padding: '0px' },
      { icon: 'swiftdata.png', description: 'swiftdata icon', bgColor: 'rgba(0,0,0,0)', padding: '0px' },
    ],

    links: [
      {
        button: 'Download on TestFlight',
        url: 'https://testflight.apple.com/join/yyHqLv7f',
        icon: 'testflight.png',
        bgColor: 'rgba(0,0,0,0)',
        padding: '0px',
      },
      {
        button: 'Github',
        url: 'https://github.com/hojoon0724/hourglass',
        icon: 'github.svg',
        bgColor: 'white',
        padding: '0px',
      },
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
            {projectDetails.stack.map((tech) => (
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
        {projectDetails.links.map((link) => (
          <LinkButtons key={link.url} bgColor={'white'} padding={'0px'} targetLink={link} />
        ))}
      </div>
    </div>
  );
}
