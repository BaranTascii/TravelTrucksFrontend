import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import hero from "../../assets/hero.png";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <img src={hero} alt="hero" className={styles.image} />

      <div className={styles.overlay}>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>

        <button className={styles.button} onClick={() => navigate("/catalog")}>
          View Now
        </button>
      </div>
    </section>
  );
}
