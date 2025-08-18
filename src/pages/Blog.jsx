import React, { useEffect, useLayoutEffect, useRef } from "react";

// Utility to sync left image height with right content
function useSyncHeight(leftRef, rightRef) {
  useEffect(() => {
    function sync() {
      if (leftRef.current && rightRef.current) {
        leftRef.current.style.height = rightRef.current.offsetHeight + "px";
      }
    }
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [leftRef, rightRef]);
}
import { useDarkMode } from "../context/DarkModeContext";
import { useLocation, Link } from "react-router-dom";
import burjKhalifa from "../assets/burjKhalifa.jpg"; // Optional: Replace with a suitable "landmark building" image for architecture firm if needed
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import AOS from "aos";

import blog from "../assets/blogHero.mp4";

// Scroll to top on route change (useLayoutEffect for immediate scroll)
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Construction/Architecture blog posts
const blogPosts = [
  {
    title: "2025 Design Trends: What's Shaping Modern Architecture",
    date: "August 1, 2025",
    excerpt:
      "Discover this year’s most influential building materials, design philosophies, and eco-friendly innovations driving the world of architecture and construction...",
    slug: "2025-design-trends-modern-architecture",
    author: "Ar. Priya Sharma",
  },
  {
    title: "How to Plan a Residential Project: From Blueprint to Build",
    date: "July 18, 2025",
    excerpt:
      "Explore the complete process for planning, designing, and executing a new home. Tips from architects and site engineers for smooth project delivery...",
    slug: "planning-residential-project",
    author: "Eng. Rahul Verma",
  },
  {
    title: "Renovating for Sustainability: Practical Approaches",
    date: "July 5, 2025",
    excerpt:
      "Learn how to integrate green practices and energy efficiency into renovations—plus ways to maximize value and comfort.",
    slug: "renovating-for-sustainability",
    author: "Ar. Sneha Nair",
  },
];

// Architecture/Construction suggestions (formerly "how to prepare for crime")
const suggestions = [
  {
    title: "Planning Your Project",
    description:
      "Define your goals, budget, and timeline early. Consult with architects for a vision that matches your needs and site conditions.",
    icon: "📐",
  },
  {
    title: "Choosing Sustainable Materials",
    description:
      "Prioritize energy-efficient, locally-sourced, and long-lasting building materials for better environmental impact and cost savings.",
    icon: "♻️",
  },
  {
    title: "Smart Home Integrations",
    description:
      "Incorporate the latest technologies—smart lighting, security, and climate control—for convenience and better quality of living.",
    icon: "🏡",
  },
  {
    title: "Managing Project Costs",
    description:
      "Work closely with your builder for transparent cost estimates. Plan for contingencies and monitor progress at every stage.",
    icon: "💰",
  },
  {
    title: "Renovation Success Tips",
    description:
      "Assess the existing structure's condition. Plan for upgrades in insulation, lighting, and space utilization for the best results.",
    icon: "🔨",
  },
  {
    title: "Working with Architects",
    description:
      "Share your ideas, preferences, and priorities clearly. Regular collaboration ensures the best outcome for your vision.",
    icon: "🗣️",
  },
];

// Safety Precautions by Age Group (household/home/space focus)
const precautions = {
  below18: [
    "Inform parents or guardians before making changes to your room or home.",
    "Avoid climbing on unstable furniture or fixtures.",
    "Do not operate power tools or heavy equipment unsupervised.",
    "Know emergency exit routes and basic first aid.",
  ],
  adults: [
    "Check credentials when hiring contractors or service providers.",
    "Ensure proper ventilation during painting or renovation.",
    "Secure all construction permits before starting work.",
    "Discuss scope, costs, and timelines with your architect at every step.",
  ],
  seniorCitizens: [
    "Install handrails and slip-resistant flooring where possible.",
    "Ensure living spaces are well-lit and free of obstructions.",
    "Keep emergency contacts visible and accessible.",
    "Arrange regular maintenance checks for building safety.",
  ],
};

// Architecture Quiz Data
const QUIZ_QUESTIONS = [
  {
    question: "Which architectural style is known for its use of glass and steel?",
    options: [
      "A. Brutalism",
      "B. Modernism",
      "C. Gothic",
      "D. Baroque",
    ],
    answer: 1,
  },
  {
    question: "Minimum recommended ceiling height for living rooms (as per most standards)?",
    options: ["A. 2.3m", "B. 2.6m", "C. 2.9m", "D. 3.2m"],
    answer: 1,
  },
  {
    question:
      "What is LEED certification related to in construction?",
    options: [
      "A. Safety Standards",
      "B. Project Management",
      "C. Green Building",
      "D. Judicial Approvals",
    ],
    answer: 2,
  },
  {
    question: "Which tool is essential for site measurements?",
    options: [
      "A. Hammer",
      "B. Trowel",
      "C. Measuring Tape",
      "D. Level",
    ],
    answer: 2,
  },
  {
    question: "A cantilever is best described as:",
    options: [
      "A. A type of paint",
      "B. A projecting structure supported at only one end",
      "C. A concrete mixture",
      "D. A type of roof tile",
    ],
    answer: 1,
  },
];

function LawQuiz() {
  const COLOR_1 = "#002346";
  const COLOR_2 = "#F8F4E3";
  const COLOR_3 = "#333333";

  const [step, setStep] = React.useState(0);
  const [selected, setSelected] = React.useState([]);
  const [showResult, setShowResult] = React.useState(false);
  const [feedback, setFeedback] = React.useState(null);

  const handleSelect = (idx) => {
    if (showResult) return;
    const copy = [...selected];
    copy[step] = idx;
    setSelected(copy);

    if (idx === QUIZ_QUESTIONS[step].answer) {
      setFeedback(true);
    } else {
      setFeedback(false);
    }
  };

  const handleNext = () => {
    if (step < QUIZ_QUESTIONS.length - 1) {
      setStep(step + 1);
      setFeedback(null);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
      setFeedback(null);
    }
  };

  const correctCount = selected.reduce(
    (acc, val, idx) => acc + (val === QUIZ_QUESTIONS[idx].answer ? 1 : 0),
    0
  );

  if (showResult) {
    return (
      <div
        className="rounded-2xl shadow-lg p-8 max-w-xl mx-auto"
        style={{
          background: COLOR_2,
          color: COLOR_3,
          border: `2px solid ${COLOR_1}`,
        }}
      >
        <h3 className="text-2xl font-bold mb-4" style={{ color: COLOR_1 }}>
          Quiz Result
        </h3>
        <p className="text-lg mb-2">
          You scored{" "}
          <span style={{ color: COLOR_1, fontWeight: 700 }}>
            {correctCount}
          </span>{" "}
          out of {QUIZ_QUESTIONS.length}!
        </p>
        <button
          className="mt-6 py-2 px-6 font-semibold rounded-full"
          style={{
            background: COLOR_1,
            color: COLOR_2,
            border: `2px solid ${COLOR_1}`,
          }}
          onClick={() => {
            setStep(0);
            setSelected([]);
            setShowResult(false);
            setFeedback(null);
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  const q = QUIZ_QUESTIONS[step];
  return (
    <div
      className="rounded-2xl shadow-lg p-8 max-w-xl mx-auto"
      style={{
        background: COLOR_2,
        color: COLOR_3,
        border: `2px solid ${COLOR_1}`,
      }}
    >
      <h3
        className="text-xl font-bold mb-6 text-left"
        style={{ color: COLOR_3 }}
      >
        {q.question}
      </h3>
      <div className="flex flex-col gap-4 mb-4">
        {q.options.map((opt, idx) => {
          const isSelected = selected[step] === idx;
          let optionBg = COLOR_2;
          let optionColor = COLOR_3;
          if (isSelected) {
            if (feedback === true && idx === q.answer) {
              optionBg = COLOR_1;
              optionColor = COLOR_2;
            } else if (feedback === false && idx === selected[step]) {
              optionBg = "rgba(255, 99, 99, 0.85)";
              optionColor = COLOR_2;
            }
          }
          return (
            <button
              key={opt}
              className="w-full text-left px-6 py-4 rounded-xl border transition-colors text-base font-medium select-none"
              style={{
                border: `1.5px solid ${COLOR_1}`,
                background: optionBg,
                color: optionColor,
                boxShadow: isSelected
                  ? "0 2px 8px 0 rgba(54,117,136,0.15)"
                  : "none",
                cursor: selected[step] != null ? "default" : "pointer",
                pointerEvents: selected[step] != null ? "none" : "auto",
              }}
              onClick={() => handleSelect(idx)}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {feedback !== null && (
        <p
          className="text-sm font-semibold mb-4"
          style={{ color: feedback ? "#138000" : "#cc0000" }}
          aria-live="polite"
        >
          {feedback
            ? "Correct! Well done."
            : `Incorrect. The correct answer is: ${q.options[q.answer]}`}
        </p>
      )}
      <div className="flex justify-between mt-6">
        <button
          className="px-6 py-3 rounded font-semibold"
          style={{
            background: "#d1d5db",
            color: "#333",
            cursor: step === 0 ? "not-allowed" : "pointer",
          }}
          onClick={handlePrev}
          disabled={step === 0}
        >
          ← Previous
        </button>
        <button
          className="px-6 py-3 rounded font-semibold"
          style={{
            background: COLOR_1,
            color: COLOR_2,
            cursor: selected[step] != null ? "pointer" : "not-allowed",
            opacity: selected[step] != null ? 1 : 0.6,
          }}
          onClick={handleNext}
          disabled={selected[step] == null}
        >
          {step === QUIZ_QUESTIONS.length - 1 ? "Finish" : "Next →"}
        </button>
      </div>
    </div>
  );
}

const Blog = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const COLOR_1 = "#002346"; // Deep Blue
  const COLOR_2 = "#F8F4E3"; // Soft Ivory
  const COLOR_3 = "#333333"; // Charcoal Black

  return (
    <>
      <ScrollToTop />
      <div
        className={`min-h-screen w-full transition-colors duration-300`}
        style={{
          overflowX: "hidden",
          background: darkMode ? COLOR_1 : COLOR_2,
          color: darkMode ? COLOR_2 : COLOR_3,
        }}
      >
        {/* Fixed Header */}
        <div
          className="fixed top-0 left-0 w-full z-[100]"
          style={{
            background: darkMode ? COLOR_3 : COLOR_2,
            boxShadow: "0 2px 8px 0 rgba(51,51,51,0.08)",
          }}
        >
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            user={user}
            onLogout={onLogout}
          />
        </div>

        {/* 1. Hero with Video */}
        <section
          className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0"
          style={{
            minHeight: "100vh",
            maxWidth: "100vw",
            paddingTop: "64px",
            background: COLOR_1,
          }}
        >
          <video
            autoPlay
            loop
            loading="lazy"
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
            style={{
              minHeight: "100vh",
              minWidth: "100vw",
              objectFit: "cover",
              background: COLOR_1,
            }}
          >
            <source src={blog} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 text-center">
            <h1
              className="font-bold text-5xl mb-6 drop-shadow-lg"
              style={{ color: COLOR_2 }}
              data-aos="fade-down"
            >
              Inspiration & Building Insights
            </h1>
            <p
              className="max-w-2xl mx-auto text-lg drop-shadow-lg"
              style={{ color: COLOR_2 }}
              data-aos="fade-up"
            >
              Construction news, design guides, and expert tips from our team—helping you create better spaces for life and work.
            </p>
          </div>
        </section>

        {/* 2. Blog Grid */}
        <section
          className="w-full py-16 px-4 mx-auto"
          style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <Link
                to={`/blog/${post.slug}`}
                key={post.slug}
                className="block p-8 min-h-[300px] rounded-2xl shadow-lg flex flex-col justify-between transform transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: COLOR_2,
                  color: COLOR_1,
                  border: `2px solid ${COLOR_1}`,
                  textDecoration: "none",
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div>
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p
                    className="text-base mb-3"
                    style={{ color: COLOR_3 }}
                  >
                    {post.excerpt}
                  </p>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                    <span className="text-sm" style={{ color: COLOR_1 }}>
                      {post.author}
                    </span>
                    <span
                      className="text-xs mt-2 sm:mt-0"
                      style={{ color: COLOR_3 }}
                    >
                      {post.date}
                    </span>
                  </div>
                  <button
                    className="mt-6 py-2 px-6 font-semibold rounded-full"
                    style={{
                      background: COLOR_3,
                      color: COLOR_2,
                      border: `2px solid ${COLOR_1}`,
                      cursor: "pointer",
                    }}
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Suggestions Section */}
        <section
          className="w-full mx-auto px-6 py-16"
          style={{ background: COLOR_1 }}
          data-aos="fade-up"
        >
          <h2
            className="text-4xl text-center font-bold mb-12"
            style={{ color: COLOR_2 }}
          >
            Project Planning & Building Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {suggestions.map(({ title, description, icon }, idx) => (
              <div
                key={idx}
                className="bg-[#F8F4E3] rounded-3xl p-8 shadow-lg flex flex-col items-center text-center transform transition-transform hover:scale-105 cursor-pointer"
                style={{ color: COLOR_2, minHeight: "260px" }}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                role="article"
                aria-label={title}
              >
                <div className="text-6xl mb-5" aria-hidden="true">
                  {icon}
                </div>
                <h3 className="text-xl text-[#002346] font-semibold mb-4">{title}</h3>
                <p className="text-sm text-[#333333] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Precautions by Age Group Section */}
        <section
          className="w-full mx-auto px-6 py-16"
          style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}
          data-aos="fade-up"
        >
          <h2
            className="text-4xl text-center font-bold mb-12"
            style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
          >
            Safety Precautions at Home & Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto text-left">
            {/* Below 18 Age */}
            <div
              className="rounded-3xl p-8 shadow-lg"
              style={{ border: `3px solid ${COLOR_1}`, color: "#002346", backgroundColor: "#F8F4E3" }}
              role="region"
              aria-label="Precautions for Below 18 Age"
            >
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: COLOR_1 }}
              >
                Children & Teens
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {precautions.below18.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Adults */}
            <div
              className="rounded-3xl p-8 shadow-lg"
              style={{ border: `3px solid ${COLOR_1}`, color: COLOR_3, backgroundColor: "#F8F4E3" }}
              role="region"
              aria-label="Precautions for Adults"
            >
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: COLOR_1 }}
              >
                Adults
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {precautions.adults.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Senior Citizens */}
            <div
              className="rounded-3xl p-8 shadow-lg"
              style={{ border: `3px solid ${COLOR_1}`, color: COLOR_3, backgroundColor: "#F8F4E3" }}
              role="region"
              aria-label="Precautions for Senior Citizens"
            >
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: COLOR_1 }}
              >
                Senior Citizens
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {precautions.seniorCitizens.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Fun Building Fact Block */}
        <section
          className="w-full mx-auto px-6 py-16 flex flex-col md:flex-row items-stretch justify-center max-w-7xl"
          style={{ background: "#002346", borderRadius: "1.5rem" }}
          aria-label="Architecture/Building Knowledge"
          data-aos="fade-up"
        >
          {/* Height sync for image and content */}
          {(() => {
            const leftRef = useRef(null);
            const rightRef = useRef(null);
            useSyncHeight(leftRef, rightRef);

            return (
              <>
                {/* Left: Iconic building Image */}
                <div
                  ref={leftRef}
                  className="md:w-1/2 w-full flex items-stretch justify-center mb-8 md:mb-0"
                  style={{ transition: "height 0.3s" }}
                >
                  <img
                    src={burjKhalifa} // Optionally replace with your own architecture firm image
                    alt="Iconic Building"
                    className="rounded-xl shadow-lg object-cover border-4 w-full max-w-[360px] h-full"
                    style={{
                      width: "90%",
                      maxWidth: "360px",
                      borderColor: "#002346",
                      borderStyle: "solid",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                {/* Right: Content */}
                <div
                  ref={rightRef}
                  className="md:w-1/2 w-full flex flex-col justify-center px-6 py-8 h-full min-h-full"
                >
                  <h2
                    className="text-3xl font-bold mb-6"
                    style={{ color: "#F8F4E3" }}
                  >
                    Building the Future: Did You Know?
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-lg">
                    <div>
                      <ul
                        className="list-disc list-inside space-y-3"
                        style={{ color: "#F8F4E3" }}
                      >
                        <li>
                          The tallest building in the world, the Burj Khalifa, stands at 828 meters and required over 330,000 cubic meters of concrete!
                        </li>
                        <li>
                          Sustainable design can reduce a building's operating costs by up to 50% through energy and water savings.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul
                        className="list-disc list-inside space-y-3"
                        style={{ color: "#F8F4E3" }}
                      >
                        <li>
                          Modern BIM (Building Information Modeling) improves collaboration among architects, engineers, and contractors for fewer errors.
                        </li>
                        <li>
                          The Great Wall of China is over 13,000 miles long—history’s most impressive construction feat!
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </section>

        {/* Quiz Section */}
        <section
          className="w-full py-16 px-4"
          style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}
          data-aos="fade-up"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12" style={{ color: darkMode ? "#F8F4E3" : "#002346" }}>
              Test Your Architecture Knowledge
            </h2>
            <LawQuiz />
          </div>
        </section>

        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </>
  );
};

export default Blog;
