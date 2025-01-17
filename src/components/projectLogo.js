import Image from 'next/image';

export default function ProjectLogo({ project, width, height }) {
  return (
    <div className="project-logo-container">
      <Image
        className="svg-logo"
        src={`/assets/logos${project.logo}`}
        alt={`${project.title} logo`}
        width={400}
        height={400}
      />
    </div>
  );
}
