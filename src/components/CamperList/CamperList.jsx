import CamperCard from "../CamperCard/CamperCard";
import styles from "./CamperList.module.css";

function CamperList() {
  return (
    <div className={styles.list}>
      <CamperCard />
      <CamperCard />
      <CamperCard />

      <button className={styles.loadMore}>Load More</button>
    </div>
  );
}

export default CamperList;
