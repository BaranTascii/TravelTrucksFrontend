import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/campersSlice";
import { Link } from "react-router-dom";
import styles from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) =>
    state.campers.favorites.includes(camper.id),
  );

  return (
    <div className={styles.cardContainer}>
      <img
        src={camper.gallery[0].original}
        alt={camper.name}
        className={styles.thumbnail}
      />
      <div className={styles.detailsContent}>
        <div className={styles.cardHeader}>
          <h2 className={styles.camperTitle}>{camper.name}</h2>
          <div className={styles.priceSection}>
            <span className={styles.priceText}>€{camper.price.toFixed(2)}</span>
            <button
              className={isFavorite ? styles.favBtnActive : styles.favBtn}
              onClick={() => dispatch(toggleFavorite(camper.id))}
            >
              {isFavorite ? "❤️" : "🤍"}
            </button>
          </div>
        </div>

        <div className={styles.ratingLocation}>
          <span className={styles.ratingText}>
            ⭐ {camper.rating} ({camper.reviews.length} Reviews)
          </span>
          <span className={styles.locationText}>📍 {camper.location}</span>
        </div>

        <p className={styles.summaryText}>{camper.description}</p>

        <div className={styles.featureTags}>
          {camper.AC && <span className={styles.tag}>AC</span>}
          {camper.kitchen && <span className={styles.tag}>Kitchen</span>}
          <span className={styles.tag}>{camper.transmission}</span>
        </div>

        <Link
          to={`/catalog/${camper.id}`}
          target="_blank"
          className={styles.actionBtn}
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
