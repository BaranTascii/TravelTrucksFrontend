import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import BookingForm from "../../components/BookingForm/BookingForm";
import s from "./DetailsPage.module.css";

const DetailsPage = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("features");
  useEffect(() => {
    const fetchCamperDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`,
        );
        setCamper(response.data);
      } catch (err) {
        setError("Camper details could not be loaded.");
      } finally {
        setLoading(false);
      }
    };
    fetchCamperDetails();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div className="container">{error}</div>;

  return (
    <div className={`${s.detailsContainer} container`}>
      <header className={s.header}>
        <h1 className={s.title}>{camper.name}</h1>
        <div className={s.meta}>
          <span>
            ⭐ {camper.rating} ({camper.reviews.length} Reviews)
          </span>
          <span>📍 {camper.location}</span>
        </div>
        <p className={s.price}>€{camper.price.toFixed(2)}</p>
      </header>

      <div className={s.gallery}>
        {camper.gallery.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${camper.name} ${index}`}
            className={s.galleryImg}
          />
        ))}
      </div>

      <p className={s.description}>{camper.description}</p>

      <div className={s.tabs}>
        <button
          className={`${s.tabBtn} ${activeTab === "features" ? s.activeTab : ""}`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={`${s.tabBtn} ${activeTab === "reviews" ? s.activeTab : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={s.bottomSection}>
        <div className={s.infoArea}>
          {activeTab === "features" ? (
            <div className={s.featuresGrid}>
              <div className={s.badges}>
                {camper.AC && <span className={s.badge}>Air Conditioning</span>}
                {camper.bathroom && <span className={s.badge}>Bathroom</span>}
                {camper.kitchen && <span className={s.badge}>Kitchen</span>}
                {camper.TV && <span className={s.badge}>TV</span>}
              </div>
              <h3 className={s.subTitle}>Vehicle details</h3>
              <ul className={s.detailsList}>
                <li>
                  <span>Form:</span> <span>{camper.form}</span>
                </li>
                <li>
                  <span>Length:</span> <span>{camper.length}</span>
                </li>
                <li>
                  <span>Width:</span> <span>{camper.width}</span>
                </li>
                <li>
                  <span>Height:</span> <span>{camper.height}</span>
                </li>
                <li>
                  <span>Tank:</span> <span>{camper.tank}</span>
                </li>
                <li>
                  <span>Consumption:</span> <span>{camper.consumption}</span>
                </li>
              </ul>
            </div>
          ) : (
            <div className={s.reviewsList}>
              {camper.reviews.map((rev, idx) => (
                <div key={idx} className={s.reviewCard}>
                  <div className={s.reviewerHeader}>
                    <div className={s.avatar}>{rev.reviewer_name[0]}</div>
                    <div>
                      <p className={s.reviewerName}>{rev.reviewer_name}</p>
                      <p className={s.reviewerRating}>
                        {"⭐".repeat(rev.reviewer_rating)}
                      </p>
                    </div>
                  </div>
                  <p className={s.reviewComment}>{rev.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={s.formArea}>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
