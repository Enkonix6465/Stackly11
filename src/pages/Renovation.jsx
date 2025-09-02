import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import renovationImage from "../assets/renovation.jpg";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext.jsx";

const Renovation = ({ user, onLogout }) => {
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
            src={renovationImage}
            alt="Home Renovation Tips and Best Practices"
            className="w-full max-h-96 object-cover rounded-xl mb-8 mt-20"
          />
          <h1 className="text-4xl font-bold mb-4">
            {t("renovationPage.title")}
          </h1>
          <p className="mb-1 font-semibold">{t("renovationPage.author")}</p>
          <p className="mb-6 text-sm">{t("renovationPage.date")}</p>

          <section className="prose max-w-none dark:prose-invert space-y-6">
            <p>{t("renovationPage.intro")}</p>

            <h2>{t("renovationPage.scopeTitle")}</h2>
            <p>{t("renovationPage.scopeText")}</p>

            <h2>{t("renovationPage.challengesTitle")}</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>{t("renovationPage.challenges.0.title")}</strong>{" "}
                {t("renovationPage.challenges.0.text")}
              </li>
              <li>
                <strong>{t("renovationPage.challenges.1.title")}</strong>{" "}
                {t("renovationPage.challenges.1.text")}
              </li>
              <li>
                <strong>{t("renovationPage.challenges.2.title")}</strong>{" "}
                {t("renovationPage.challenges.2.text")}
              </li>
              <li>
                <strong>{t("renovationPage.challenges.3.title")}</strong>{" "}
                {t("renovationPage.challenges.3.text")}
              </li>
              <li>
                <strong>{t("renovationPage.challenges.4.title")}</strong>{" "}
                {t("renovationPage.challenges.4.text")}
              </li>
            </ul>

            <h2>{t("renovationPage.expertTitle")}</h2>
            <p>{t("renovationPage.expertText")}</p>
            <p>{t("renovationPage.outro")}</p>
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

export default Renovation;
