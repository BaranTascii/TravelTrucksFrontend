import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCampers,
  incrementPage,
  resetCampers,
} from "../../features/campers/campersSlice";

const Catalog = () => {
  const dispatch = useDispatch();
  const { items, page, limit, loading } = useSelector((state) => state.campers);
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    const params = {
      page,
      limit,
      location: filters.location,
      vehicleType: filters.vehicleType,
      ...filters.features.reduce(
        (acc, feature) => ({ ...acc, [feature]: true }),
        {},
      ),
    };
    dispatch(fetchCampers(params));
  }, [dispatch, page, filters]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  const handleFilterChange = () => {
    dispatch(resetCampers());
  };

  return (
    <div>
      <h1>Catalog</h1>

      <button onClick={handleFilterChange}>Apply Filters</button>

      {items.map((camper) => (
        <div key={camper.id}>{camper.name}</div>
      ))}

      {loading && <p>Loading...</p>}

      {!loading && <button onClick={handleLoadMore}>Load More</button>}
    </div>
  );
};

export default Catalog;
