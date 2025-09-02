import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import projectPlanning from "../assets/residentialProject.jpg";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext.jsx";

const PlanningResidentialProject = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const { t } = useTranslation();

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
            src={projectPlanning}
            alt="Planning Your Residential Project"
            className="w-full max-h-96 object-cover rounded-xl mb-8 mt-20"
          />
          <h1 className="text-4xl font-bold mb-4">
            {t("planningResidential.title")}
          </h1>
          <p className="mb-1 font-semibold">
            {t("planningResidential.author")}
          </p>
          <p className="mb-6 text-sm">{t("planningResidential.date")}</p>

          <section className="prose max-w-none dark:prose-invert space-y-6">
            <p>{t("planningResidential.intro1")}</p>
            <p>{t("planningResidential.intro2")}</p>

            <h2>{t("planningResidential.goalsTitle")}</h2>
            <p>{t("planningResidential.goalsText")}</p>

            <h2>{t("planningResidential.architectsTitle")}</h2>
            <p>{t("planningResidential.architectsText")}</p>

            <h2>{t("planningResidential.permitsTitle")}</h2>
            <p>{t("planningResidential.permitsText")}</p>

            <h2>{t("planningResidential.timelineTitle")}</h2>
            <p>{t("planningResidential.timelineText")}</p>

            <h2>{t("planningResidential.tipsTitle")}</h2>
            <ul className="list-disc list-inside">
              <li>{t("planningResidential.tips.0")}</li>
              <li>{t("planningResidential.tips.1")}</li>
              <li>{t("planningResidential.tips.2")}</li>
              <li>{t("planningResidential.tips.3")}</li>
            </ul>

            <p>{t("planningResidential.outro")}</p>
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

export default PlanningResidentialProject;
