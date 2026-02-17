import styles from "./Reviews.module.css";
import starIcon from "../../assets/icons/star.svg";

function Reviews({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div className={styles.reviews}>
      <h3>Reviews</h3>

      {reviews.map((review, index) => (
        <div key={index} className={styles.reviewCard}>
          <div className={styles.header}>
            <strong>{review.reviewer_name}</strong>

            <div className={styles.rating}>
              {Array.from({ length: review.reviewer_rating }).map((_, i) => (
                <img key={i} src={starIcon} alt="star" />
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
