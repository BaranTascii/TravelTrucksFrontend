import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Catalog from '../pages/Catalog/Catalog';
import CamperDetails from '../pages/CamperDetails/CamperDetails';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/camper-details/:id" element={<CamperDetails />} />
        </Routes>
    );
};

export default AppRouter;