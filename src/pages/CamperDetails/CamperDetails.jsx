import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../features/campers/campersSlice";
import Loader from "../../components/Loader/Loader";

const CamperDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCamper, isLoading, error } = useSelector(
    (state) => state.campers,
  );

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (isLoading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!selectedCamper) return null;

  const { name, price, gallery, description, details, features } =
    selectedCamper;

  return (
    <section>
      <h1>{name}</h1>
      <p>{price.toFixed(2)} €</p>

      {/* Gallery */}
      <div>
        {gallery.map((img, index) => (
          <img key={index} src={img} alt={name} />
        ))}
      </div>

      <p>{description}</p>

      {/* Features */}
      <ul>
        {Object.entries(features).map(([key, value]) =>
          value ? <li key={key}>{key}</li> : null,
        )}
      </ul>

      {/* Details */}
      <ul>
        {Object.entries(details).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CamperDetails;
