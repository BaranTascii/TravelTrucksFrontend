import BookingForm from "../../components/BookingForm/BookingForm";
import Reviews from "../../components/Reviews/Reviews";
import styles from "./CamperDetailsPage.module.css";

function CamperDetailsPage() {
  return (
    <div className={styles.detailsPage}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>Road Bear C 23-25</h1>

          <div className={styles.meta}>
            <span>⭐ 4.4 (12 Reviews)</span>
            <span>📍 Kyiv, Ukraine</span>
          </div>

          <div className={styles.gallery}>
            <div className={styles.image}></div>
            <div className={styles.image}></div>
            <div className={styles.image}></div>
          </div>

          <p className={styles.description}>
            The pictures shown are examples. The actual vehicle may vary.
          </p>

          <Reviews />
        </div>

        <div className={styles.right}>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}

export default CamperDetailsPage;
