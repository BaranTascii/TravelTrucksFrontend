import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../store/fleetSlice";
import s from "./FilterSidebar.module.css";

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [equipment, setEquipment] = useState([]);

  const handleEquipmentChange = (e) => {
    const { value, checked } = e.target;
    setEquipment((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value),
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filters = {
      location,
      form: vehicleType,
      details: equipment.join(","),
    };
    dispatch(fetchCampers(filters));
  };

  return (
    <aside className={s.sidebar}>
      <form onSubmit={handleSearch}>
        <div className={s.filterGroup}>
          <label htmlFor="location" className={s.filterLabel}>
            Location
          </label>
          <input
            type="text"
            id="location"
            className={s.textInput}
            placeholder="Kyiv, Ukraine"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className={s.filterGroup}>
          <p className={s.filterLabel}>Filters</p>
          <h4 className={s.filterCategoryTitle}>Vehicle type</h4>
          <div className={s.radioGroup}>
            <label className={s.radioLabel}>
              <input
                type="radio"
                name="vehicleType"
                value="panelTruck"
                onChange={() => setVehicleType("panelTruck")}
                checked={vehicleType === "panelTruck"}
              />
              Panel Truck
            </label>
            <label className={s.radioLabel}>
              <input
                type="radio"
                name="vehicleType"
                value="fullyIntegrated"
                onChange={() => setVehicleType("fullyIntegrated")}
                checked={vehicleType === "fullyIntegrated"}
              />
              Fully Integrated
            </label>
            <label className={s.radioLabel}>
              <input
                type="radio"
                name="vehicleType"
                value="alcove"
                onChange={() => setVehicleType("alcove")}
                checked={vehicleType === "alcove"}
              />
              Alcove
            </label>
          </div>
        </div>

        <div className={s.filterGroup}>
          <h4 className={s.filterCategoryTitle}>Vehicle Equipment</h4>
          <div className={s.checkboxGroup}>
            <label className={s.checkboxLabel}>
              <input
                type="checkbox"
                value="airConditioner"
                onChange={handleEquipmentChange}
                checked={equipment.includes("airConditioner")}
              />
              AC
            </label>
            <label className={s.checkboxLabel}>
              <input
                type="checkbox"
                value="kitchen"
                onChange={handleEquipmentChange}
                checked={equipment.includes("kitchen")}
              />
              Kitchen
            </label>
            <label className={s.checkboxLabel}>
              <input
                type="checkbox"
                value="tv"
                onChange={handleEquipmentChange}
                checked={equipment.includes("tv")}
              />
              TV
            </label>
            <label className={s.checkboxLabel}>
              <input
                type="checkbox"
                value="shower"
                onChange={handleEquipmentChange}
                checked={equipment.includes("shower")}
              />
              Shower
            </label>
          </div>
        </div>

        <button type="submit" className={s.searchBtn}>
          Search
        </button>
      </form>
    </aside>
  );
};
export default FilterSidebar;
