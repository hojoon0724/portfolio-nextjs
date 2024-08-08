import Image from 'next/image';

export default function ProjectLogo({ project }) {
  return (
    <div className="project-logo-container">
      <img className="svg-logo" src={`/assets/logos/${project.logo}`} alt={`${project.title} logo`} />
    </div>
  );
}
