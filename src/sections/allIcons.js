import { iconsData } from '@/data/iconsData';
import SoftwareIcon from '@/components/softwareIcon';

export default function AllIcons() {
  const data = iconsData;
  const keys = Object.keys(data);

  return (
    <div
      className="section intro flex scroll-anchor"
      id="icon-test"
    >
      <div
        className="icon-test"
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {keys.map(key => (
          <div
            className="icon-and-name"
            key={key}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}
          >
            <SoftwareIcon itemName={data[key]} />
            {/* <div className="icon-name" style={{ paddingRight: '50px' }}>
              {data[key].fileName}
              <br />
              {data[key].description}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
