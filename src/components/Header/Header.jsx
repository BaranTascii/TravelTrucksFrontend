import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>TravelTrucks</div>

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

export default Header;
