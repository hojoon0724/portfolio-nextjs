export default function stackIcon({ url, bgColor, padding }) {
  return (
    <div className="stack-icon" style={{ backgroundColor: bgColor, padding: padding }}>
      <img src={url} alt="indesign icon" />
    </div>
  );
}
