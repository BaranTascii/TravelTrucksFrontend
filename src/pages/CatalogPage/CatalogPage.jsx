import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../store/fleetSlice";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import CamperCard from "../../components/CamperCard/CamperCard";
import Loader from "../../components/Loader/Loader";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const {
    items: campers,
    loading,
    error,
  } = useSelector((state) => state.fleet);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleLoadMore = () => {
    console.log(
      "Load more functionality to be implemented with backend pagination.",
    );
  };

  if (loading) return <Loader />;
  if (error) return <p className="container">Error: {error.message}</p>;
  if (!campers || campers.length === 0)
    return <p className="container">No campers found.</p>;

  return (
    <div className={`${s.catalogLayout} container`}>
      <FilterSidebar />
      <div className={s.camperList}>
        {campers.map((camper) => (
          <CamperCard key={camper._id} camper={camper} />
        ))}
      </div>
    </div>
  );
};
export default CatalogPage;
