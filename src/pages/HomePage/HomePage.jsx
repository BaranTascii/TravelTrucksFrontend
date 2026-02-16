import { useNavigate } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <section className={s.hero}>
      <div className={`${s.heroContent} container`}>
        <h1 className={s.title}>Campers of your dreams</h1>
        <p className={s.subtitle}>
          Explore our wide selection of campervans and start your adventure
          today!
        </p>
        <button className={s.ctaBtn} onClick={() => navigate("/catalog")}>
          View Now
        </button>
      </div>
    </section>
  );
};
export default HomePage;
