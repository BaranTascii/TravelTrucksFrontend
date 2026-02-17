import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../store/fleetSlice";
import CamperCard from "../../components/CamperCard/CamperCard";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.fleet);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={`${s.layout} container`}>
      <div className={s.list}>
        {items && items.length > 0 ? (
          items.map((camper) => <CamperCard key={camper.id} camper={camper} />)
        ) : (
          <p>No campers found. Please check your API connection.</p>
        )}
      </div>
    </div>
  );
};
export default CatalogPage;
