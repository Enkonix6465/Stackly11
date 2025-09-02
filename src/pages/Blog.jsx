/* eslint-disable no-unused-vars */

import {
  FaRulerCombined,
  FaRecycle,
  FaHome,
  FaPiggyBank,
  FaHammer,
  FaComments,
} from "react-icons/fa";
import AOS from "aos";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import blog from "../assets/blogHero.mp4";
import burjKhalifa from "../assets/burjKhalifa.jpg"; // Optional: Replace with a suitable "landmark building" image for architecture firm if needed
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext";

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

// Scroll to top on route change (useLayoutEffect for immediate scroll)
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Construction/Architecture blog posts (i18n)
const blogPosts = [
  {
    titleKey: "blog.posts.0.title",
    dateKey: "blog.posts.0.date",
    excerptKey: "blog.posts.0.excerpt",
    slug: "2025-design-trends-modern-architecture",
    authorKey: "blog.posts.0.author",
  },
  {
    titleKey: "blog.posts.1.title",
    dateKey: "blog.posts.1.date",
    excerptKey: "blog.posts.1.excerpt",
    slug: "planning-residential-project",
    authorKey: "blog.posts.1.author",
  },
  {
    titleKey: "blog.posts.2.title",
    dateKey: "blog.posts.2.date",
    excerptKey: "blog.posts.2.excerpt",
    slug: "renovating-for-sustainability",
    authorKey: "blog.posts.2.author",
  },
];

// Architecture/Construction suggestions (i18n)
const suggestions = [
  {
    titleKey: "blog.suggestions.0.title",
    descriptionKey: "blog.suggestions.0.description",
    icon: "📐",
  },
  {
    titleKey: "blog.suggestions.1.title",
    descriptionKey: "blog.suggestions.1.description",
    icon: "♻️",
  },
  {
    titleKey: "blog.suggestions.2.title",
    descriptionKey: "blog.suggestions.2.description",
    icon: "🏡",
  },
  {
    titleKey: "blog.suggestions.3.title",
    descriptionKey: "blog.suggestions.3.description",
    icon: "💰",
  },
  {
    titleKey: "blog.suggestions.4.title",
    descriptionKey: "blog.suggestions.4.description",
    icon: "🔨",
  },
  {
    titleKey: "blog.suggestions.5.title",
    descriptionKey: "blog.suggestions.5.description",
    icon: "🗣️",
  },
];

// Safety Precautions by Age Group (i18n)
const precautions = {
  below18: [
    "blog.precautions.below18.0",
    "blog.precautions.below18.1",
    "blog.precautions.below18.2",
    "blog.precautions.below18.3",
  ],
  adults: [
    "blog.precautions.adults.0",
    "blog.precautions.adults.1",
    "blog.precautions.adults.2",
    "blog.precautions.adults.3",
  ],
  seniorCitizens: [
    "blog.precautions.seniorCitizens.0",
    "blog.precautions.seniorCitizens.1",
    "blog.precautions.seniorCitizens.2",
    "blog.precautions.seniorCitizens.3",
  ],
};

// Architecture Quiz Data (i18n)
const QUIZ_QUESTIONS = [
  {
    questionKey: "blog.quiz.0.question",
    optionsKeys: [
      "blog.quiz.0.options.0",
      "blog.quiz.0.options.1",
      "blog.quiz.0.options.2",
      "blog.quiz.0.options.3",
    ],
    answer: 1,
  },
  {
    questionKey: "blog.quiz.1.question",
    optionsKeys: [
      "blog.quiz.1.options.0",
      "blog.quiz.1.options.1",
      "blog.quiz.1.options.2",
      "blog.quiz.1.options.3",
    ],
    answer: 1,
  },
  {
    questionKey: "blog.quiz.2.question",
    optionsKeys: [
      "blog.quiz.2.options.0",
      "blog.quiz.2.options.1",
      "blog.quiz.2.options.2",
      "blog.quiz.2.options.3",
    ],
    answer: 2,
  },
  {
    questionKey: "blog.quiz.3.question",
    optionsKeys: [
      "blog.quiz.3.options.0",
      "blog.quiz.3.options.1",
      "blog.quiz.3.options.2",
      "blog.quiz.3.options.3",
    ],
    answer: 2,
  },
  {
    questionKey: "blog.quiz.4.question",
    optionsKeys: [
      "blog.quiz.4.options.0",
      "blog.quiz.4.options.1",
      "blog.quiz.4.options.2",
      "blog.quiz.4.options.3",
    ],
    answer: 1,
  },
];

