import { useDispatch, useSelector } from "react-redux";
import { setLocation, setType, toggleFeature } from "../../redux/filtersSlice";
import { fetchCampers } from "../../redux/campersSlice";
import styles from "./FilterSidebar.module.css";

import locationIcon from "../../assets/icons/location.svg";
import acIcon from "../../assets/icons/ac.svg";
import kitchenIcon from "../../assets/icons/kitchen.svg";
import bathroomIcon from "../../assets/icons/bathroom.svg";

function FilterSidebar() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleSearch = () => {
    dispatch(fetchCampers());
  };

  return (
    <aside className={styles.sidebar}>
      <h3>Filters</h3>

      <div className={styles.field}>
        <img src={locationIcon} alt="location" />
        <input
          type="text"
          placeholder="Location"
          value={filters.location}
          onChange={(e) => dispatch(setLocation(e.target.value))}
        />
      </div>

      <div className={styles.field}>
        <label>
          <input
            type="radio"
            name="type"
            onChange={() => dispatch(setType("van"))}
          />
          Van
        </label>

        <label>
          <input
            type="radio"
            name="type"
            onChange={() => dispatch(setType("fullyIntegrated"))}
          />
          Fully Integrated
        </label>
      </div>

      <div className={styles.features}>
        <button onClick={() => dispatch(toggleFeature("AC"))}>
          <img src={acIcon} alt="AC" />
          AC
        </button>

        <button onClick={() => dispatch(toggleFeature("kitchen"))}>
          <img src={kitchenIcon} alt="Kitchen" />
          Kitchen
        </button>

        <button onClick={() => dispatch(toggleFeature("bathroom"))}>
          <img src={bathroomIcon} alt="Bathroom" />
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
