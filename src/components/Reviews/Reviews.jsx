import styles from "./Reviews.module.css";

function Reviews() {
  return (
    <div className={styles.reviews}>
      <h3 className={styles.title}>Reviews</h3>

      <div className={styles.review}>
        <p className={styles.name}>John</p>
        <p className={styles.text}>Amazing camper! Everything was perfect.</p>
      </div>
    </div>
  );
}

export default Reviews;
