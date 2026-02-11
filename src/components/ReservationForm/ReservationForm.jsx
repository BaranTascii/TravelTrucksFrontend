import { useState } from "react";
import SuccessNotification from "../SuccessNotification/SuccessNotification";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    startDate: "",
    endDate: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsSuccess(true);

    setFormData({
      name: "",
      email: "",
      startDate: "",
      endDate: "",
    });

    setTimeout(() => setIsSuccess(false), 3000);
  }

  return (
    <div className="reservation-form">
      <h2>Book Your Camper</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
        />

        <button type="submit">Reserve</button>
      </form>

      {isSuccess && <SuccessNotification />}
    </div>
  );
}
