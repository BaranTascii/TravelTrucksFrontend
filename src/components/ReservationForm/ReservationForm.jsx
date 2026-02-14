import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createReservation,
  resetReservationState,
} from "../../features/reservations/reservationsSlice";
import SuccessNotification from "../SuccessNotification/SuccessNotification";

export default function ReservationForm({ camperId, camperName }) {
  const dispatch = useDispatch();
  const { isLoading, error, success } = useSelector(
    (state) => state.reservations
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    startDate: "",
    endDate: "",
  });

  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        dispatch(resetReservationState());
      }, 3000);
    }
  }, [success, dispatch]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError(""); // clear validation error on change
  }

  function validateDates() {
    const today = new Date().toISOString().split("T")[0];

    if (formData.startDate < today) {
      return "Start date cannot be in the past.";
    }

    if (formData.endDate <= formData.startDate) {
      return "End date must be after start date.";
    }

    return null;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const dateError = validateDates();
    if (dateError) {
      setFormError(dateError);
      return;
    }

    dispatch(
      createReservation({
        ...formData,
        camperId,
        camperName,
      })
    );

    setFormData({
      name: "",
      email: "",
      startDate: "",
      endDate: "",
    });
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <h2>Book {camperName}</h2>

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
          min={today}
          value={formData.startDate}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="endDate"
          min={formData.startDate || today}
          value={formData.endDate}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Processing..." : "Reserve"}
        </button>
      </form>

      {formError && <p style={{ color: "red" }}>{formError}</p>}
      {success && <SuccessNotification />}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
