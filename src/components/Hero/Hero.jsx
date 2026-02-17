import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";
import hero from "../../assets/hero.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <img src={hero} alt="hero" className={styles.image} />

      <div className={styles.content}>
        <h1>Travel Trucks</h1>
        <p>Discover the freedom of van life</p>
        <button className={styles.button} onClick={() => navigate("/catalog")}>
          View Now
        </button>
      </div>
    </section>
  );
}
