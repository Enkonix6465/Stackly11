import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext";
import Footer from "../components/Footer.jsx";
import servicesHero from "../assets/servicesHero.mp4";
import whyChoose from "../assets/whyChoose.jpg";
import familySection from "../assets/familySection.png";
import industrialFacilities from "../assets/industrialFacilities.jpg";
import commercialComplex from "../assets/commercialComplex.jpg";
import corporateSection from "../assets/corporateSection.jpg";
import immigrationSection from "../assets/immigrationSection.jpg";
import realestateSection from "../assets/realEstatePhoto.jpg";

// Replace Heroicons with any design-specific icons if needed
import {
  BriefcaseIcon,
  UsersIcon,
  HomeIcon,
  GlobeAltIcon,
  ScaleIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";

const COLOR_1 = "#002346";
const COLOR_2 = "#F8F4E3";
const COLOR_3 = "#333333";

// Construction/architecture firm services
const serviceData = [
  {
    id: "residential-projects",
    title: "Residential Projects",
    description:
      "End-to-end design and construction for homes, apartments, and villas, blending comfort with contemporary aesthetics.",
    icon: HomeIcon,
    highlights: [
      "Architectural planning & design",
      "Custom interiors and renovations",
      "Eco-friendly home solutions",
      "Smart home integration",
    ],
  },
  {
    id: "commercial-complexes",
    title: "Commercial Complexes",
    description:
      "Comprehensive solutions for offices, malls, retail spaces, and mixed-use developments built for business success.",
    icon: BriefcaseIcon,
    highlights: [
      "Workplace planning and design",
      "Retail/office space remodeling",
      "Future-ready infrastructure",
      "Compliance & safety standards",
    ],
  },
  {
    id: "industrial-facilities",
    title: "Industrial Facilities",
    description:
      "Specialized construction for factories, warehouses, and smart industrial spaces—with a focus on durability and scalability.",
    icon: ScaleIcon,
    highlights: [
      "Large-scale industrial design",
      "Energy & logistics optimization",
      "Safety and environment compliance",
      "Tailored project management",
    ],
  },
  {
    id: "interior-design",
    title: "Interior Design",
    description:
      "Modern, functional interiors for residential, commercial, or hospitality spaces tailored to your vision and brand.",
    icon: UsersIcon,
    highlights: [
      "Space planning & layout",
      "Material & color consultation",
      "Furniture and lighting solutions",
      "Turnkey project execution",
    ],
  },
  {
    id: "urban-planning",
    title: "Urban Planning",
    description:
      "Strategic master planning and urban design for sustainable, vibrant communities and smart cities.",
    icon: GlobeAltIcon,
    highlights: [
      "City/zone master plans",
      "Landscape & streetscape design",
      "Public realm improvements",
      "Sustainable urban policy",
    ],
  },
  {
    id: "renovation-restoration",
    title: "Renovation & Restoration",
    description:
      "Bringing new life to historic, aged, or underutilized buildings through careful restoration and creative upgrades.",
    icon: BuildingOffice2Icon,
    highlights: [
      "Restoration & retrofitting",
      "Heritage conservation",
      "Modernization of old spaces",
      "Adaptive reuse projects",
    ],
  },
];

const Services = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300`}
      style={{ background: darkMode ? COLOR_1 : COLOR_2 }}
    >
      <div className="sticky top-0 z-50">
        <Header user={user} onLogout={onLogout} />
      </div>

      {/* 1. Hero Video/Intro */}
      <section
        className="w-full relative min-h-screen flex items-center justify-center text-center overflow-hidden"
        style={{ background: COLOR_1 }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={servicesHero}
          loading="lazy"
          autoPlay
          loop
          muted
          playsInline
        />
        <div
          className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center"
          style={{ background: "rgba(51,51,51,0.5)" }}
        >
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: COLOR_2 }}>
            Our Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: COLOR_2 }}>
            Complete construction and architecture solutions for homes, businesses, and communities—delivered with vision, skill, and commitment.
          </p>
        </div>
      </section>

      {/* 2. Our Expertise */}
      <section className="w-full py-16 px-6 max-w-7xl mx-auto">
        <h2
          className="text-3xl font-bold mb-10 text-center"
          style={{ color: darkMode ? COLOR_2 : COLOR_1 }}
        >
          What We Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceData.map(({ id, title, description, icon: Icon }) => (
            <Link
              key={id}
              to={`/services/${id}`}
              className="rounded-2xl shadow-lg p-8 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
              style={{
                background: darkMode ? COLOR_3 : COLOR_2,
                border: `2px solid ${COLOR_1}`,
              }}
            >
              <Icon className="w-12 h-12 mb-4" style={{ color: darkMode ? '#fff' : COLOR_1 }} />
              <h3 className="text-2xl font-bold mb-2" style={{ color: darkMode ? '#fff' : COLOR_1 }}>
                {title}
              </h3>
              <p
                className="text-base text-center mb-2"
                style={{ color: darkMode ? '#fff' : COLOR_3 }}
              >
                {description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section
        className="w-full py-16 px-6 flex flex-col items-center justify-center"
        style={{ background: COLOR_1 }}
      >
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* Left: Features */}
          <div className="flex flex-col space-y-6 h-full">
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLOR_2 }}>
              Why Choose Vision Builders
            </h2>
            <div className="space-y-6 h-full flex flex-col justify-between">
              {/* Feature Card 1 */}
              <div
                className="flex items-start bg-[#F8F4E3] rounded-xl shadow p-6"
                style={{ borderLeft: `6px solid ${COLOR_1}` }}
              >
                <svg
                  className="w-8 h-8 mr-4 flex-shrink-0"
                  fill="none"
                  stroke="#333333"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 19V7a2 2 0 012-2h8a2 2 0 012 2v12" />
                  <path d="M6 19h12" />
                  <path d="M9 19v2a2 2 0 002 2h2a2 2 0 002-2v-2" />
                </svg>
                <div>
                  <div
                    className="font-bold text-lg mb-1"
                    style={{ color: COLOR_1 }}
                  >
                    Creative Design Process
                  </div>
                  <div className="text-[#333333] text-base">
                    Our collaborative approach puts your vision at the center of inspired, functional designs.
                  </div>
                </div>
              </div>
              {/* Feature Card 2 */}
              <div
                className="flex items-start bg-[#F8F4E3] rounded-xl shadow p-6"
                style={{ borderLeft: `6px solid ${COLOR_1}` }}
              >
                <svg
                  className="w-8 h-8 mr-4 flex-shrink-0"
                  fill="none"
                  stroke="#333333"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
                <div>
                  <div
                    className="font-bold text-lg mb-1"
                    style={{ color: COLOR_1 }}
                  >
                    Quality Craftsmanship
                  </div>
                  <div className="text-[#333333] text-base">
                    We build to last—combining cutting-edge methods, sustainable materials, and meticulous attention to detail.
                  </div>
                </div>
              </div>
              {/* Feature Card 3 */}
              <div
                className="flex items-start bg-[#F8F4E3] rounded-xl shadow p-6"
                style={{ borderLeft: `6px solid ${COLOR_1}` }}
              >
                <svg
                  className="w-8 h-8 mr-4 flex-shrink-0"
                  fill="none"
                  stroke="#333333"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2v20" />
                  <path d="M5 12h14" />
                </svg>
                <div>
                  <div
                    className="font-bold text-lg mb-1"
                    style={{ color: COLOR_1 }}
                  >
                    Personalized Service
                  </div>
                  <div className="text-[#333333] text-base">
                    A dedicated project manager supports you at every step, ensuring complete transparency and satisfaction.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex justify-center items-center h-full">
            <img
              src={whyChoose}
              alt="Why Choose Vision Builders"
              className="rounded-2xl w-full max-w-md h-full object-cover shadow-lg"
              style={{ border: `4px solid ${COLOR_1}`, maxHeight: "520px" }}
            />
          </div>
        </div>
      </section>

      {/* 4. Service Highlights */}
      <section className="w-full py-16 px-6 max-w-7xl mx-auto">
        <h2
          className="text-3xl font-bold mb-10 text-center"
          style={{ color: darkMode ? COLOR_2 : COLOR_1 }}
        >
          Our Expertise in Detail
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {serviceData.map(({ id, title, highlights }) => {
            // Use same image-handling logic for highlights if images are available
            let bg = COLOR_2;
            if (id === "residential-projects") bg = `${COLOR_2} url(${familySection}) right bottom/cover no-repeat`;
            else if (id === "commercial-complexes") bg = `${COLOR_2} url(${corporateSection}) right bottom/cover no-repeat`;
            else if (id === "industrial-facilities") bg = `${COLOR_2} url(${industrialFacilities}) right bottom/cover no-repeat`;
            else if (id === "interior-design") bg = `${COLOR_2} url(${commercialComplex}) right bottom/cover no-repeat`;
            else if (id === "urban-planning") bg = `${COLOR_2} url(${immigrationSection}) right bottom/cover no-repeat`;
            else if (id === "renovation-restoration") bg = `${COLOR_2} url(${realestateSection}) right bottom/cover no-repeat`;

            return (
              <div
                key={id}
                className="rounded-xl border-l-4 shadow-md p-8 mb-6 relative overflow-hidden"
                style={{
                  background: bg,
                  borderColor: COLOR_1,
                  minHeight: "260px",
                }}
              >
                {/* Overlay */}
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background: "rgba(248,244,227,0.77)",
                    zIndex: 1,
                  }}
                />
                <div className="relative z-10">
                  <h3
                    className="text-2xl font-semibold mb-3"
                    style={{
                      color: COLOR_1,
                    }}
                  >
                    {title}
                  </h3>
                  <ul
                    className="list-disc ml-6 space-y-2"
                    style={{ color: COLOR_3 }}
                  >
                    {highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Client Testimonials */}
      <section className="w-full py-16 px-6" style={{ background: COLOR_1 }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-bold mb-10 text-center"
            style={{ color: COLOR_2 }}
          >
            Client Success Stories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div
              className="rounded-2xl shadow p-6 flex flex-col justify-between h-full"
              style={{
                background: COLOR_2,
                color: COLOR_3,
                border: `1px solid ${COLOR_1}`,
              }}
            >
              <div className="italic mb-4">
                "Vision Builders completely transformed our workspace—modern, vibrant, and perfect for our team. Seamless process and stellar results!"
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sarah Thompson"
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <div className="font-bold text-sm" style={{ color: COLOR_1 }}>
                    Sarah Thompson
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: COLOR_3, opacity: 0.7 }}
                  >
                    Project Director, UrbanHabitat Ltd.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-2xl shadow p-6 flex flex-col justify-between h-full"
              style={{
                background: COLOR_2,
                color: COLOR_3,
                border: `1px solid ${COLOR_1}`,
              }}
            >
              <div className="italic mb-4">
                "Their team managed our residential renovation with incredible attention to detail and a personal touch at every step."
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="Emily Davis"
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <div className="font-bold text-sm" style={{ color: COLOR_1 }}>
                    Emily Davis
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: COLOR_3, opacity: 0.7 }}
                  >
                    Homeowner, Mumbai
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-2xl shadow p-6 flex flex-col justify-between h-full"
              style={{
                background: COLOR_2,
                color: COLOR_3,
                border: `1px solid ${COLOR_1}`,
              }}
            >
              <div className="italic mb-4">
                "We entrusted Vision Builders with our commercial plaza construction—the experience exceeded all our expectations!"
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="John Harris"
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <div className="font-bold text-sm" style={{ color: COLOR_1 }}>
                    John Harris
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: COLOR_3, opacity: 0.7 }}
                  >
                    Director, Blue Ocean Realty
                  </div>
                </div>
              </div>
            </div>
            {/* Add more testimonial cards as needed */}
          </div>
        </div>
      </section>

      {/* 6. Consultation CTA */}
      <section
        className="w-full py-20 text-center"
        style={{ background: darkMode ? COLOR_1 : COLOR_2 }}
      >
        <h2 className="text-4xl font-bold mb-6" style={{ color: darkMode ? COLOR_2 : COLOR_1 }}>
          Ready to Build with Us?
        </h2>
        <p className="mb-8 text-lg max-w-xl mx-auto" style={{ color: darkMode ? '#fff' : COLOR_1 }}>
          Contact Vision Builders today to schedule a consultation and start your journey to a remarkable space.
        </p>
        <button
          className="font-bold px-8 py-4 rounded-full transition"
          style={{
            background: darkMode ? COLOR_3 : COLOR_2,
            color: darkMode ? COLOR_2 : COLOR_1,
            border: `2px solid ${COLOR_1}`,
          }}
          onClick={() => {
            const navigate = useNavigate();
            navigate('/home2#consultation-form');
          }}
        >
          Book Consultation
        </button>
      </section>

      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Services;
