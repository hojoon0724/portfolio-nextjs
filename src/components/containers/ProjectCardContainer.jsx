import Image from 'next/image';
import style from './ProjectCardContainer.module.css'

export default function ProjectCardContainer({ children }) {
  return (
    <div className={`${style.container} design-project-container flex justify-center items-center`}>
      <div className="project-title-card flex justify-center items-center ">
        <Image src="/assets/logos/hourglass-logo-white.svg" alt="alt" width={500} height={200} />
      </div>
      <div className="project-card-hover">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ut praesentium unde officia numquam. Nulla
          voluptas inventore unde tempore. Harum itaque nam fugiat porro, exercitationem eligendi dicta at? Vel,
          assumenda.
        </p>
      </div>
      {children}
    </div>
  );
}
