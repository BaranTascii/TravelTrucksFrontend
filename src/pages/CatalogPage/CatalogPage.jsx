import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers, nextPage } from "../../redux/campersSlice";
import CamperCard from "../../components/CamperCard/CamperCard";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import Loader from "../../components/Loader/Loader";
import styles from "./CatalogPage.module.css";

function CatalogPage() {
  const dispatch = useDispatch();
  const { items, hasMore, status } = useSelector((s) => s.campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <FilterSidebar />

      <div className={styles.content}>
        {items.map((c) => (
          <CamperCard key={c.id} camper={c} />
        ))}

        {status === "loading" && <Loader />}

        {hasMore && (
          <button
            onClick={() => {
              dispatch(nextPage());
              dispatch(fetchCampers());
            }}
            className={styles.loadMore}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default CatalogPage;
