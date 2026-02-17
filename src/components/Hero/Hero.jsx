import styles from "./Hero.module.css";
import heroImage from "../../assets/images/hero.png";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <h1>Travel with Comfort</h1>
      <button onClick={() => navigate("/catalog")}>View Now</button>
    </section>
  );
}

export default Hero;
