import Link from 'next/link';

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>Logo</li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
