import React from "react";
import { DarkModeProvider } from "./context/DarkModeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import UrbanPlanning from "./services/UrbanPlanning";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import IndustrialFacilities from "./services/IndustrialFacilities";
import CommercialComplexes from "./services/CommercialComplexes";
import ResidentialProjects from "./services/ResidentialProjects";
import InteriorDesign from "./services/InteriorDesign";
import RenovationRestoration from "./services/RenovationRestoration";
import Services from "./services/Services";
import AboutUs from "./pages/AboutUs";
import { useTranslation } from "react-i18next";
import AdminDashboard from "./pages/AdminDashboard";
import Home2 from "./pages/Home2";
import PlanningResidentialProject from "./pages/PlanningResidentialProject";
import ModernArchitecture from "./pages/ModernArchitecture";
import Renovation from "./pages/Renovation";

function App() {
  // You may want to keep user state here if needed
  const [user, setUser] = React.useState(null);
  const { i18n } = useTranslation();

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };
  // Determine direction based on language
  const lang = i18n.language;
  const dir = lang === "ar" || lang === "he" ? "rtl" : "ltr";

  React.useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
  }, [dir]);

  return (
    <div dir={dir}>
      <DarkModeProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
            <Route
              path="/home"
              element={<HomePage user={user} onLogout={handleLogout} />}
            />
            <Route
              path="/services/urban-planning"
              element={<UrbanPlanning user={user} onLogout={handleLogout} />}
            />
            <Route
              path="/blog"
              element={<Blog user={user} onLogout={handleLogout} />}
            />
            <Route
              path="/contact"
              element={<ContactUs user={user} onLogout={handleLogout} />}
            />
            <Route
              path="/services/industrial-facilities"
              element={
                <IndustrialFacilities user={user} onLogout={handleLogout} />
              }
            />
            <Route
              path="/services/commercial-complexes"
              element={
                <CommercialComplexes user={user} onLogout={handleLogout} />
              }
            />
            <Route
              path="/services/residential-projects"
              element={
                <ResidentialProjects user={user} onLogout={handleLogout} />
              }
            />
            <Route
              path="/services/interior-design"
              element={<InteriorDesign user={user} onLogout={handleLogout} />}
            />
            <Route
              path="/services"
              element={<Services user={user} onLogout={handleLogout} />}
            />
            <Route
              path="/services/renovation-restoration"
              element={
                <RenovationRestoration user={user} onLogout={handleLogout} />
              }
            />
            <Route
              path="/about"
              element={<AboutUs user={user} onLogout={handleLogout} />}
            />
            <Route
              path="/admin-dashboard"
              element={<AdminDashboard user={user} onLogout={handleLogout} />}
            />
            <Route
              path="/home2"
              element={<Home2 user={user} onLogout={handleLogout} />}
            />
            <Route
              path="/blog/2025-design-trends-modern-architecture"
              element={
                <ModernArchitecture user={user} onLogout={handleLogout} />
              }
            />
            <Route
              path="/blog/renovating-for-sustainability"
              element={<Renovation user={user} onLogout={handleLogout} />}
            />
            <Route
              path="/blog/planning-residential-project"
              element={
                <PlanningResidentialProject
                  user={user}
                  onLogout={handleLogout}
                />
              }
            />
          </Routes>
        </Router>
      </DarkModeProvider>
    </div>
  );
}

export default App;
