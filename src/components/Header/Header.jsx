import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={`${s.nav} container`}>
        <NavLink to="/" className={s.logo}>
          TravelTrucks
        </NavLink>
        <ul className={s.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? s.activeLink : s.navLink
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                isActive ? s.activeLink : s.navLink
              }
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
