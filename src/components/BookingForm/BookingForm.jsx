import { useState } from "react";
import styles from "./BookingForm.module.css";

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="date"
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <textarea
        placeholder="Comment"
        onChange={(e) => setForm({ ...form, comment: e.target.value })}
      />
      <button type="submit">Book</button>
    </form>
  );
}

export default BookingForm;
