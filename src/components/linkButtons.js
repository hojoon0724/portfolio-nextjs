import StackIcon from './stackIcon';
export default function LinkButtons({ icon, targetLink }) {
  return (
    <a href={targetLink.url} target="_blank" className="pri-accent-btn">
      <StackIcon icon={icon} bgColor={'white'} padding={'8px'} />
      <div className="link-text">{targetLink.button}</div>
    </a>
  );
}
