import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { loader } from './components/loader';
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Page404 from "./pages/Page404";
import RentalDetailsPage from "./pages/RentalDetailsPage";
//import logements from "./data/logements.json";
import data from "./data/logements.json";
import GlobalError from "./components/GlobalError.jsx";


function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={GlobalError}>
        <Routes>
          <Route path="/" element={<HomePage data={data} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/rental/:id" element={<RentalDetailsPage data={data} />} loader={loader} errorElement={<ErrorBoundary />}  />
          <Route path="/404" element={<Page404 />} />
          {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclarer au dessus */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
