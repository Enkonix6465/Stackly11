/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";
import { useDarkMode } from "../context/DarkModeContext";
import "../i18n";

export default function Header() {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useDarkMode();
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesDropdown, setMobileServicesDropdown] = useState(false);
  const [initials, setInitials] = useState("");
  const [servicesTimeout, setServicesTimeout] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);

  // Language dropdown
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "en", label: t("English") },
    { code: "ar", label: t("Arabic") },
    { code: "he", label: t("Hebrew") },
  ];

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangDropdownOpen(false);
  };

  // Robust initials logic: always update on mount, menu open, and storage change
  useEffect(() => {
    const getInitials = () => {
      let currentUser = { firstName: "", lastName: "" };
      try {
        currentUser = JSON.parse(localStorage.getItem("currentUser")) || {
          firstName: "",
          lastName: "",
        };
      } catch (e) {}
      const first = currentUser.firstName?.trim?.()[0] || "";
      const last = currentUser.lastName?.trim?.()[0] || "";
      const initials = `${first}${last}`.toUpperCase();
      return initials || "U"; // fallback to 'U' for User
    };
    setInitials(getInitials());
    const handleStorage = () => setInitials(getInitials());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    const getInitials = () => {
      let currentUser = { firstName: "", lastName: "" };
      try {
        currentUser = JSON.parse(localStorage.getItem("currentUser")) || {
          firstName: "",
          lastName: "",
        };
      } catch (e) {}
      const first = currentUser.firstName?.trim?.()[0] || "";
      const last = currentUser.lastName?.trim?.()[0] || "";
      const initials = `${first}${last}`.toUpperCase();
      return initials || "U";
    };
    setInitials(getInitials());
  }, [isAvatarDropdownOpen, isMobileMenuOpen]);

  // Close avatar dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isAvatarDropdownOpen && !event.target.closest(".avatar-dropdown")) {
        setIsAvatarDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAvatarDropdownOpen]);

  // Use global darkMode and setDarkMode props for dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
      setServicesTimeout(null);
    }
    setServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesDropdown(false);
    }, 300); // 300ms delay before closing
    setServicesTimeout(timeout);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setHomeDropdown(false);
    setServicesDropdown(false);
    setMobileServicesDropdown(false);
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userLogins");
    // Navigate to welcome page
    navigate("/");
    // Close dropdown
    setIsAvatarDropdownOpen(false);
  };

  return (
    <header
      className={` sticky z-50 w-full shadow-lg transition-colors duration-300 border-b ${
        darkMode
          ? "bg-gradient-to-r from-[#181c2b] via-[#232946] to-[#1a2a3a] border-[#232946]"
          : "bg-gradient-to-r from-[#f8fafc] via-[#e0e7ef] to-[#f3f4f6] border-[#e0e7ef]"
      }`}
    >
      <div className="   mx-auto w-full py-2 flex items-center justify-between">
        {/* Logo - Left Side */}
        <div className="">
          <a href="/home" className="  ">
            <img src={logo} alt="LIFE Logo" className="w-[170px]    " />
          </a>
        </div>

        {/* Desktop Navigation - Right Side with Equal Gaps */}
        <nav className="hidden lg:flex items-center gap-4   ">
          {/* Language Dropdown */}

          <div className="relative">
            <button
              className={`text-base font-semibold flex items-center gap-1 px-4 py-2 rounded-lg focus:outline-none transition-all duration-200 border shadow-sm ${
                darkMode
                  ? "bg-[#232946] text-[#eebbc3] border-[#232946] hover:bg-[#313866] hover:text-[#eebbc3]"
                  : "bg-[#e0e7ef] text-[#232946] border-[#e0e7ef] hover:bg-[#c7d2fe] hover:text-[#232946]"
              }`}
              onClick={() => setHomeDropdown((open) => !open)}
            >
              {t("Home")}
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {homeDropdown && (
              <div
                className={`absolute left-0 mt-2 w-48 border rounded shadow-lg z-50 transition-colors duration-200 ${darkMode ? "bg-[#232946] border-[#313866]" : "bg-white border-[#e0e7ef]"}`}
              >
                <Link
                  to="/home"
                  className={`block px-4 py-3 text-base transition-colors duration-200 ${
                    darkMode
                      ? "text-[#eebbc3] hover:bg-[#313866] hover:text-[#eebbc3]"
                      : "text-[#232946] hover:bg-[#e0e7ef] hover:text-[#232946]"
                  }`}
                  onClick={() => {
                    setHomeDropdown(false);
                    scrollToTop();
                  }}
                >
                  {t("Home1")}
                </Link>
                <Link
                  to="/home2"
                  className={`block px-4 py-3 text-base transition-colors duration-200 ${
                    darkMode
                      ? "text-[#eebbc3] hover:bg-[#313866] hover:text-[#eebbc3]"
                      : "text-[#232946] hover:bg-[#e0e7ef] hover:text-[#232946]"
                  }`}
                  onClick={() => {
                    setHomeDropdown(false);
                    scrollToTop();
                  }}
                >
                  {t("Home2")}
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/about"
            className={`text-base font-semibold px-4 py-2 rounded-lg border shadow-sm transition-all duration-200 ${
              darkMode
                ? "bg-[#232946] text-[#eebbc3] border-[#232946] hover:bg-[#313866] hover:text-[#eebbc3]"
                : "bg-[#e0e7ef] text-[#232946] border-[#e0e7ef] hover:bg-[#c7d2fe] hover:text-[#232946]"
            }`}
            onClick={scrollToTop}
          >
            {t("About Us")}
          </Link>
          <div className="relative">
            <button
              className={`text-base font-semibold flex items-center gap-1 px-4 py-2 rounded-lg focus:outline-none transition-all duration-200 border shadow-sm ${
                darkMode
                  ? "bg-[#232946] text-[#eebbc3] border-[#232946] hover:bg-[#313866] hover:text-[#eebbc3]"
                  : "bg-[#e0e7ef] text-[#232946] border-[#e0e7ef] hover:bg-[#c7d2fe] hover:text-[#232946]"
              }`}
              onClick={() => {
                navigate("/services");
                scrollToTop();
              }}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
              onFocus={() => setServicesDropdown(true)}
              onBlur={() => setServicesDropdown(false)}
            >
              {t("Services")}
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {servicesDropdown && (
              <div
                className={`absolute left-0 mt-2 w-60 border rounded-xl shadow-xl z-50 transition-colors duration-200 ${
                  darkMode
                    ? "bg-[#232946] border-[#313866]"
                    : "bg-white border-[#e0e7ef]"
                }`}
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <div
                  className={`block px-4 py-2 text-base rounded-lg transition-colors duration-200 cursor-pointer border-b ${
                    darkMode
                      ? "text-[#eebbc3] hover:bg-[#313866] hover:text-[#eebbc3] border-[#313866]"
                      : "text-[#232946] hover:bg-[#e0e7ef] hover:text-[#232946] border-[#e0e7ef]"
                  }`}
                  onClick={() => {
                    setServicesDropdown(false);
                    navigate("/services");
                    scrollToTop();
                  }}
                >
                  {t("View All Services")}
                </div>
                <div
                  className={`block px-4 py-2 text-base rounded-lg transition-colors duration-200 cursor-pointer ${
                    darkMode
                      ? "text-[#eebbc3] hover:bg-[#313866] hover:text-[#eebbc3]"
                      : "text-[#232946] hover:bg-[#e0e7ef] hover:text-[#232946]"
                  }`}
                  onClick={() => {
                    setServicesDropdown(false);
                    navigate("/services/residential-projects");
                    scrollToTop();
                  }}
                >
                  {t("Residential Projects")}
                </div>
                <div
                  className={`block px-4 py-3 text-base transition-colors duration-200 cursor-pointer ${
                    darkMode
                      ? "text-[#eebbc3] hover:bg-[#313866] hover:text-[#eebbc3]"
                      : "text-[#232946] hover:bg-[#e0e7ef] hover:text-[#232946]"
                  }`}
                  onClick={() => {
                    setServicesDropdown(false);
                    navigate("/services/commercial-complexes");
                    scrollToTop();
                  }}
                >
                  {t("Commercial Complexes")}
                </div>
                <div
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${
                    darkMode
                      ? "text-white hover:bg-gray-700"
                      : "text-black hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setServicesDropdown(false);
                    navigate("/services/industrial-facilities");
                    scrollToTop();
                  }}
                >
                  {t("Industrial Facilities")}
                </div>
                <div
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${
                    darkMode
                      ? "text-white hover:bg-gray-700"
                      : "text-black hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setServicesDropdown(false);
                    navigate("/services/interior-design");
                    scrollToTop();
                  }}
                >
                  {t("Interior Design")}
                </div>
                <div
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${
                    darkMode
                      ? "text-white hover:bg-gray-700"
                      : "text-black hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setServicesDropdown(false);
                    navigate("/services/urban-planning");
                    scrollToTop();
                  }}
                >
                  {t("Urban Planning")}
                </div>
                <div
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${
                    darkMode
                      ? "text-white hover:bg-gray-700"
                      : "text-black hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setServicesDropdown(false);
                    navigate("/services/renovation-restoration");
                    scrollToTop();
                  }}
                >
                  {t("Renovation & Restoration")}
                </div>
              </div>
            )}
          </div>
          <Link
            to="/blog"
            className={`text-base font-semibold px-4 py-2 rounded-lg border shadow-sm transition-all duration-200 ${
              darkMode
                ? "bg-[#232946] text-[#eebbc3] border-[#232946] hover:bg-[#313866] hover:text-[#eebbc3]"
                : "bg-[#e0e7ef] text-[#232946] border-[#e0e7ef] hover:bg-[#c7d2fe] hover:text-[#232946]"
            }`}
            onClick={scrollToTop}
          >
            {t("Blog")}
          </Link>
          <Link
            to="/contact"
            className={`text-base font-semibold px-4 py-2 rounded-lg border shadow-sm transition-all duration-200 ${
              darkMode
                ? "bg-[#232946] text-[#eebbc3] border-[#232946] hover:bg-[#313866] hover:text-[#eebbc3]"
                : "bg-[#e0e7ef] text-[#232946] border-[#e0e7ef] hover:bg-[#c7d2fe] hover:text-[#232946]"
            }`}
            onClick={scrollToTop}
          >
            {t("Contact Us")}
          </Link>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full border-2 shadow-md transition-colors duration-200 ml-2 ${
              darkMode
                ? "bg-[#232946] border-[#eebbc3] text-[#eebbc3] hover:bg-[#313866] hover:text-white"
                : "bg-[#e0e7ef] border-[#232946] text-[#232946] hover:bg-[#c7d2fe] hover:text-[#1e293b]"
            }`}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? (
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Avatar with Dropdown */}
          <div className="relative  avatar-dropdown ml-4">
            <div
              onClick={() => setIsAvatarDropdownOpen(!isAvatarDropdownOpen)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base cursor-pointer border-2 shadow-md transition-all duration-200 ${
                darkMode
                  ? "bg-[#eebbc3] text-[#232946] border-[#eebbc3] hover:bg-[#232946] hover:text-[#eebbc3]"
                  : "bg-[#232946] text-[#eebbc3] border-[#232946] hover:bg-[#eebbc3] hover:text-[#232946]"
              }`}
            >
              {initials}
            </div>

            {/* Avatar Dropdown */}
            {isAvatarDropdownOpen && (
              <div
                className={`absolute right-0 mt-2 w-56 border rounded-xl shadow-xl z-50 ${
                  darkMode
                    ? "bg-[#232946] border-[#313866]"
                    : "bg-white border-[#e0e7ef]"
                }`}
              >
                <div className="py-2">
                  <div
                    className={`px-4 py-2 text-sm border-b ${
                      darkMode
                        ? "text-[#eebbc3] border-[#313866]"
                        : "text-[#232946] border-[#e0e7ef]"
                    }`}
                  >
                    <div className="font-medium">{t("User Profile")}</div>
                    <div
                      className={`text-xs ${
                        darkMode ? "text-[#eebbc3]" : "text-[#232946]"
                      }`}
                    >
                      Signed in
                    </div>
                  </div>
                  {/* Admin Dashboard Button */}
                  <button
                    onClick={() => {
                      setIsAvatarDropdownOpen(false);
                      navigate("/admin-dashboard");
                    }}
                    className={`w-full text-left px-4 py-2 text-sm rounded-lg flex items-center transition-colors duration-200 mb-1 ${
                      darkMode
                        ? "text-[#eebbc3] hover:bg-[#313866] hover:text-[#eebbc3]"
                        : "text-[#232946] hover:bg-[#e0e7ef] hover:text-[#232946]"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 3v4M8 3v4M4 11h16"
                      />
                    </svg>
                    {t("Admin Dashboard")}
                  </button>
                  <button
                    onClick={handleLogout}
                    className={`w-full text-left px-4 py-2 text-sm rounded-lg flex items-center transition-colors duration-200 ${
                      darkMode
                        ? "text-[#eebbc3] hover:bg-[#313866] hover:text-white"
                        : "text-[#232946] hover:bg-[#e0e7ef] hover:text-[#1e293b]"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    {t("Logout")}
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className=" relative">
            <button
              className={`text-base font-semibold flex items-center gap-1 px-4 py-2 rounded-lg focus:outline-none transition-all duration-200 shadow-sm border ${
                darkMode
                  ? "bg-[#232946] text-[#eebbc3] border-[#232946] hover:bg-[#313866] hover:text-[#fff]"
                  : "bg-[#e0e7ef] text-[#232946] border-[#e0e7ef] hover:bg-[#c7d2fe] hover:text-[#1e293b]"
              }`}
              onClick={() => setIsLangDropdownOpen((open) => !open)}
            >
              <Globe />
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isLangDropdownOpen && (
              <div
                className={`absolute left-0 mt-2 w-44 border rounded-xl shadow-xl z-50 transition-colors duration-200 ${
                  darkMode
                    ? "bg-[#232946] border-[#313866]"
                    : "bg-white border-[#e0e7ef]"
                }`}
              >
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={`block px-4 py-2 text-base rounded-lg transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-[#eebbc3] hover:bg-[#313866] hover:text-white"
                        : "text-[#232946] hover:bg-[#e0e7ef] hover:text-[#1e293b]"
                    }`}
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    {lang.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Dark Mode Toggle Button for Mobile */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full border-2 shadow-md transition-colors duration-200 ${
              darkMode
                ? "bg-[#232946] border-[#eebbc3] text-[#eebbc3] hover:bg-[#313866] hover:text-white"
                : "bg-[#e0e7ef] border-[#232946] text-[#232946] hover:bg-[#c7d2fe] hover:text-[#1e293b]"
            }`}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? (
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`p-2 rounded-full border-2 shadow-md transition-colors duration-200 ${
              darkMode
                ? "bg-[#eebbc3] border-[#232946] text-[#232946] hover:bg-[#232946] hover:text-[#eebbc3]"
                : "bg-[#232946] border-[#eebbc3] text-[#eebbc3] hover:bg-[#eebbc3] hover:text-[#232946]"
            }`}
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${
                darkMode ? "text-white" : "text-gray-600"
              } ${isMobileMenuOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden border-t ${
            darkMode
              ? "border-gray-700 bg-gray-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <div
            className={`px-4 py-6 space-y-4 max-h-[70vh] overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full ${
              darkMode
                ? "[&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-600"
                : ""
            }`}
          >
            {/* Language Dropdown for Mobile */}
            <div className="relative">
              <button
                className={`w-full text-left flex items-center justify-between py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                  darkMode
                    ? "bg-[#232946] text-[#eebbc3] hover:bg-[#313866] hover:text-white"
                    : "bg-[#e0e7ef] text-[#232946] hover:bg-[#c7d2fe] hover:text-[#1e293b]"
                }`}
                onClick={() => setIsLangDropdownOpen((open) => !open)}
              >
                <span>{t("Languages")}</span>
                <svg
                  className={`w-5 h-5 ml-1 transition-transform duration-200 ${isLangDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isLangDropdownOpen && (
                <div
                  className={`absolute left-0 mt-2 w-44 border rounded-xl shadow-xl z-50 transition-colors duration-200 ${
                    darkMode
                      ? "bg-[#232946] border-[#313866]"
                      : "bg-white border-[#e0e7ef]"
                  }`}
                  style={{ position: "relative" }}
                >
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className={`block px-4 py-2 text-base rounded-lg transition-colors duration-200 cursor-pointer ${
                        darkMode
                          ? "text-[#eebbc3] hover:bg-[#313866] hover:text-white"
                          : "text-[#232946] hover:bg-[#e0e7ef] hover:text-[#1e293b]"
                      }`}
                      onClick={() => handleLanguageChange(lang.code)}
                    >
                      {lang.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Home Dropdown */}
            <div>
              <button
                onClick={() => setHomeDropdown(!homeDropdown)}
                className={`w-full text-left flex items-center justify-between py-3 px-4 rounded-lg transition-colors duration-200`}
                style={
                  darkMode
                    ? { background: "#0F1524", color: "#F8F4E3" }
                    : { background: "#fff", color: "#333333" }
                }
              >
                <span className="font-semibold">{t("Home")}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    homeDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {homeDropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/home"
                    onClick={closeMobileMenu}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("Home1")}
                  </Link>
                  <Link
                    to="/home2"
                    onClick={closeMobileMenu}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("Home2")}
                  </Link>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className={`block py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                darkMode
                  ? "text-white hover:bg-gray-800"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              {t("About Us")}
            </Link>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() =>
                  setMobileServicesDropdown(!mobileServicesDropdown)
                }
                className={`w-full text-left flex items-center justify-between py-3 px-4 rounded-lg transition-colors duration-200`}
                style={
                  darkMode
                    ? { background: "#0F1524", color: "#F8F4E3" }
                    : { background: "#fff", color: "#333333" }
                }
              >
                <span className="font-semibold">{t("Services")}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    mobileServicesDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {mobileServicesDropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  <div
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/services");
                      scrollToTop();
                    }}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("View All Services")}
                  </div>
                  <div
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/services/residential-projects");
                      scrollToTop();
                    }}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("Residential Projects")}
                  </div>
                  <div
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/services/commercial-complexes");
                      scrollToTop();
                    }}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("Commercial Complexes")}
                  </div>
                  <div
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/services/industrial-facilities");
                      scrollToTop();
                    }}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("Industrial Facilities")}
                  </div>
                  <div
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/services/interior-design");
                      scrollToTop();
                    }}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("Interior Design")}
                  </div>
                  <div
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/services/urban-planning");
                      scrollToTop();
                    }}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("Urban Planning")}
                  </div>
                  <div
                    onClick={() => {
                      closeMobileMenu();
                      navigate("/services/renovation-restoration");
                      scrollToTop();
                    }}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t("Renovation & Restoration")}
                  </div>
                </div>
              )}
            </div>

            {/* Blog */}
            <Link
              to="/blog"
              onClick={closeMobileMenu}
              className={`block py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                darkMode
                  ? "text-white hover:bg-gray-800"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              {t("Blog")}
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={`block py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                darkMode
                  ? "text-white hover:bg-gray-800"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              {t("Contact Us")}
            </Link>

            {/* User Profile & Logout for Mobile */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 px-4">
                <span
                  className={`font-medium ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {t("User Profile")}
                </span>
                <div className="w-8 h-8 bg-[#26A0A2] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {initials}
                </div>
              </div>
              <button
                onClick={() => {
                  handleLogout();
                  closeMobileMenu();
                }}
                className={`w-full text-left px-4 py-3 mt-2 text-sm font-semibold rounded-lg transition-colors duration-200 flex items-center ${
                  darkMode
                    ? "text-white hover:bg-gray-800"
                    : "text-white hover:bg-gray-100"
                }`}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                {t("Logout")}
              </button>
            </div>

            {/* Bottom padding for scroll space */}
            <div className="pb-8"></div>
          </div>
        </div>
      )}
    </header>
  );
}
