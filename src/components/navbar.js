import style from './navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={`${style['nav-bar-container']} flex center`}>
      <div className={`${style['nav-bar']} flex row`}>
        {/* <div className="nav-bar-left">
          <Link href="/">
            <div className="logo">Hojoon Kim</div>
            <div className="subtitle">Design-centered Developer</div>
          </Link>
        </div> */}
        <div className={`${style['nav-bar-center']}`}>
          <div className={`${style['nav-btn-container']} flex center`}>
            <div className={`${style['nav-btn']}`}>
              <Link href="#tech">tech</Link>
            </div>
            <div className={`${style['nav-btn-bg']}`}></div>
          </div>
          <div className={`${style['nav-btn-container']} flex center`}>
            <div className={`${style['nav-btn']}`}>
              <Link href="#design">design</Link>
            </div>
            <div className={`${style['nav-btn-bg']}`}></div>
          </div>
          <div className={`${style['nav-btn-container']} flex center`}>
            <div className={`${style['nav-btn']}`}>
              <Link href="#about">about</Link>
            </div>
            <div className={`${style['nav-btn-bg']}`}></div>
          </div>
          <div className={`${style['nav-btn-container']} flex center`}>
            <div className={`${style['nav-btn']}`}>
              <Link href="#contact">contact</Link>
            </div>
            <div className={`${style['nav-btn-bg']}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
