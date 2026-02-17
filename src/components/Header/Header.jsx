import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
    </header>
  );
}

export default Header;
