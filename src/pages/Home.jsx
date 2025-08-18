import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import home from "../assets/homeHero.mp4";
import whyChoose from "../assets/whyChoose.jpg";
import janeDoe from "../assets/janeDoe.jpg";
import johnSmith from "../assets/johnSmith.jpg";
import emilyDavis from "../assets/emilyDavis.png";
import kevinSpacey from "../assets/kevinSpacey.jpg";


// Strict color palette
const COLOR_1 = "#002346"; // deep blue
const COLOR_2 = "#F8F4E3"; // off-white
const COLOR_3 = "#333333"; // dark gray


const Home = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useDarkMode();

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

      <main className="flex-grow mx-auto" style={{ color: darkMode ? COLOR_2 : COLOR_3 }}>
        
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
              className="text-5xl font-extrabold mb-6 drop-shadow-lg"
              style={{ color: COLOR_2 }}
            >
              Building Tomorrow, Today
            </h1>
            <p
              className="text-xl max-w-3xl mx-auto mb-8 drop-shadow-lg justify-center"
              style={{ color: COLOR_2 }}
            >
              Your trusted partner in construction and architecture — delivering innovative designs,
              sustainable solutions, and projects that stand the test of time.
            </p>
            <button
              className="px-8 py-4 rounded-full transition drop-shadow-lg mt-4"
              style={{ background: COLOR_3, color: COLOR_2 }}
              onClick={handleExploreClick}
            >
              Explore our services
            </button>
          </div>
        </section>

        {/* 2. Services Section */}
        <section
          id="practice-areas"
          className="px-6 py-10"
          style={{ background: COLOR_1 }}
        >
          <h2 className="text-3xl text-center font-bold mb-8" style={{ color: COLOR_2 }}>
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              "Residential Projects",
              "Commercial Complexes",
              "Industrial Facilities",
              "Interior Design",
              "Urban Planning",
              "Renovation & Restoration",
            ].map((area) => (
              <button
                onClick={() => navigate(`/services/${area.toLowerCase().replace(/ /g, "-")}`)}
                key={area}
                className="p-6 rounded-lg border-2 transition cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-105 duration-300"
                style={{
                  background: COLOR_2,
                  color: COLOR_3,
                  borderColor: COLOR_1,
                  boxShadow: `0 4px 16px 0 rgba(54,117,136,0.10)`,
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{area}</h3>
                <p className="text-base">
                  High-quality design and construction services tailored for {area.toLowerCase()}.
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* 3. About Section */}
        <section
          className="px-6 py-10 flex flex-col md:flex-row items-center"
          style={{ background: darkMode ? COLOR_1 : COLOR_2 }}
        >
          {/* Left side: Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src={whyChoose}
              alt="Architecture Office"
              className="rounded-lg shadow-lg object-cover"
              style={{ width: "420px", height: "280px", border: `2px solid ${COLOR_1}` }}
            />
          </div>

          {/* Right side */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center md:pl-10">
            <h2 className="text-3xl font-bold mb-8" style={{ color: darkMode ? "#fff" : COLOR_3 }}>
              About Our Firm
            </h2>
            <ul
              className="list-disc list-inside text-lg mb-8"
              style={{ color: darkMode ? "#fff" : COLOR_3 }}
            >
              <li>Established in 1997, with 2,500+ projects completed globally.</li>
              <li>Award-winning design and engineering teams.</li>
              <li>Specialized in sustainable and innovative architecture.</li>
              <li>Trusted by clients ranging from homeowners to multinational corporations.</li>
              <li>Dedicated to transforming communities through responsible construction.</li>
            </ul>
            <button
              className="px-8 py-4 rounded-full transition drop-shadow-lg"
              style={{ background: darkMode ? "#F8F4E3" : COLOR_1, color: darkMode ? "#333333" : COLOR_2 }}
              onClick={() => navigate("/about")}
            >
              Learn More About Us
            </button>
          </div>
        </section>

        {/* 4. Meet The Team */}
        <section className="px-6 py-10" style={{ background: COLOR_1 }}>
          <h2 className="text-3xl text-center font-bold mb-8" style={{ color: COLOR_2 }}>
            Meet Our Architects & Engineers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Jane Doe", title: "Lead Architect", img: janeDoe },
              { name: "John Smith", title: "Structural Engineer", img: johnSmith },
              { name: "Emily Davis", title: "Interior Designer", img: emilyDavis },
              { name: "Kevin Spacey", title: "Project Manager", img: kevinSpacey },
            ].map(({ name, title, img }) => (
              <div
                key={name}
                className="relative rounded-lg text-center flex flex-col justify-end items-center overflow-hidden shadow-lg border group transition-transform duration-300 cursor-pointer"
                style={{
                  width: "270px",
                  height: "300px",
                  margin: "0 auto",
                  color: COLOR_2,
                  background: COLOR_3,
                  border: `2px solid ${COLOR_1}`,
                }}
              >
                <div
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.7)",
                  }}
                  aria-label={name}
                />
                <div className="relative z-10 p-4 w-full flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2 drop-shadow-lg" style={{ color: COLOR_2 }}>
                    {name}
                  </h3>
                  <p className="text-base font-medium drop-shadow-lg" style={{ color: COLOR_2 }}>
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
          style={{ background: darkMode ? '#002346' : '#F8F4E3' }}
        >
          <h2
            className="text-4xl font-bold mb-4 text-center"
            style={{ color: darkMode ? '#fff' : '#002346' }}
          >
            A Construction Partner You Can Trust
          </h2>
          <p
            className="text-lg mb-10 max-w-3xl text-center"
            style={{ color: darkMode ? '#fff' : '#333333' }}
          >
            We go beyond blueprints and concrete. Our commitment to reliability, transparency, 
            and innovation ensures every project is completed on time, within budget, 
            and with uncompromising quality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl">
            <div className="rounded-xl p-8 shadow-lg bg-white" style={{ color: '#002346' }}>
              <div className="text-3xl font-bold mb-2" style={{ color: '#333333' }}>92%</div>
              <div className="font-medium">
                Client satisfaction rate<br />across residential & commercial projects.
              </div>
            </div>
            <div className="rounded-xl p-8 shadow-lg bg-white" style={{ color: '#002346' }}>
              <div className="text-3xl font-bold mb-2" style={{ color: '#333333' }}>98%</div>
              <div className="font-medium">
                Projects delivered<br />within scheduled timelines.
              </div>
            </div>
            <div className="rounded-xl p-8 shadow-lg bg-white" style={{ color: '#002346' }}>
              <div className="text-3xl font-bold mb-2" style={{ color: '#333333' }}>24/7</div>
              <div className="font-medium">
                Dedicated project support<br />and client communication.
              </div>
            </div>
            <div className="rounded-xl p-8 shadow-lg bg-white" style={{ color: '#002346' }}>
              <div className="text-3xl font-bold mb-2" style={{ color: '#333333' }}>150+</div>
              <div className="font-medium">
                Architects & engineers<br />with proven track records.
              </div>
            </div>
          </div>
        </section>

        {/* 6. Contact Section */}
        <section
          className="text-center py-20 shadow-lg"
          style={{ background: COLOR_1 }}
        >
          <h2 className="text-4xl font-bold mb-6" style={{ color: COLOR_2 }}>
            Ready to Start Your Project?
          </h2>
          <p className="max-w-xl mx-auto mb-8" style={{ color: COLOR_2 }}>
            Contact us today to discuss your vision, and let’s bring it to life with expert design and construction.
          </p>
          <button
            className="px-8 py-4 rounded-full transition"
            style={{ background: COLOR_3, color: COLOR_2 }}
            onClick={() => navigate("/home2#consultation-form")}
          >
            Book a consultation
          </button>
        </section>
      </main>

      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Home;
