import ButtonIcon from './buttonIcon';
import Image from 'next/image';

export default function ArrowLinkButton({ targetLink }) {
  return (
    <a href={targetLink.url} target={targetLink.openOnNewWindow ? '_blank' : '_self'} className={'pri-black-btn'}>
      <div className="arrowIconBg arrow-button-icon">
        <Image src={`/assets/icons/arrowBlack.svg`} alt={targetLink.description} width={32} height={32} />
      </div>
      {targetLink.text === '' ? '' : <div className="link-text">{targetLink.text}</div>}
    </a>
  );
}
