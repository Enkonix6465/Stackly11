import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import "../i18n";

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
          ? "bg-gradient-to-br from-[#181c2b] via-[#232946] to-[#1a2a3a] text-[#eebbc3] border-[#232946]"
          : "bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f3f4f6] text-[#232946] border-[#e0e7ef]"
      } px-6 py-14 backdrop-blur-lg`}
      style={!darkMode && bgColor ? { background: bgColor } : undefined}
    >
      <div className=" mx-auto grid grid-cols-1 min-[1257px]:grid-cols-5 gap-12">
        {/* Logo */}
        <div className="col-span-1 flex items-start">
          <div className="rounded-xl bg-white/40 dark:bg-[#232946]/60 shadow-lg p-4 flex items-center justify-center">
            <img
              src={logo1}
              alt="Vision Builders Logo"
              className="w-[160px] drop-shadow-xl"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className={`text-lg font-bold mb-4 tracking-wide uppercase ${darkMode ? "text-[#eebbc3]" : "text-[#232946]"}`}
          >
            {t("QuickLinks")}
          </h4>
          <ul className="space-y-2 text-base">
            {[
              { to: "/home", label: t("Home") },
              { to: "/about", label: t("About Us") },
              { to: "/blog", label: t("Blog") },
              { to: "/contact", label: t("Contact Us") },
              { to: "/services", label: t("Services") },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`transition-colors duration-200 px-2 py-1 rounded-lg ${
                    darkMode
                      ? "text-[#F8F4E3] hover:bg-[#232946] hover:text-[#eebbc3]"
                      : "text-[#333333] hover:bg-[#e0e7ef] hover:text-[#002346]"
                  }`}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4
            className={`text-lg font-bold mb-4 tracking-wide uppercase ${darkMode ? "text-[#eebbc3]" : "text-[#232946]"}`}
          >
            {t("Our Services")}
          </h4>
          <ul className="space-y-2 text-base">
            {[
              {
                to: "/services/residential-projects",
                label: t("Residential Projects"),
              },
              {
                to: "/services/commercial-complexes",
                label: t("Commercial Complexes"),
              },
              {
                to: "/services/industrial-facilities",
                label: t("Industrial Facilities"),
              },
              { to: "/services/interior-design", label: t("Interior Design") },
              { to: "/services/urban-planning", label: t("Urban Planning") },
              {
                to: "/services/renovation-restoration",
                label: t("Renovation & Restoration"),
              },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`transition-colors duration-200 px-2 py-1 rounded-lg ${darkMode ? "text-[#F8F4E3] hover:bg-[#232946] hover:text-[#eebbc3]" : "text-[#333333] hover:bg-[#e0e7ef] hover:text-[#002346]"}`}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4
            className={`text-lg font-bold mb-4 tracking-wide uppercase ${darkMode ? "text-[#eebbc3]" : "text-[#232946]"}`}
          >
            {t("Contact Us")}
          </h4>
          <div className="space-y-2 text-base">
            <div>
              <span
                className={`font-bold ${darkMode ? "text-[#eebbc3]" : "text-[#232946]"}`}
              >
                {t("Address")}:{" "}
              </span>
              <span className={darkMode ? "text-[#eebbc3]" : "text-[#232946]"}>
                {t("123 Skyline Avenue, Design City")}
              </span>
            </div>
            <div>
              <span
                className={`font-bold ${darkMode ? "text-[#eebbc3]" : "text-[#232946]"}`}
              >
                {t("Phone")}:{" "}
              </span>
              <span className={darkMode ? "text-[#eebbc3]" : "text-[#232946]"}>
                {t("(123) 456-7890")}
              </span>
            </div>
            <div>
              <span
                className={`font-bold ${darkMode ? "text-[#eebbc3]" : "text-[#232946]"}`}
              >
                {t("Email")}:{" "}
              </span>
              <span className={darkMode ? "text-[#eebbc3]" : "text-[#232946]"}>
                {t("info@visionbuilders.com")}
              </span>
            </div>
            <div>
              <span
                className={`font-bold ${darkMode ? "text-[#eebbc3]" : "text-[#232946]"}`}
              >
                {t("Hours")}:{" "}
              </span>
              <span className={darkMode ? "text-[#eebbc3]" : "text-[#232946]"}>
                {t("Mon–Fri, 9 AM – 6 PM")}
              </span>
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-full bg-white/40 dark:bg-[#232946]/60 hover:scale-110 transition-transform shadow"
            >
              <FaFacebookF color={darkMode ? "#eebbc3" : "#232946"} size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-white/40 dark:bg-[#232946]/60 hover:scale-110 transition-transform shadow"
            >
              <FaLinkedinIn
                color={darkMode ? "#eebbc3" : "#232946"}
                size={20}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-white/40 dark:bg-[#232946]/60 hover:scale-110 transition-transform shadow"
            >
              <FaInstagram color={darkMode ? "#eebbc3" : "#232946"} size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-2 rounded-full bg-white/40 dark:bg-[#232946]/60 hover:scale-110 transition-transform shadow"
            >
              <FaTwitter color={darkMode ? "#eebbc3" : "#232946"} size={20} />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4
            className={`text-lg font-bold mb-4 tracking-wide uppercase ${darkMode ? "text-[#eebbc3]" : "text-[#232946]"}`}
          >
            {t("Newsletter")}
          </h4>
          <p
            className={`text-base mb-3 ${darkMode ? "text-[#eebbc3]" : "text-[#232946]"}`}
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
                className={`w-full px-4 py-2 rounded-l-lg border text-base ${
                  darkMode
                    ? "border-[#eebbc3] bg-[#232946] text-[#eebbc3] placeholder-[#eebbc3]/70"
                    : "border-[#232946] bg-[#e0e7ef] text-[#232946] placeholder-[#232946]/70"
                } focus:outline-none focus:ring-2 focus:ring-[#eebbc3]`}
                required
              />
              <button
                type="submit"
                className={`px-5 py-2 rounded-r-lg text-base font-bold shadow-md transition-colors duration-200 ${
                  darkMode
                    ? "bg-[#eebbc3] text-[#232946] hover:bg-[#313866] hover:text-white"
                    : "bg-[#232946] text-[#000000] hover:bg-[#eebbc3] hover:text-[#232946]"
                } focus:outline-none focus:ring-2 focus:ring-[#eebbc3]`}
              >
                {t("Subscribe")}
              </button>
            </div>
            {subscribed && (
              <span
                className={`mt-2 text-xs font-bold ${darkMode ? "text-[#eebbc3]" : "text-[#232946]"}`}
              >
                {t("Subscribed!")}
              </span>
            )}
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`border-t mt-12 pt-5 text-center text-base tracking-wide ${
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
