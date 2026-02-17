import styles from "./Reviews.module.css";
import ratingIcon from "../../assets/icons/rating.svg";

function Reviews({ reviews }) {
  if (!reviews?.length) return null;

  return (
    <div className={styles.reviews}>
      <h3>Reviews</h3>

      {reviews.map((review, index) => (
        <div key={index} className={styles.reviewCard}>
          <div className={styles.header}>
            <strong>{review.reviewer_name}</strong>

            <div className={styles.rating}>
              {Array.from({
                length: review.reviewer_rating,
              }).map((_, i) => (
                <img key={i} src={ratingIcon} alt="rating" />
              ))}
            </div>
          </div>

          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
