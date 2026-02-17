import styles from "./CamperCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favoritesSlice";

export default function CamperCard({ camper }) {
  const dispatch = useDispatch();
  const favorites = useSelector((s) => s.favorites.items);

  const isFav = favorites.includes(camper.id);

  return (
    <div className={styles.card}>
      <img src={camper.gallery?.[0]} className={styles.image} />

      <div className={styles.info}>
        <div className={styles.top}>
          <h3>{camper.name}</h3>
          <span>${Number(camper.price).toFixed(2)}</span>
        </div>

        <p className={styles.location}>{camper.location}</p>

        <button
          className={styles.button}
          onClick={() => dispatch(toggleFavorite(camper.id))}
        >
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}
