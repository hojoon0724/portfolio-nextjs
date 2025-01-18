import Image from 'next/image';

export default function ButtonIcon({ icon, description, bgColor, padding }) {
  return (
    <div className="button-icon" style={{ backgroundColor: bgColor, padding: padding }}>
      <img src={`/assets/icons/${icon}`} alt={description} />
    </div>
  );
}
