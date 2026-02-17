import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./CamperDetailsPage.module.css";

import Reviews from "../../components/Reviews/Reviews";
import BookingForm from "../../components/BookingForm/BookingForm";
import ratingIcon from "../../assets/icons/rating.svg";
import mapIcon from "../../assets/icons/map.svg";

export default function CamperDetailsPage() {
  const { id } = useParams();
  const camper = useSelector((state) =>
    state.campers.items.find((item) => item.id === id),
  );

  if (!camper) return <p>Not found</p>;

  return (
    <section className={styles.details}>
      <h2>{camper.name}</h2>

      <div className={styles.meta}>
        <span>
          <img src={ratingIcon} alt="rating" />
          {camper.rating}
        </span>

        <span>
          <img src={mapIcon} alt="location" />
          {camper.location}
        </span>
      </div>

      <p className={styles.price}>€{camper.price}</p>
      <p className={styles.description}>{camper.description}</p>

      <div className={styles.bottom}>
        <Reviews reviews={camper.reviews} />
        <BookingForm />
      </div>
    </section>
  );
}
