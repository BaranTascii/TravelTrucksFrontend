import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../store/fleetSlice";
import s from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) =>
    state.fleet.favorites.includes(camper._id),
  );

  const imageUrl =
    camper.gallery && camper.gallery.length > 0
      ? camper.gallery[0]
      : "https://via.placeholder.com/290x320?text=No+Image";

  const handleShowMore = () => {
    window.open(`/catalog/${camper._id}`, "_blank");
  };

  return (
    <article className={s.card}>
      <div className={s.imageWrapper}>
        <img src={imageUrl} alt={camper.name} className={s.image} />
      </div>
      <div className={s.content}>
        <div className={s.header}>
          <h2 className={s.title}>{camper.name}</h2>
          <div className={s.priceGroup}>
            <span className={s.price}>€{camper.price.toFixed(2)}</span>
            <button
              className={`${s.favBtn} ${isFavorite ? s.favBtnActive : ""}`}
              onClick={() => dispatch(toggleFavorite(camper._id))}
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
            >
              ❤️
            </button>
          </div>
        </div>
        <div className={s.ratingLocation}>
          <span className={s.rating}>
            ⭐ {camper.rating} ({camper.reviews.length} Reviews)
          </span>
          <span className={s.location}>📍 {camper.location}</span>
        </div>
        <p className={s.description}>{camper.description}</p>
        <button onClick={handleShowMore} className={s.showMoreBtn}>
          Show More
        </button>
      </div>
    </article>
  );
};
export default CamperCard;
