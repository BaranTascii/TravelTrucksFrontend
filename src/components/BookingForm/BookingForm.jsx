import s from "./BookingForm.module.css";

const BookingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your booking! We will contact you shortly.");
    e.target.reset();
  };

  return (
    <div className={s.formWrapper}>
      <h3 className={s.formTitle}>Book your campervan now</h3>
      <p className={s.formSubtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={handleSubmit} className={s.bookingForm}>
        <input
          type="text"
          placeholder="Name*"
          required
          className={s.inputField}
        />
        <input
          type="email"
          placeholder="Email*"
          required
          className={s.inputField}
        />
        <input
          type="date"
          placeholder="Booking date*"
          required
          className={s.inputField}
        />
        <textarea placeholder="Comment" className={s.textareaField}></textarea>
        <button type="submit" className={s.submitButton}>
          Send
        </button>
      </form>
    </div>
  );
};
export default BookingForm;
