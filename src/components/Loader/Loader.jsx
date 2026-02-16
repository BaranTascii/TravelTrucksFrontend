import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loaderContainer}>
      <div className={s.spinner}></div>
      <p>Loading campers...</p>
    </div>
  );
};
export default Loader;
