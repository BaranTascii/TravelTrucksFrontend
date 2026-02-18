import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Features from "./components/Features/Features.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import Loader from "./components/Loader/Loader.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const CamperDetailPage = lazy(
  () => import("./pages/CamperDetailPage/CamperDetailPage.jsx"),
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id/" element={<CamperDetailPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="" element={<Features />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
