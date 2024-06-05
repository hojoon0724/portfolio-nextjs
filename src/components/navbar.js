export default function Navbar() {
  return (
    <div className="nav-bar-container flex center">
      <div className="nav-bar flex row">
        <div className="nav-bar-left">
          <a href="/">
            <div className="logo">Hojoon Kim</div>
            <div className="subtitle">Design-centered Developer</div>
          </a>
        </div>
        <div className="nav-bar-right">
          <nav>
            <ul>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#programming">programming</a>
              </li>
              <li>
                <a href="#design">design</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