function LawQuiz() {
  const { t } = useTranslation();
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
          {t("blog.quiz.resultTitle")}
        </h3>
        <p className="text-lg mb-2">
          {t("blog.quiz.resultScore", {
            score: correctCount,
            total: QUIZ_QUESTIONS.length,
          })}
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
          {t("blog.quiz.tryAgain")}
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
        {t(q.questionKey)}
      </h3>
      <div className="flex flex-col gap-4 mb-4">
        {q.optionsKeys.map((optKey, idx) => {
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
              key={optKey}
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
              {t(optKey)}
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
            ? t("blog.quiz.correct")
            : t("blog.quiz.incorrect", { answer: t(q.optionsKeys[q.answer]) })}
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
          {t("blog.quiz.prev")}
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
          {step === QUIZ_QUESTIONS.length - 1
            ? t("blog.quiz.finish")
            : t("blog.quiz.next")}
        </button>
      </div>
    </div>
  );
}

const Blog = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const { t } = useTranslation();
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
            {t("Your browser does not support the video tag.")}
          </video>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 text-center">
            <h1
              className="font-bold text-5xl mb-6 drop-shadow-lg"
              style={{ color: COLOR_2 }}
              data-aos="fade-down"
            >
              {t("blog.hero.title")}
            </h1>
            <p
              className="max-w-2xl mx-auto text-lg drop-shadow-lg"
              style={{ color: COLOR_2 }}
              data-aos="fade-up"
            >
              {t("blog.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* 2. Blog Grid */}
        <section
          className="w-full py-16 px-4 mx-auto"
          style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => {
              return (
                <Link
                  to={`/blog/${post.slug}`}
                  key={post.slug}
                  className="relative group min-h-[340px] rounded-3xl shadow-xl overflow-hidden flex flex-col justify-end bg-white   border-0 hover:shadow-2xl transition-all duration-300"
                  style={{
                    background: darkMode ? "#033e78ff" : "#c8c1a7ff",
                    color: darkMode ? COLOR_2 : COLOR_1,
                    textDecoration: "none",
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Card content */}
                  <div className="relative z-10 p-7 flex flex-col justify-between h-full min-h-[220px]">
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">
                        {t(post.titleKey)}
                      </h2>
                      <p
                        className="text-base mb-3 text-gray-100/90"
                        style={{ color: darkMode ? COLOR_2 : COLOR_3 }}
                      >
                        {t(post.excerptKey)}
                      </p>
                    </div>
                    <div className="flex flex-wrap flex-col w-fit  items-start  items-center mt-4">
                      <span
                        className="text-sm text-gray-200"
                        style={{ color: darkMode ? COLOR_2 : COLOR_1 }}
                      >
                        {t(post.authorKey)}
                      </span>
                      <span
                        className="text-xs mt-2 sm:mt-0 text-gray-300"
                        style={{ color: darkMode ? COLOR_2 : COLOR_3 }}
                      >
                        {t(post.dateKey)}
                      </span>
                    </div>
                  </div>
                  {/* Floating Read More button */}
                  <button
                    className="absolute bottom-6 right-6 py-2 px-6 font-semibold rounded-full shadow-lg bg-gradient-to-r from-[#002346] to-[#333333] text-[#F8F4E3] border-2 border-white group-hover:scale-105 transition-transform duration-200"
                    style={{
                      cursor: "pointer",
                      fontSize: "1rem",
                      letterSpacing: "0.02em",
                    }}
                    aria-label={t("blog.readMoreAria", {
                      title: t(post.titleKey),
                    })}
                  >
                    {t("Read More")}
                  </button>
                </Link>
              );
            })}
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
            {t("blog.suggestionsTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { Icon: FaRulerCombined, bg: "#e0e7ff", darkBg: "#1e293b" },
              { Icon: FaRecycle, bg: "#d1fae5", darkBg: "#134e4a" },
              { Icon: FaHome, bg: "#fef9c3", darkBg: "#78350f" },
              { Icon: FaPiggyBank, bg: "#ffe4e6", darkBg: "#831843" },
              { Icon: FaHammer, bg: "#f3e8ff", darkBg: "#4c1d95" },
              { Icon: FaComments, bg: "#f0fdf4", darkBg: "#14532d" },
            ].map(({ Icon, bg, darkBg }, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-8 shadow-xl flex flex-col items-center text-center transform transition-transform hover:scale-105 cursor-pointer border-0"
                style={{
                  background: darkMode ? darkBg : bg,
                  minHeight: "260px",
                  color: darkMode ? COLOR_2 : COLOR_1,
                }}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                role="article"
                aria-label={t(suggestions[idx].titleKey)}
              >
                <div
                  className="flex items-center justify-center w-20 h-20 rounded-full mb-6 shadow-lg"
                  style={{ background: darkMode ? COLOR_2 : COLOR_1 }}
                  aria-hidden="true"
                >
                  <Icon size={44} color={darkMode ? COLOR_1 : COLOR_2} />
                </div>
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: darkMode ? COLOR_2 : COLOR_1 }}
                >
                  {t(suggestions[idx].titleKey)}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: darkMode ? COLOR_2 : "#333333" }}
                >
                  {t(suggestions[idx].descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Precautions by Age Group Section */}
        <section
          className="w-full mx-auto px-6 py-16"
          style={{
            background: darkMode
              ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
              : "linear-gradient(135deg, #f8fafc 0%, #fef9c3 100%)",
          }}
          data-aos="fade-up"
        >
          <h2
            className="text-4xl text-center font-bold mb-16"
            style={{ color: darkMode ? COLOR_2 : COLOR_1 }}
          >
            {t("blog.precautionsTitle")}
          </h2>
          <div className="relative max-w-3xl mx-auto flex flex-col gap-12">
            {/* Timeline vertical line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#60a5fa] via-[#fbbf24] to-[#f87171] opacity-30 rounded-full"
              style={{ zIndex: 0, transform: "translateX(-50%)" }}
            />
            {/* Step 1: Below 18 */}
            <div className="relative flex items-center z-10 group">
              <div className="flex flex-col items-center w-1/2 pr-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl text-4xl font-bold mb-4 bg-gradient-to-br from-[#60a5fa] to-[#2563eb] animate-bounce group-hover:scale-110 transition-transform duration-300"
                  style={{ color: "#fff" }}
                >
                  {/* Child icon replaced with SVG for a professional look */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12zm0 1.5c-3.038 0-5.5 2.462-5.5 5.5V21h11v-2.5c0-3.038-2.462-5.5-5.5-5.5z"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-1/2 pl-8">
                <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl p-8 border-2 border-[#60a5fa] hover:shadow-[0_8px_32px_0_rgba(96,165,250,0.25)] transition duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#60a5fa]/10 to-transparent pointer-events-none" />
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ color: darkMode ? "#60a5fa" : "#2563eb" }}
                  >
                    {t("blog.precautions.below18Title")}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    {precautions.below18.map((item, idx) => (
                      <li key={idx}>{t(item)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Step 2: Adults */}
            <div className="relative flex items-center z-10 group flex-row-reverse">
              <div className="flex flex-col items-center w-1/2 pl-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl text-4xl font-bold mb-4 bg-gradient-to-br from-[#fbbf24] to-[#b45309] animate-bounce group-hover:scale-110 transition-transform duration-300"
                  style={{ color: "#fff" }}
                >
                  {/* Adult icon replaced with FaUser for a professional look */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25v-1.5A2.25 2.25 0 016.75 16.5h10.5a2.25 2.25 0 012.25 2.25v1.5"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-1/2 pr-8">
                <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl p-8 border-2 border-[#fbbf24] hover:shadow-[0_8px_32px_0_rgba(251,191,36,0.18)] transition duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#fbbf24]/10 to-transparent pointer-events-none" />
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ color: darkMode ? "#fbbf24" : "#b45309" }}
                  >
                    {t("blog.precautions.adultsTitle")}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    {precautions.adults.map((item, idx) => (
                      <li key={idx}>{t(item)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Step 3: Senior Citizens */}
            <div className="relative flex items-center z-10 group">
              <div className="flex flex-col items-center w-1/2 pr-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl text-4xl font-bold mb-4 bg-gradient-to-br from-[#f87171] to-[#991b1b] animate-bounce group-hover:scale-110 transition-transform duration-300"
                  style={{ color: "#fff" }}
                >
                  {/* Senior icon replaced with SVG for a professional look */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 21v-2.25A2.25 2.25 0 019 16.5h6a2.25 2.25 0 012.25 2.25V21"
                    />
                    <circle cx="8.5" cy="10.5" r="1" fill="currentColor" />
                    <circle cx="15.5" cy="10.5" r="1" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div className="w-1/2 pl-8">
                <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl p-8 border-2 border-[#f87171] hover:shadow-[0_8px_32px_0_rgba(248,113,113,0.18)] transition duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f87171]/10 to-transparent pointer-events-none" />
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ color: darkMode ? "#f87171" : "#991b1b" }}
                  >
                    {t("blog.precautions.seniorCitizensTitle")}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    {precautions.seniorCitizens.map((item, idx) => (
                      <li key={idx}>{t(item)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Fun Building Fact Block */}
        <section
          className="w-full mx-auto px-6 py-16"
          style={{
            background: darkMode
              ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
              : "linear-gradient(135deg, #f8fafc 0%, #fef9c3 100%)",
            borderRadius: "1.5rem",
          }}
          aria-label={t("blog.facts.ariaLabel")}
          data-aos="fade-up"
        >
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
          >
            {t("blog.facts.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "https://upload.wikimedia.org/wikipedia/commons/4/47/Town_Cityscape.svg",
                text: t("blog.facts.0"),
              },
              {
                icon: "https://symbl-cdn.com/i/webp/9a/7011c67ec6bef4ee0078350e970eb4.webp",
                text: t("blog.facts.1"),
              },
              {
                icon: "https://www.svgrepo.com/show/395948/building-construction.svg",
                text: t("blog.facts.2"),
              },
              {
                icon: "https://www.svgrepo.com/show/396569/glowing-star.svg",
                text: t("blog.facts.3"),
              },
            ].map((fact, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center justify-between bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl p-8 border-2 border-transparent hover:border-[#60a5fa] hover:shadow-[0_8px_32px_0_rgba(96,165,250,0.18)] transition duration-300 group overflow-hidden min-h-[260px]"
                style={{ minHeight: 220 }}
                data-aos="fade-up"
                data-aos-delay={idx * 120}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl text-4xl font-bold mb-6 bg-gradient-to-br from-[#60a5fa] to-[#2563eb] group-hover:scale-110   duration-300"
                  style={{ color: "#fff" }}
                >
                  <img src={fact.icon} alt="Fact Icon" className="w-12 h-12" />
                </div>
                <p
                  className="text-lg text-center font-medium"
                  style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                >
                  {fact.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quiz Section */}
        <section
          className="w-full py-16 px-4"
          style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}
          data-aos="fade-up"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2
              className="text-3xl font-bold mb-12"
              style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
            >
              {t("blog.quiz.title")}
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
