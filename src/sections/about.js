import styles from './about.module.css';
import Scratch from '@/components/scratch';
import StackIcon from '@/components/stackIcon';
import SoftwareIcon from '@/components/softwareIcon';
import SocialButton from '@/components/socialButton';
import { iconsData } from '@/data/iconsData';
import Skills from '@/components/skills';

export default function About() {
  const data = iconsData;
  const iconArray = ['adobecc', 'photoshop'];
  const icons = Object.keys(data);
  const aboutText =
    "I'm a design-centered software engineer with a background in design, research, and consulting and I build systemic solutions for people";

  return (
    <div className="section about column scroll-anchor" id="about">
      <div className="max-width-block">
        <h3 style={{ color: 'var(--aqua)', display: 'inline', padding: '4px', borderRadius: '4px' }}>About</h3>
        <div className="about-text-container">{aboutText}</div>
        <div className="spacer-large" style={{ height: '50px' }}></div>

        <h3 style={{ color: 'var(--aqua)', display: 'inline', padding: '4px', borderRadius: '4px' }}>Experience</h3>
        <div className="experience-section-container">----experience section----</div>
        <div className="spacer-large" style={{ height: '50px' }}></div>

        <h3 style={{ color: 'var(--aqua)', display: 'inline', padding: '4px', borderRadius: '4px' }}>Skills</h3>
        <Skills category={'tech'} />
        <Skills cautegory={'media & design'} />
        <Skills category={'software'} />
        <Skills category={'usual suspects'} />

        {/* <div className="software-list-container">
          {icons.map(icon => (
            <div className="icon-and-name" style={{ display: 'flex', flexDirection: 'column' }} key={icon}>
              <SoftwareIcon itemName={data[icon]} />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
