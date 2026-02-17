import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Reviews from "../../components/Reviews/Reviews";
import BookingForm from "../../components/BookingForm/BookingForm";
import styles from "./CamperDetailsPage.module.css";

function CamperDetailsPage() {
  const { id } = useParams();
  const camper = useSelector((s) => s.campers.items.find((c) => c.id === id));

  if (!camper) return <p>Loading...</p>;

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
