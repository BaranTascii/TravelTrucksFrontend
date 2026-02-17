import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/campersOperations";
import Header from "../../components/Header/Header";
import CamperCard from "../../components/CamperCard/CamperCard";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import Loader from "../../components/Loader/Loader";
import styles from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const { items, isLoading, page } = useSelector((s) => s.campers);

  useEffect(() => {
    dispatch(fetchCampers({ page }));
  }, [dispatch, page]);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <FilterSidebar />
        <div className={styles.list}>
          {items.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))}

          {isLoading && <Loader />}
        </div>
      </div>
    </>
  );
}
