import ButtonIcon from '../z-notInUse/zBackup/buttonIcon';
import Image from 'next/image';

// @keyframes arrow-in {
//   0% {
//     transform: translateX(-100%) translateY(100%);
//   }
//   100% {
//     transform: translateX(0) translateY(0);
//   }
// }

// @keyframes arrow-out {
//   0% {
//     transform: translateX(-100%) translateY(100%);
//   }
//   100% {
//     transform: translateX(0) translateY(0);
//   }
// }

// .arrow-button-icon {
//   overflow: hidden;
// }

// .pri-black-btn .arrow-button-icon img {
//   animation: arrow-out 0.3s ease-out forwards;
// }

// .pri-black-btn:hover .arrow-button-icon {
//   filter: invert(1);
// }

// .pri-black-btn:hover .arrow-button-icon img {
//   animation: arrow-in 0.3s ease-out forwards;
// }

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
