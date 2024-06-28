export default function SocialButton({ socialPlatform, socialUrl }) {
  return (
    <a href={socialUrl}>
      <div className="social-button">
        <div className="social-icon" style={{ padding: '0px' }}>
          <img src={`/assets/icons/${socialPlatform.fileName}`} alt={socialPlatform.description} />
        </div>
        <div className="social-name">{socialPlatform.name}</div>
      </div>
    </a>
  );
}
