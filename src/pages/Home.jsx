import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import emilyDavis from "../assets/emilyDavis.png";
import home from "../assets/homeHero.mp4";
import janeDoe from "../assets/janeDoe.jpg";
import johnSmith from "../assets/johnSmith.jpg";
import kevinSpacey from "../assets/kevinSpacey.jpg";
import whyChoose from "../assets/whyChoose.jpg";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext";

// Strict color palette
const COLOR_1 = "#002346"; // deep blue
const COLOR_2 = "#F8F4E3"; // off-white
const COLOR_3 = "#333333"; // dark gray

const Home = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useDarkMode();
  const { t } = useTranslation();

  // Scroll to next section (Our Services)
  const handleExploreClick = () => {
    const nextSection = document.getElementById("practice-areas");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen transition duration-300"
      style={{
        overflowX: "hidden",
        background: darkMode ? COLOR_1 : COLOR_2,
        color: darkMode ? COLOR_2 : COLOR_3,
      }}
    >
      {/* Sticky header */}
      <div
        className="fixed top-0 left-0 w-full z-[100]"
        style={{
          background: darkMode ? COLOR_3 : COLOR_2,
          boxShadow: "0 2px 8px 0 rgba(51,51,51,0.08)",
        }}
      >
        <Header user={user} onLogout={onLogout} />
      </div>

      <main
        className="flex-grow mx-auto"
        style={{ color: darkMode ? COLOR_2 : COLOR_3 }}
      >
        {/* 1. Hero Section */}
        <section
          className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0"
          style={{ minHeight: "100vh", maxWidth: "100vw", background: COLOR_1 }}
        >
          {/* Background Video */}
          <video
            autoPlay
            loop
            loading="lazy"
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{
              minHeight: "100vh",
              minWidth: "100vw",
              objectFit: "cover",
            }}
          >
            <source src={home} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <h1
              className="text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-xl tracking-tight text-center"
              style={{ color: COLOR_2, letterSpacing: "-2px" }}
            >
              {t("Building Tomorrow, Today")}
            </h1>
            <p
              className="text-2xl max-w-2xl mx-auto mb-10 drop-shadow-lg text-center font-medium"
              style={{ color: COLOR_2 }}
            >
              {t(
                "Your trusted partner in construction and architecture — delivering innovative designs, sustainable solutions, and projects that stand the test of time.",
              )}
            </p>
            <button
              className="px-10 py-4 rounded-full transition drop-shadow-xl mt-4 font-bold text-lg shadow-lg hover:scale-105 hover:bg-[#eebbc3] hover:text-[#232946] duration-200"
              style={{
                background: COLOR_3,
                color: COLOR_2,
                border: `2px solid ${COLOR_2}`,
              }}
              onClick={handleExploreClick}
            >
              {t("Explore our services")}
            </button>
          </div>
        </section>

        {/* 2. Services Section */}
        <section
          id="practice-areas"
          className={`px-4 py-16 md:px-12 lg:px-24 ${darkMode ? "bg-gradient-to-br from-[#181c2a] to-[#232946]" : "bg-gradient-to-br from-[#232946] to-[#002346]"}`}
        >
          <h2
            className="text-5xl text-center font-extrabold mb-14 tracking-tight drop-shadow-xl"
            style={{
              color: darkMode ? COLOR_2 : COLOR_2,
              letterSpacing: "-1.5px",
            }}
          >
            {t("Our Expertise")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                key: "Residential Projects",
                desc: t(
                  "High-quality design and construction services tailored for residential projects.",
                ),
                icon: (
                  <svg
                    className="w-12 h-12 mb-4  "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 12l9-7 9 7v7a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
              {
                key: "Commercial Complexes",
                desc: t(
                  "High-quality design and construction services tailored for commercial complexes.",
                ),
                icon: (
                  <svg
                    className="w-12 h-12 mb-4 "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="7" width="7" height="13" rx="2" />
                    <rect x="14" y="3" width="7" height="17" rx="2" />
                  </svg>
                ),
              },
              {
                key: "Industrial Facilities",
                desc: t(
                  "High-quality design and construction services tailored for industrial facilities.",
                ),
                icon: (
                  <svg
                    className="w-12 h-12 mb-4 "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2 21V9l7-4v4l7-4v16" />
                    <rect x="17" y="13" width="5" height="8" rx="1" />
                  </svg>
                ),
              },
              {
                key: "Interior Design",
                desc: t(
                  "High-quality design and construction services tailored for interior design.",
                ),
                icon: (
                  <svg
                    className="w-12 h-12 mb-4 "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                  </svg>
                ),
              },
              {
                key: "Urban Planning",
                desc: t(
                  "High-quality design and construction services tailored for urban planning.",
                ),
                icon: (
                  <svg
                    className="w-12 h-12 mb-4 "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2v20" />
                  </svg>
                ),
              },
              {
                key: "Renovation & Restoration",
                desc: t(
                  "High-quality design and construction services tailored for renovation and restoration.",
                ),
                icon: (
                  <svg
                    className="w-12 h-12 mb-4 "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4v5h.582a2 2 0 011.789 1.106l2.858 5.716a2 2 0 001.789 1.106H20v5" />
                    <path d="M20 4v16" />
                  </svg>
                ),
              },
            ].map(({ key, desc, icon }) => (
              <button
                onClick={() =>
                  navigate(`/services/${key.toLowerCase().replace(/ /g, "-")}`)
                }
                key={key}
                className={`relative group p-10 rounded-3xl border-0 shadow-2xl flex flex-col items-center transition-all duration-300 overflow-hidden hover:scale-105 hover:shadow-3xl focus:outline-none ${darkMode ? "bg-gradient-to-br from-[#232946]/80 to-[#181c2a]/80" : "bg-gradient-to-br from-[#eebbc3]/30 to-[#f8fafc]/10"}`}
                style={{ minHeight: 280 }}
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 ${darkMode ? "bg-[#eebbc3]/10" : "bg-[#eebbc3]/20"}`}
                />
                <div className="relative z-10 flex flex-col items-center">
                  {icon}
                  <h3
                    className={`text-2xl font-bold mb-3 drop-shadow-lg ${darkMode ? "text-[#eebbc3]" : "text-[#232946]"}`}
                  >
                    {t(key)}
                  </h3>
                  <p
                    className={`text-base text-center font-medium drop-shadow-sm ${darkMode ? "text-[#f8f4e3]/90" : "text-[#000]"}`}
                  >
                    {desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* 3. About Section */}
        <section
          className={`py-16 px-4 md:px-12 lg:px-32 flex flex-col md:flex-row items-center justify-center ${darkMode ? "bg-gradient-to-br from-[#181c2a] to-[#232946]" : "bg-gradient-to-br from-[#e0e7ef] to-[#f8fafc]"}`}
        >
          {/* Card Container */}
          <div
            className={`w-full flex flex-col md:flex-row items-center rounded-3xl shadow-2xl overflow-hidden border-0 ${darkMode ? "bg-[#232946]/90" : "bg-white/90"}`}
          >
            {/* Left: Image with overlay icon */}
            <div
              className={`w-full md:w-1/2 flex justify-center items-center relative min-h-[280px] ${darkMode ? "bg-gradient-to-br from-[#232946]/60 to-[#181c2a]/60" : "bg-gradient-to-br from-[#eebbc3]/40 to-[#232946]/10"}`}
            >
              <img
                src={whyChoose}
                alt="Architecture Office"
                className="rounded-2xl shadow-xl object-cover m-8 border-4 border-[#eebbc3]"
                style={{ width: "340px", height: "220px" }}
              />
              <div className="absolute top-6 left-6 bg-[#eebbc3] rounded-full p-3 shadow-lg">
                <svg
                  className="w-8 h-8 text-[#232946]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l4 4-4 4-4-4 4-4zm0 8v12" />
                </svg>
              </div>
            </div>
            {/* Right: Content */}
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center p-8">
              <h2
                className="text-4xl font-extrabold mb-6 tracking-tight drop-shadow-xl"
                style={{
                  color: darkMode ? "#eebbc3" : "#232946",
                  letterSpacing: "-1px",
                }}
              >
                {t("About Our Firm")}
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#eebbc3]">•</span>
                  <span
                    className={`text-lg font-medium ${darkMode ? "text-[#f8f4e3]" : "text-[#232946]"}`}
                  >
                    {t(
                      "Established in 1997, with 2,500+ projects completed globally.",
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#eebbc3]">•</span>
                  <span
                    className={`text-lg font-medium ${darkMode ? "text-[#f8f4e3]" : "text-[#232946]"}`}
                  >
                    {t("Award-winning design and engineering teams.")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#eebbc3]">•</span>
                  <span
                    className={`text-lg font-medium ${darkMode ? "text-[#f8f4e3]" : "text-[#232946]"}`}
                  >
                    {t(
                      "Specialized in sustainable and innovative architecture.",
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#eebbc3]">•</span>
                  <span
                    className={`text-lg font-medium ${darkMode ? "text-[#f8f4e3]" : "text-[#232946]"}`}
                  >
                    {t(
                      "Trusted by clients ranging from homeowners to multinational corporations.",
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#eebbc3]">•</span>
                  <span
                    className={`text-lg font-medium ${darkMode ? "text-[#f8f4e3]" : "text-[#232946]"}`}
                  >
                    {t(
                      "Dedicated to transforming communities through responsible construction.",
                    )}
                  </span>
                </li>
              </ul>
              <button
                className={`px-10 py-4 rounded-full transition drop-shadow-xl font-bold text-lg shadow-lg hover:scale-105 hover:bg-[#eebbc3] hover:text-[#232946] duration-200 border-2 border-[#eebbc3] ${darkMode ? "bg-[#0a0d1c] text-[#000000]" : "bg-[#232946]  "}`}
                onClick={() => navigate("/about")}
              >
                {t("Learn More About Us")}
              </button>
            </div>
          </div>
        </section>

        {/* 4. Meet The Team */}
        <section
          className={`py-16 px-4 md:px-12 lg:px-24 ${darkMode ? "bg-gradient-to-br from-[#181c2a] to-[#232946]" : "bg-gradient-to-br from-[#232946] to-[#313866]"}`}
        >
          <h2
            className="text-5xl text-center font-extrabold mb-14 tracking-tight drop-shadow-xl"
            style={{
              color: darkMode ? "#eebbc3" : COLOR_2,
              letterSpacing: "-1.5px",
            }}
          >
            {t("Meet Our Architects & Engineers")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { name: t("Jane Doe"), title: t("Lead Architect"), img: janeDoe },
              {
                name: t("John Smith"),
                title: t("Structural Engineer"),
                img: johnSmith,
              },
              {
                name: t("Emily Davis"),
                title: t("Interior Designer"),
                img: emilyDavis,
              },
              {
                name: t("Kevin Spacey"),
                title: t("Project Manager"),
                img: kevinSpacey,
              },
            ].map(({ name, title, img }) => (
              <div
                key={name}
                className={`relative flex flex-col items-center rounded-3xl shadow-2xl p-0 pt-8 pb-6 transition-all duration-300 hover:scale-105 hover:shadow-3xl group overflow-hidden ${darkMode ? "bg-[#232946]/90" : "bg-white/90"}`}
              // style={{ minHeight: 340 }}
              >
                <div className="relative flex flex-col items-center w-full">
                  <div
                    className={`w-28 h-28 rounded-full overflow-hidden border-4 border-[#eebbc3] shadow-lg mb-4 ${darkMode ? "bg-gradient-to-br from-[#232946]/60 to-[#181c2a]/60" : "bg-gradient-to-br from-[#eebbc3]/40 to-[#232946]/10"}`}
                  >
                    <img
                      src={img}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-110 object-top transition-transform duration-300"
                    />
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-1 drop-shadow-lg ${darkMode ? "text-[#eebbc3]" : "text-[#232946]"}`}
                  >
                    {name}
                  </h3>
                  <p
                    className={`text-base font-medium mb-2 drop-shadow ${darkMode ? "text-[#f8f4e3]" : "text-[#000]"}`}
                  >
                    {title}
                  </p>

                </div>

              </div>
            ))}
          </div>
        </section>

        {/* 5. Reliability Section */}
        <section
          className="py-16 px-6 flex flex-col items-center"
          style={{ background: darkMode ? "#002346" : "#F8F4E3" }}
        >
          <h2
            className="text-4xl font-extrabold mb-6 text-center tracking-tight"
            style={{
              color: darkMode ? "#fff" : "#002346",
              letterSpacing: "-1px",
            }}
          >
            {t("A Construction Partner You Can Trust")}
          </h2>
          <p
            className="text-xl mb-10 max-w-3xl text-center font-medium"
            style={{ color: darkMode ? "#fff" : "#333333" }}
          >
            {t(
              "We go beyond blueprints and concrete. Our commitment to reliability, transparency, and innovation ensures every project is completed on time, within budget, and with uncompromising quality.",
            )}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl">
            <div
              className="rounded-xl p-8 shadow-lg bg-white"
              style={{ color: "#002346" }}
            >
              <div
                className="text-4xl font-extrabold mb-2 tracking-tight"
                style={{ color: "#232946" }}
              >
                92%
              </div>
              <div className="font-medium text-base text-[#232946]">
                {t("Client satisfaction rate")}
                <br />
                {t("across residential & commercial projects.")}
              </div>
            </div>
            <div
              className="rounded-xl p-8 shadow-lg bg-white"
              style={{ color: "#002346" }}
            >
              <div
                className="text-4xl font-extrabold mb-2 tracking-tight"
                style={{ color: "#232946" }}
              >
                98%
              </div>
              <div className="font-medium text-base text-[#232946]">
                {t("Projects delivered")}
                <br />
                {t("within scheduled timelines.")}
              </div>
            </div>
            <div
              className="rounded-xl p-8 shadow-lg bg-white"
              style={{ color: "#002346" }}
            >
              <div
                className="text-4xl font-extrabold mb-2 tracking-tight"
                style={{ color: "#232946" }}
              >
                24/7
              </div>
              <div className="font-medium text-base text-[#232946]">
                {t("Dedicated project support")}
                <br />
                {t("and client communication.")}
              </div>
            </div>
            <div
              className="rounded-xl p-8 shadow-lg bg-white"
              style={{ color: "#002346" }}
            >
              <div
                className="text-4xl font-extrabold mb-2 tracking-tight"
                style={{ color: "#232946" }}
              >
                150+
              </div>
              <div className="font-medium text-base text-[#232946]">
                {t("Architects & engineers")}
                <br />
                {t("with proven track records.")}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Contact Section */}
        <section
          className={`py-20 flex justify-center items-center ${darkMode ? "bg-gradient-to-br from-[#181c2a] to-[#232946]" : "bg-gradient-to-br from-[#232946] to-[#eebbc3]"}`}
        >
          <div
            className={`w-full max-w-2xl mx-auto rounded-3xl shadow-2xl p-12 flex flex-col items-center ${darkMode ? "bg-[#232946]/90" : "bg-white/90"}`}
          >
            <h2
              className="text-4xl font-extrabold mb-8 tracking-tight drop-shadow-xl text-center"
              style={{
                color: darkMode ? "#eebbc3" : COLOR_1,
                letterSpacing: "-1px",
              }}
            >
              {t("Ready to Start Your Project?")}
            </h2>
            <p
              className={`max-w-xl mx-auto mb-10 text-lg font-medium text-center ${darkMode ? "text-[#f8f4e3]" : "text-[#232946]"}`}
            >
              {t(
                "Contact us today to discuss your vision, and let’s bring it to life with expert design and construction.",
              )}
            </p>
            <button
              className={`px-10 py-4 rounded-full transition font-bold text-lg shadow-lg hover:scale-105 hover:bg-[#eebbc3] hover:text-[#232946] duration-200 border-2 border-[#eebbc3] ${darkMode ? "bg-[#232946] text-[#eebbc3]" : "bg-[#232946] text-[#000000]"}`}
              onClick={() => navigate("/home2#consultation-form")}
            >
              {t("Book a consultation")}
            </button>
          </div>
        </section>
      </main>

      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Home;
