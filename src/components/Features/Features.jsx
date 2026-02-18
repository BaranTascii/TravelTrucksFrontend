import { useOutletContext } from "react-router-dom";
import VehaicleDetails from "../VehicleDetails/VehicleDetails.jsx";
import Categories from "../Categories/Categories.jsx";
import style from "./Features.module.css";
import { FORM } from "../../constants/constants.js";
import { addSpace } from "../../utils/utils.js";

const Features = () => {
  const camper = useOutletContext();
  const details = {
    Form: FORM[camper.form],
    Length: addSpace(camper.length),
    Width: addSpace(camper.width),
    Height: addSpace(camper.height),
    Tank: addSpace(camper.tank),
    Consumption: addSpace(camper.consumption, 2),
  };
  return (
    <section className={style.container}>
      <Categories camper={camper} />
      <VehaicleDetails details={details} />
    </section>
  );
};

export default Features;
