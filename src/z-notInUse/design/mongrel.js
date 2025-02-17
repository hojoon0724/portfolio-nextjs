import LinkButton from '../../components/linkButton';

export default function Mongrel() {
  const projectDetails = {
    title: 'Mongrel',

    text: '',

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
      </div>
      <div className="buttons-container">
        {projectDetails.links.map(link => (
          <LinkButton key={link.url} targetLink={link} />
        ))}
      </div>
    </div>
  );
}
