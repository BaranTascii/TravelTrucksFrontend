import styles from "./CamperCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favoritesSlice";
import { Link } from "react-router-dom";
import hearthIcon from "../../assets/icons/hearth.svg";

function CamperCard({ camper }) {
  const dispatch = useDispatch();
  const favorites = useSelector((s) => s.favorites.items);
  const isFavorite = favorites.includes(camper.id);

  return (
    <div className={styles.card}>
      <img src={camper.image} alt={camper.name} />

      <div>
        <h3>{camper.name}</h3>
        <p>{camper.price} €</p>

        <button onClick={() => dispatch(toggleFavorite(camper.id))}>
          <img
            src={hearthIcon}
            alt="favorite"
            style={{ opacity: isFavorite ? 1 : 0.4 }}
          />
        </button>

        <Link to={`/catalog/${camper.id}`}>Show More</Link>
      </div>
    </div>
  );
}

export default CamperCard;
