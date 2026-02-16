import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../store/fleetSlice';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import CamperCard from '../../components/CamperCard/CamperCard';
import Loader from '../../components/Loader/Loader';
import s from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items = [], loading, error } = useSelector(state => state.fleet);

  useEffect(() => {
    dispatch(fetchCampers({}));
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <div className="container">Error: {error}</div>;

  return (
    <div className={`${s.catalogLayout} container`}>
      <FilterSidebar />
      <div className={s.camperList}>
        {Array.isArray(items) && items.length > 0 ? (
          items.map(camper => (
            <CamperCard key={camper.id || camper._id} camper={camper} />
          ))
        ) : (
          <p>No campers match your search criteria.</p>
        )}
        
        {items.length > 0 && (
           <button className={s.loadMoreBtn}>Load More</button>
        )}
      </div>
    </div>
  );
};
export default CatalogPage;