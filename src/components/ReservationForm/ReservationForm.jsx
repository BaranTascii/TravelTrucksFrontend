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
    (state) => state.reservations,
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

  const today = new Date().toISOString().split("T")[0];

  function validateDates() {
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

    const error = validateDates();
    if (error) {
      setFormError(error);
      return;
    }

    dispatch(createReservation({ ...formData, camperId, camperName }));

    setFormData({
      name: "",
      email: "",
      startDate: "",
      endDate: "",
    });
  }

  return (
    <div>
      <h2>Book {camperName}</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          name="email"
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="date"
          min={today}
          name="startDate"
          required
          onChange={(e) =>
            setFormData({ ...formData, startDate: e.target.value })
          }
        />
        <input
          type="date"
          min={formData.startDate || today}
          name="endDate"
          required
          onChange={(e) =>
            setFormData({ ...formData, endDate: e.target.value })
          }
        />
        <button disabled={isLoading}>
          {isLoading ? "Processing..." : "Reserve"}
        </button>
      </form>

      {formError && <p style={{ color: "red" }}>{formError}</p>}
      {success && <SuccessNotification />}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
