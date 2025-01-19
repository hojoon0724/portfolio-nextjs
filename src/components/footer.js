import style from './Footer.module.css';

export default function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerInner}>
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
