import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import designProcess from "../assets/modernArchitecture.jpg";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext.jsx";

const ModernArchitecture = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();

  const navigate = useNavigate();

  const { t } = useTranslation();
  useEffect(() => {
    document.title = t("modernArchitecture.metaTitle");
  }, [t]);

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-[#002346] text-white" : "bg-white text-[#002346]"} flex flex-col transition-colors duration-300`}
    >
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          user={user}
          onLogout={onLogout}
        />
      </div>
      <main className="flex-grow max-w-4xl mx-auto p-8 pt-0">
        <article>
          <img
            src={designProcess}
            alt="Modern Architecture Design Process"
            className="w-full max-h-96 object-cover rounded-xl mb-8 mt-20"
          />
          <h1 className="text-4xl font-bold mb-4 mt-4 md:mt-0">
            {t("modernArchitecture.title")}
          </h1>
          <p className="mb-1 font-semibold">{t("modernArchitecture.author")}</p>
          <p className="mb-6 text-sm">{t("modernArchitecture.date")}</p>

          <section className="prose max-w-none dark:prose-invert space-y-6">
            <p>{t("modernArchitecture.intro")}</p>

            <h2>{t("modernArchitecture.conceptTitle")}</h2>
            <p>{t("modernArchitecture.conceptText")}</p>

            <h2>{t("modernArchitecture.designTitle")}</h2>
            <p>{t("modernArchitecture.designText")}</p>

            <h2>{t("modernArchitecture.permitsTitle")}</h2>
            <p>{t("modernArchitecture.permitsText")}</p>

            <h2>{t("modernArchitecture.constructionTitle")}</h2>
            <p>{t("modernArchitecture.constructionText")}</p>

            <h2>{t("modernArchitecture.finalTitle")}</h2>
            <p>{t("modernArchitecture.finalText")}</p>

            <h2>{t("modernArchitecture.tipsTitle")}</h2>
            <ul className="list-disc list-inside">
              <li>{t("modernArchitecture.tips.0")}</li>
              <li>{t("modernArchitecture.tips.1")}</li>
              <li>{t("modernArchitecture.tips.2")}</li>
              <li>{t("modernArchitecture.tips.3")}</li>
            </ul>

            <p>{t("modernArchitecture.outro")}</p>
          </section>
          <button
            onClick={() => navigate(-1)}
            className="mt-10 px-6 py-3 bg-[#B57560] text-white rounded shadow hover:bg-[#8c5448] transition"
          >
            &#8592; {t("Back")}
          </button>
        </article>
      </main>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default ModernArchitecture;
