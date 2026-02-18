import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import CamperList from "../../components/CamperList/CamperList";
import styles from "./CatalogPage.module.css";

function CatalogPage() {
  return (
    <div className={styles.catalogPage}>
      <div className={styles.container}>
        <FilterSidebar />
        <CamperList />
      </div>
    </div>
  );
}

export default CatalogPage;
