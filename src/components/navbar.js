import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="nav-bar-container flex center">
      <div className="nav-bar flex row">
        {/* <div className="nav-bar-left">
          <Link href="/">
            <div className="logo">Hojoon Kim</div>
            <div className="subtitle">Design-centered Developer</div>
          </Link>
        </div> */}
        <div className="nav-bar-center">
          <div className="nav-btn-container flex center">
            <div className="nav-btn">
              <Link href="#about">about</Link>
            </div>
            <div className="nav-btn-bg nav-active"></div>
          </div>
          <div className="nav-btn-container flex center">
            <div className="nav-btn">
              <Link href="#contact">contact</Link>
            </div>
            <div className="nav-btn-bg active"></div>
          </div>
          <div className="nav-btn-container flex center">
            <div className="nav-btn">
              <Link href="#tech">tech</Link>
            </div>
            <div className="nav-btn-bg active"></div>
          </div>
          <div className="nav-btn-container flex center">
            <div className="nav-btn">
              <Link href="#design">design</Link>
            </div>
            <div className="nav-btn-bg active"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
