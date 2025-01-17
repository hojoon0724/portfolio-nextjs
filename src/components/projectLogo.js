import Image from 'next/image';

export default function ProjectLogo({ project, width, height }) {
  return (
    <div className="project-title-card flex justify-center items-center">
      <Image
        className="svg-logo"
        src={`/assets/logos${project.logo}`}
        alt={`${project.title} logo`}
        width={1200}
        height={800}
      />
    </div>
  );
}
