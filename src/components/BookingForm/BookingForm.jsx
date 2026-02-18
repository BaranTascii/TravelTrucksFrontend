import styles from "./BookingForm.module.css";

function BookingForm() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Book your camper now</h3>

      <input className={styles.input} placeholder="Name*" />
      <input className={styles.input} placeholder="Email*" />
      <input className={styles.input} type="date" />

      <textarea className={styles.textarea} placeholder="Comment"></textarea>

      <button className={styles.button}>Send</button>
    </div>
  );
}

export default BookingForm;
