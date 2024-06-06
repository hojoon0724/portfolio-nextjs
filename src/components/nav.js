import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="#about">about</Link>
          </li>
          <li>
            <Link href="#contact">contact</Link>
          </li>
          <li>
            <Link href="#tech">tech</Link>
          </li>
          <li>
            <Link href="#design">design</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
