import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="#tech">tech</Link>
          </li>
          <li>
            <Link href="#design">design</Link>
          </li>
          <li>
            <Link href="#about">about</Link>
          </li>
          <li>
            <Link href="#contact">contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
