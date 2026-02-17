import styles from "./Hero.module.css";
import heroImg from "../../assets/images/hero.png";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <h1>Travel with Comfort</h1>
      <button onClick={() => navigate("/catalog")}>View Now</button>
    </section>
  );
}

export default Hero;
