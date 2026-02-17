import styles from "./CamperCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favoritesSlice";
import heartIcon from "../../assets/icons/heart.svg";
import filledHeart from "../../assets/icons/heart-filled.svg";
import { Link } from "react-router-dom";

function CamperCard({ camper }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const isFavorite = favorites.includes(camper.id);

  return (
    <div className={styles.card}>
      <img src={camper.image} alt={camper.name} />
      <div>
        <h3>{camper.name}</h3>
        <p>{camper.price} €</p>

        <button onClick={() => dispatch(toggleFavorite(camper.id))}>
          <img src={isFavorite ? filledHeart : heartIcon} alt="favorite" />
        </button>

        <Link to={`/catalog/${camper.id}`}>Show More</Link>
      </div>
    </div>
  );
}

export default CamperCard;
