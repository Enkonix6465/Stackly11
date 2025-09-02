import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import logo1 from "../assets/logo1.png";

const Footer = ({ darkMode, bgColor }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer
      className={`w-full font-sans transition-colors duration-300 overflow-x-hidden border-t shadow-inner ${
        darkMode
          ? "bg-gradient-to-r from-[#181c2b] via-[#232946] to-[#1a2a3a] text-[#eebbc3] border-[#232946]"
          : "bg-gradient-to-r from-[#f8fafc] via-[#e0e7ef] to-[#f3f4f6] text-[#232946] border-[#e0e7ef]"
      } px-6 py-12`}
      style={!darkMode && bgColor ? { background: bgColor } : undefined}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo */}
        <div className="col-span-1 flex items-start">
          <div
            className=" "
          >
            <img
              src={logo1}
              alt="Vision Builders Logo"
              className="w-[200px]     "
            />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className={`text-base font-semibold mb-3 tracking-wide uppercase ${
              darkMode ? "text-[#eebbc3]" : "text-[#232946]"
            }`}
          >
            {t("QuickLinks")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/home"
                className={`${
                  darkMode
                    ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                    : "text-[#333333] hover:text-[#002346]"
                } hover:underline`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("Home")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${
                  darkMode
                    ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                    : "text-[#333333] hover:text-[#002346]"
                } hover:underline`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("About Us")}
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`${
                  darkMode
                    ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                    : "text-[#333333] hover:text-[#002346]"
                } hover:underline`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("Blog")}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${
                  darkMode
                    ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                    : "text-[#333333] hover:text-[#002346]"
                } hover:underline`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("Contact Us")}
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`${
                  darkMode
                    ? "text-[#F8F4E3] hover:text-[#F8F4E3]"
                    : "text-[#333333] hover:text-[#002346]"
                } hover:underline`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("Services")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Services (instead of Practice Areas) */}
        <div>
          <h4
            className={`text-base font-semibold mb-3 tracking-wide uppercase ${
              darkMode ? "text-[#eebbc3]" : "text-[#232946]"
            }`}
          >
            {t("Our Services")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/services/residential-projects"
                className={`${
                  darkMode ? "text-[#F8F4E3]" : "text-[#333333]"
                } hover:underline`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("Residential Projects")}
              </Link>
            </li>
            <li>
              <Link
                to="/services/commercial-complexes"
                className={`${
                  darkMode ? "text-[#F8F4E3]" : "text-[#333333]"
                } hover:underline`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("Commercial Complexes")}
              </Link>
            </li>
            <li>
              <Link
                to="/services/industrial-facilities"
                className={`${
                  darkMode ? "text-[#F8F4E3]" : "text-[#333333]"
                } hover:underline`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("Industrial Facilities")}
              </Link>
            </li>
            <li>
              <Link
                to="/services/interior-design"
                className={`${
                  darkMode ? "text-[#F8F4E3]" : "text-[#333333]"
                } hover:underline`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("Interior Design")}
              </Link>
            </li>
            <li>
              <Link
                to="/services/urban-planning"
                className={`${
                  darkMode ? "text-[#F8F4E3]" : "text-[#333333]"
                } hover:underline`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("Urban Planning")}
              </Link>
            </li>
            <li>
              <Link
                to="/services/renovation-restoration"
                className={`${
                  darkMode ? "text-[#F8F4E3]" : "text-[#333333]"
                } hover:underline`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("Renovation & Restoration")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4
            className={`text-base font-semibold mb-3 tracking-wide uppercase ${
              darkMode ? "text-[#eebbc3]" : "text-[#232946]"
            }`}
          >
            {t("Contact Us")}
          </h4>
          <p className="text-sm">
            <span
              className={`font-semibold ${
                darkMode ? "text-[#eebbc3]" : "text-[#232946]"
              } tracking-wide`}
            >
              {t("Address")}
            </span>{" "}
            <span className={darkMode ? "text-[#eebbc3]" : "text-[#232946]"}>
              {t("123 Skyline Avenue, Design City")}
            </span>
            <br />
            <span
              className={`font-semibold ${
                darkMode ? "text-[#eebbc3]" : "text-[#232946]"
              } tracking-wide`}
            >
              {t("Phone")}
            </span>{" "}
            <span className={darkMode ? "text-[#eebbc3]" : "text-[#232946]"}>
              {t("(123) 456-7890")}
            </span>
            <br />
            <span
              className={`font-semibold ${
                darkMode ? "text-[#eebbc3]" : "text-[#232946]"
              } tracking-wide`}
            >
              {t("Email")}
            </span>{" "}
            <span className={darkMode ? "text-[#eebbc3]" : "text-[#232946]"}>
              {t("info@visionbuilders.com")}
            </span>
            <br />
            <span
              className={`font-semibold ${
                darkMode ? "text-[#eebbc3]" : "text-[#232946]"
              } tracking-wide`}
            >
              {t("Hours")}
            </span>{" "}
            <span className={darkMode ? "text-[#eebbc3]" : "text-[#232946]"}>
              {t("Mon–Fri, 9 AM – 6 PM")}
            </span>
          </p>
          <div className="flex space-x-3 mt-2 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF color={darkMode ? "#eebbc3" : "#232946"} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn color={darkMode ? "#eebbc3" : "#232946"} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram color={darkMode ? "#eebbc3" : "#232946"} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter color={darkMode ? "#eebbc3" : "#232946"} />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4
            className={`text-base font-semibold mb-3 tracking-wide uppercase ${
              darkMode ? "text-[#eebbc3]" : "text-[#232946]"
            }`}
          >
            {t("Newsletter")}
          </h4>
          <p
            className={`text-sm mb-2 ${
              darkMode ? "text-[#eebbc3]" : "text-[#232946]"
            }`}
          >
            {t(
              "Stay updated with the latest trends in architecture and construction.",
            )}
          </p>
          <form className="flex flex-col" onSubmit={handleSubscribe}>
            <div className="flex">
              <input
                type="email"
                placeholder={t("Your email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3 py-2 rounded-l border text-sm ${
                  darkMode
                    ? "border-[#eebbc3] bg-[#232946] text-[#eebbc3]"
                    : "border-[#232946] bg-[#e0e7ef] text-[#232946]"
                } focus:outline-none focus:ring-2 focus:ring-[#eebbc3]`}
                required
              />
              <button
                type="submit"
                className={`px-4 py-2 rounded-r text-sm font-semibold shadow-md transition-colors duration-200 ${
                  darkMode
                    ? "bg-[#eebbc3] text-[#232946] hover:bg-[#313866] hover:text-white"
                    : "bg-[#232946] text-[#eebbc3] hover:bg-[#eebbc3] hover:text-[#232946]"
                } focus:outline-none focus:ring-2 focus:ring-[#eebbc3]`}
              >
                {t("Subscribe")}
              </button>
            </div>
            {subscribed && (
              <span
                className={`mt-2 text-xs font-semibold ${
                  darkMode ? "text-[#eebbc3]" : "text-[#232946]"
                }`}
              >
                {t("Subscribed!")}
              </span>
            )}
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`border-t mt-10 pt-4 text-center text-sm tracking-wide ${
          darkMode
            ? "border-[#313866] text-[#eebbc3]"
            : "border-[#e0e7ef] text-[#232946]"
        }`}
      >
        <p>© 2025 Vision Builders. {t("All rights reserved.")}</p>
      </div>
    </footer>
  );
};

export default Footer;
