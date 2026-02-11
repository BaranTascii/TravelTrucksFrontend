import { useDispatch, useSelector } from "react-redux";
import {
  setLocation,
  setVehicleType,
  toggleFeature,
} from "../../features/filters/filtersSlice";
import {
  clearCampers,
  fetchCampers,
} from "../../features/campers/campersSlice";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const applyFilters = () => {
    dispatch(clearCampers());
    dispatch(fetchCampers({ filters, page: 1 }));
  };

  return (
    <div>
      <input
        placeholder="Location"
        onChange={(e) => dispatch(setLocation(e.target.value))}
      />

      <select onChange={(e) => dispatch(setVehicleType(e.target.value))}>
        <option value="">All</option>
        <option value="panelTruck">Panel Truck</option>
        <option value="fullyIntegred">Fully Integred</option>
      </select>

      <label>
        <input
          type="checkbox"
          onChange={() => dispatch(toggleFeature("airConditioner"))}
        />
        Air Conditioner
      </label>

      <button onClick={applyFilters}>Search</button>
    </div>
  );
};

export default FilterPanel;
