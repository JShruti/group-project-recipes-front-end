import Link from "next/link";

const NavBar = () => {
  return (
    <div className="">
      <div className="navigation">
        <nav className="container">
          <span>🥘 HomeChefRecipes</span>
          <div>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
