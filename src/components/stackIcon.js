import Image from 'next/image';

export default function StackIcon({ icon, description, bgColor, padding }) {
  return (
    <div className="stack-icon" style={{ backgroundColor: bgColor, padding: padding }}>
      <img src={`/assets/icons/${icon}`} alt={description} />
    </div>
  );
}
