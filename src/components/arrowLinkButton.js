import ButtonIcon from './buttonIcon';

export default function ArrowLinkButton({ targetLink }) {
  return (
    <a href={targetLink.url} target={targetLink.openOnNewWindow ? '_blank' : '_self'} className={'pri-black-btn'}>
      <div className="arrow-icon-container">
        <div className="arrowIconBg button-icon">
          <img src={`/assets/icons/arrow.svg`} alt={`arrow background`} />
        </div>
        <div
          className="arrowIcon button-icon"
          style={{ backgroundColor: targetLink.bgColor, padding: targetLink.padding }}
        >
          <img src={`/assets/icons/arrowWhite.svg`} alt={targetLink.description} />
        </div>
        <div
          className="arrowIconHover button-icon"
          style={{ backgroundColor: targetLink.bgColor, padding: targetLink.padding }}
        >
          <img src={`/assets/icons/arrowBlack.svg`} alt={targetLink.description} />
        </div>
      </div>
      <div className="link-text">{targetLink.button}</div>
    </a>
  );
}
