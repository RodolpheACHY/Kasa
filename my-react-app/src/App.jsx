import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Page404 from "./pages/Page404";
import RentalDetailsPage from "./pages/RentalDetailsPage";
import data from "./data/logements.json";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage data={data} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/rental/:id" element={<RentalDetailsPage data={data} />} />
          {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclarer au dessus */}
          <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
