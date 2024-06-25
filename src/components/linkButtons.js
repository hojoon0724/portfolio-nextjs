import ButtonIcon from './buttonIcon';

export default function LinkButtons({ targetLink }) {
  return (
    <a href={targetLink.url} target="_blank" className="pri-accent-btn">
      <ButtonIcon icon={targetLink.icon} bgColor={targetLink.bgColor} padding={targetLink.padding} />
      <div className="link-text">{targetLink.button}</div>
    </a>
  );
}
