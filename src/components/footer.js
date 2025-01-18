import style from './footer.module.css';

export default function Footer() {
  return (
    <div className="footer-container flex items-center justify-center">
      <div className="footer flex items-center justify-center">
        <span style={{ color: 'var(--blue)' }}>&#91;&nbsp;</span>
        <span style={{ color: 'var(--pink)' }}>designed&nbsp;</span>
        <span style={{ color: 'var(--white)' }}>and&nbsp;</span>
        <span style={{ color: 'var(--light-green)' }}>built&nbsp;</span>
        <span style={{ color: 'var(--blue)' }}>&#93;&nbsp;</span>
        <span style={{ color: 'var(--white)' }}>by&nbsp;</span>
        <span style={{ color: 'var(--yellow)' }}>&#123;&nbsp;</span>
        <span style={{ color: 'var(--light-blue)' }}>Hojoon Kim&nbsp;</span>
        <span style={{ color: 'var(--yellow)' }}>&#125;</span>
      </div>
    </div>
  );
}
