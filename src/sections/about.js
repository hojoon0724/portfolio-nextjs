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
      {/* <h1>About Hojoon</h1>
      <h4>Stuff I use:</h4> */}
      {/* <div className="software-list-container">
        {iconArray.map((itemInArray) => (
          <SoftwareIcon itemName={data[itemInArray]} />
        ))}
      </div> */}
      <div className="software-list-container">
        {keys.map((key) => (
          <div className="icon-and-name" style={{ display: 'flex', flexDirection: 'column' }}>
            <SoftwareIcon itemName={data[key]} />
            <div className="icon-name">{data[key].fileName}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
