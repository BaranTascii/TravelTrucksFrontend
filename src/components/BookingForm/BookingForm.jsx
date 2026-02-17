import { useState } from "react";
import styles from "./BookingForm.module.css";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Book your camper now</h3>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        required
      />

      <textarea
        name="comment"
        placeholder="Comment"
        value={form.comment}
        onChange={handleChange}
      />

      <button type="submit">Send</button>
    </form>
  );
}
