import Image from 'next/image';
import { designProjectsData } from '@/data/designProjectsData';

const sampleData = designProjectsData[3];

console.log(sampleData);

export default function LaMongrel({ sampleData }) {
  console.log(sampleData);
  return (
    <div className="design-project-container">
      <section className=" w-full mt-0 max-h-[50svh] h-[400px]">
        <div className="hero-section-container w-full h-full relative flex flex-col justify-center items-center">
          <div className="bg-slate-900 opacity-40 hero-image absolute top-0 left-0 w-full h-full object-contain overflow-clip">
            {/* <Image
            src="/assets/logos/mongrel/Horizontal_Dark-Full-LA-Mongrel-NeverSurrender.png"
            alt="alt"
            width={2400}
            height={2000}
          /> */}
          </div>
          <div className="hero-section-title absolute">[hero section title goes here]</div>
        </div>
      </section>
      <section className="project-details flex flex-col">
        <div className="details-project-description">
          <p>{}</p>
        </div>
      </section>
    </div>
  );
}
