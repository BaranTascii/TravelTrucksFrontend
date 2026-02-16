import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers, resetItems } from "../../redux/campersSlice";
import CamperCard from "../../components/CamperCard/CamperCard";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, loading, hasMore } = useSelector((state) => state.campers);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    dispatch(fetchCampers({ page, filters }));
  }, [dispatch, page, filters]);

  const handleSearch = (newFilters) => {
    dispatch(resetItems());
    setPage(1);
    setFilters(newFilters);
  };

  return (
    <div className={styles.pageLayout}>
      <aside className={styles.sidebarArea}>
        <FilterSidebar onSearch={handleSearch} />
      </aside>
      <main className={styles.mainContent}>
        <div className={styles.cardsList}>
          {items.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))}
        </div>
        {loading && <p className={styles.statusMsg}>Loading...</p>}
        {hasMore && !loading && (
          <button
            className={styles.loadMoreBtn}
            onClick={() => setPage((p) => p + 1)}
          >
            Load More
          </button>
        )}
      </main>
    </div>
  );
};

export default CatalogPage;
