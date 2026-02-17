import styles from "./FilterSidebar.module.css";
import { useDispatch } from "react-redux";
import { setLocation, setType, toggleFeature } from "../../redux/filtersSlice";
import { fetchCampers, resetCampers } from "../../redux/campersSlice";

import mapIcon from "../../assets/icons/map.svg";
import windIcon from "../../assets/icons/wind.svg";
import kitchenIcon from "../../assets/icons/kitchen.svg";
import bathroomIcon from "../../assets/icons/bathroom.svg";
import vanIcon from "../../assets/icons/van.svg";
import fullyIcon from "../../assets/icons/fully.svg";
import alcoveIcon from "../../assets/icons/alcove.svg";

function FilterSidebar() {
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(resetCampers());
    dispatch(fetchCampers());
  };

  return (
    <aside className={styles.sidebar}>
      <h3>Filters</h3>

      <div className={styles.field}>
        <img src={mapIcon} alt="location" />
        <input
          type="text"
          placeholder="Location"
          onChange={(e) => dispatch(setLocation(e.target.value))}
        />
      </div>

      <div className={styles.types}>
        <button onClick={() => dispatch(setType("van"))}>
          <img src={vanIcon} alt="van" />
          Van
        </button>

        <button onClick={() => dispatch(setType("fully"))}>
          <img src={fullyIcon} alt="fully" />
          Fully Integrated
        </button>

        <button onClick={() => dispatch(setType("alcove"))}>
          <img src={alcoveIcon} alt="alcove" />
          Alcove
        </button>
      </div>

      <div className={styles.features}>
        <button onClick={() => dispatch(toggleFeature("wind"))}>
          <img src={windIcon} alt="wind" />
          AC
        </button>

        <button onClick={() => dispatch(toggleFeature("kitchen"))}>
          <img src={kitchenIcon} alt="kitchen" />
          Kitchen
        </button>

        <button onClick={() => dispatch(toggleFeature("bathroom"))}>
          <img src={bathroomIcon} alt="bathroom" />
          Bathroom
        </button>
      </div>

      <button onClick={handleSearch} className={styles.searchBtn}>
        Search
      </button>
    </aside>
  );
}

export default FilterSidebar;
