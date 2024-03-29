import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link className="logo-container" to="/">
          <div className="logo">
            <CrwnLogo />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
