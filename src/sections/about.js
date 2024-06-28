import Scratch from '@/components/scratch';
import StackIcon from '@/components/stackIcon';
import SoftwareIcon from '@/components/softwareIcon';
import { iconsData } from '@/data/iconsData';

export default function About() {
  const data = iconsData;
  const iconArray = ['adobecc', 'photoshop'];
  const keys = Object.keys(data);

  return (
    <div className="section about column" id="about">
      <div className="software-list-container">
        {keys.map((key) => (
          <div className="icon-and-name" style={{ display: 'flex', flexDirection: 'column' }}>
            <SoftwareIcon itemName={data[key]} />
            {/* <div className="icon-name">{data[key].name}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
