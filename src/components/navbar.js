import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="nav-bar-container flex center">
      <div className="nav-bar flex row">
        <div className="nav-bar-left">
          <Link href="/">
            <div className="logo">Hojoon Kim</div>
            <div className="subtitle">Design-centered Developer</div>
          </Link>
        </div>
        <div className="nav-bar-right">
          <nav>
            <ul>
              <li>
                <Link href="#about">about</Link>
              </li>
              <li>
                <Link href="#programming">programming</Link>
              </li>
              <li>
                <Link href="#design">design</Link>
              </li>
              <li>
                <Link href="#contact">contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
