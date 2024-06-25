export default function StackIcon({ icon, bgColor, padding }) {
  return (
    <div className="stack-icon" style={{ backgroundColor: bgColor, padding: padding }}>
      <img src={`/assets/icons${icon}`} alt="indesign icon" />
    </div>
  );
}
