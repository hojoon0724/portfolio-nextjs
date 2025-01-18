import Image from 'next/image';

export default function SoftwareIcon({ itemName }) {
  return (
    <div className="icon-container" style={{ backgroundColor: itemName.bgColor, padding: itemName.padding }}>
      <img src={`/assets/icons/${itemName.fileName}`} alt={itemName.description} />
    </div>
  );
}
