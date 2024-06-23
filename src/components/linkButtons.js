export default function LinkButtons({ targetLink }) {
  return (
    <a href={targetLink.url} target="_blank">
      <button className="pri-accent-btn">{targetLink.button}</button>
    </a>
  );
}
