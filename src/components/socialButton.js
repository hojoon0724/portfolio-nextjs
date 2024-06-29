import Image from 'next/image';

export default function SocialButton({ socialPlatform, socialUrl }) {
  return (
    <a href={socialUrl} className="social-button">
      <div
        className="social-button-icon"
        style={{ backgroundColor: 'var(--aqua)', padding: '0px', borderRadius: '7px 0px 0px 7px' }}
      >
        <img src={`/assets/icons/${socialPlatform.fileName}`} alt={socialPlatform.description} />
      </div>
      <div className="social-name">{socialPlatform.name}</div>
    </a>
  );
}
