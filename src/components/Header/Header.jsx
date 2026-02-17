import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/icons/van.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="TravelTrucks" />
          <span>TravelTrucks</span>
        </div>

        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
