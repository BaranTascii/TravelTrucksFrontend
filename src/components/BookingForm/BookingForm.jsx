import { toast } from "react-toastify";
import styles from "./BookingForm.module.css";

const BookingForm = () => {
  const handleBooking = (e) => {
    e.preventDefault();
    toast.success("Reservation successfully submitted!");
    e.target.reset();
  };

  return (
    <div className={styles.formBox}>
      <h3 className={styles.formTitle}>Book your campervan now</h3>
      <p className={styles.formLead}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleBooking} className={styles.mainForm}>
        <input
          className={styles.field}
          type="text"
          placeholder="Name"
          required
        />
        <input
          className={styles.field}
          type="email"
          placeholder="Email"
          required
        />
        <input className={styles.field} type="date" required />
        <textarea
          className={styles.area}
          placeholder="Comment"
          rows="4"
        ></textarea>
        <button className={styles.submit} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
