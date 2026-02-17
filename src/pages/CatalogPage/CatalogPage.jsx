import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import styles from "./CatalogPage.module.css";
import Loader from "../../components/Loader/Loader";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import CamperList from "../../components/CamperList/CamperList";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <FilterSidebar />

      <div className={styles.content}>
        {isLoading ? <Loader /> : <CamperList campers={items} />}
      </div>
    </div>
  );
}
