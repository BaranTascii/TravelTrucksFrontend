import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCampers,
  incrementPage,
} from "../../features/campers/campersSlice";

const Catalog = () => {
  const dispatch = useDispatch();
  const { items, page, isLoading } = useSelector((state) => state.campers);
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchCampers({ filters, page }));
  }, []);

  const loadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchCampers({ filters, page: page + 1 }));
  };

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <button onClick={loadMore}>Load More</button>
    </>
  );
};

export default Catalog;
