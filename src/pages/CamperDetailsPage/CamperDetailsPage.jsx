import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./CamperDetailsPage.module.css";
import Reviews from "../../components/Reviews/Reviews";
import BookingForm from "../../components/BookingForm/BookingForm";

function CamperDetailsPage() {
  const { id } = useParams();
  const camper = useSelector((state) =>
    state.campers.items.find((c) => c.id === id),
  );

  if (!camper) return null;

  return (
    <div className={styles.details}>
      <h2>{camper.name}</h2>
      <img src={camper.image} alt={camper.name} />
      <p>{camper.description}</p>
      <Reviews reviews={camper.reviews} />
      <BookingForm />
    </div>
  );
}

export default CamperDetailsPage;
