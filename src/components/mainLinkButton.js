import ButtonIcon from './buttonIcon';

export default function MainLinkButton({ targetLink }) {
  return (
    <a
      href={targetLink.url}
      target={targetLink.openOnNewWindow ? '_blank' : '_self'}
      className={targetLink.appStore ? 'app-store-btn' : 'pri-black-btn'}
    >
      <ButtonIcon icon={targetLink.icon} />
      <div className="link-text">{targetLink.button}</div>
    </a>
  );
}
