import Link from "next/link";

const NavBar = () => {
  return (
    <div className="">
      <div className="navigation">
        <nav className="container">
          <span>🥘 HomeChefRecipes</span>
          <div className="homeBloginB">
            <Link className="homeB" href="/">
              Home
            </Link>
            <Link className="loginB" href="/login">
              Login
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
