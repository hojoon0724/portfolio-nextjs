import ButtonIcon from './buttonIcon';

export default function ArrowLinkButton({ targetLink }) {
  return (
    <a href={targetLink.url} target={targetLink.openOnNewWindow ? '_blank' : '_self'} className={'pri-black-btn'}>
      <div className="arrow-icon-container">
        <div className="arrowIconBg arrow-button-icon">
          <img src={`/assets/icons/arrowBlack.svg`} alt={targetLink.description} />
        </div>
      </div>
      <div className="link-text">{targetLink.button}</div>
    </a>
  );
}
