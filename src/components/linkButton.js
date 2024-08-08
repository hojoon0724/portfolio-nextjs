import ButtonIcon from './buttonIcon';

export default function LinkButton({ targetLink }) {
  return (
    <a href={targetLink.url} target={targetLink.openOnNewWindow ? '_blank' : '_self'} className={'pri-transparent-btn'}>
      <ButtonIcon icon={targetLink.icon} />
      <div className="link-text">{targetLink.button}</div>
    </a>
  );
}
