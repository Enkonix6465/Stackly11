/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

import {
  PieChart,
  Users,
  FileText,
  Calendar,
  TrendingUp,
  FolderOpen,
  ArrowRight,
  Upload,
  PlusCircle,
} from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useTranslation } from "react-i18next";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
);

export default function AdminDashboard({ user, onLogout }) {
  // Always get latest user logins and registered users from localStorage
  const [userLogins, setUserLogins] = React.useState([]);
  const [registeredUsers, setRegisteredUsers] = React.useState([]);

  useEffect(() => {
    const fetchUserData = () => {
      let logins = JSON.parse(localStorage.getItem("userLogins") || "[]");
      logins = logins.map((l) => ({
        ...l,
        role:
          l.email === "admin@enkonix.in" || l.name === "Admin"
            ? "Admin"
            : "User",
      }));
      const uniqueLogins = [];
      const seen = new Set();
      for (const entry of logins) {
        const key = `${entry.email}-${entry.event}-${entry.loginDate}-${entry.loginTime}`;
        if (!seen.has(key)) {
          uniqueLogins.push(entry);
          seen.add(key);
        }
      }
      setUserLogins(uniqueLogins);
      setRegisteredUsers(
        JSON.parse(localStorage.getItem("registeredUsers") || "[]"),
      );
    };
    fetchUserData();
    window.addEventListener("storage", fetchUserData);
    window.addEventListener("focus", fetchUserData);
    return () => {
      window.removeEventListener("storage", fetchUserData);
      window.removeEventListener("focus", fetchUserData);
    };
  }, []);
  const { darkMode, setDarkMode } = useDarkMode();
  const COLOR_1 = "#002346";
  const COLOR_2 = "#F8F4E3";
  const COLOR_3 = "#333333";
  const { t } = useTranslation();
  const textPrimary = darkMode ? COLOR_2 : COLOR_3;
  const cardBg = darkMode ? COLOR_3 : COLOR_2;

  // Chart data - same logic
  const firmOverviewData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Active Projects",
        data: [27, 51, 72, 38, 94, 102],
        borderColor: COLOR_1,
        backgroundColor: darkMode ? "#fff" : "rgba(0,35,70,0.08)",
        tension: 0.4,
        pointRadius: 3,
      },
      {
        label: "Completed Projects",
        data: [13, 26, 38, 16, 29, 42],
        borderColor: COLOR_3,
        backgroundColor: darkMode ? "#fff" : "rgba(51,51,51,0.04)",
        borderDash: [3, 2],
        tension: 0.4,
        pointRadius: 2,
      },
    ],
  };

  const financialCardData = [
    { label: t("adminDashboard.designProposals"), value: 16, color: COLOR_3 },
    { label: t("adminDashboard.projectsInProgress"), value: 4, color: COLOR_3 },
    { label: t("adminDashboard.pendingApprovals"), value: 0, color: COLOR_3 },
    { label: t("adminDashboard.delayedProjects"), value: 2, color: COLOR_3 },
    { label: t("adminDashboard.upcomingHandovers"), value: 0, color: COLOR_3 },
  ];

  const statsByCountry = {
    labels: ["UK", "CANADA", "USA", "AUS", "BD"],
    datasets: [
      {
        label: "Projects Delivered",
        data: [182, 240, 320, 210, 78],
        backgroundColor: darkMode ? "#fff" : COLOR_1,
        borderWidth: 2,
      },
    ],
  };

  // Pie chart for utilization, realization, collection (leave as is; not shown in this code)
  const usagePieData = (value, label, color) => ({
    labels: [label, "Remaining"],
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: [color, COLOR_2],
        borderWidth: 0,
      },
    ],
  });

  // Sample recent invoice list (renamed for architecture context)
  const recentInvoices = [
    { client: t("adminDashboard.invoiceClients.0"), status: "Paid" },
    { client: t("adminDashboard.invoiceClients.1"), status: "Pending" },
    { client: t("adminDashboard.invoiceClients.2"), status: "Paid" },
    { client: t("adminDashboard.invoiceClients.3"), status: "Unpaid" },
  ];

  return (
    <div
      style={{ background: darkMode ? COLOR_1 : COLOR_2, minHeight: "100vh" }}
    >
      {/* Header */}
      <div
        style={{
          background: darkMode ? COLOR_3 : COLOR_2,
          boxShadow: "0 2px 8px 0 #00234611",
        }}
        className="fixed top-0 left-0 w-full z-10"
      >
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      </div>

      <main className="pt-28 max-w-7xl mx-auto px-2 md:px-6">
        {/* User Login Info Section */}
        <section className="mb-8">
          <div
            className="rounded-2xl shadow-md p-6 mb-4"
            style={{ background: cardBg }}
          >
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: textPrimary }}
            >
              {t("adminDashboard.userLoginActivity")}
            </h2>
            <div className="flex flex-wrap gap-8 items-center mb-2">
              <div
                className="text-lg font-semibold"
                style={{ color: textPrimary }}
              >
                {t("adminDashboard.totalRegisteredUsers")}:{" "}
                <span className="font-bold">{registeredUsers.length}</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table
                className="w-full text-left text-sm"
                style={{ color: textPrimary }}
              >
                <thead>
                  <tr>
                    <th className="py-2">{t("adminDashboard.email")}</th>
                    <th className="py-2">{t("adminDashboard.name")}</th>
                    <th className="py-2">{t("adminDashboard.role")}</th>
                    <th className="py-2">{t("adminDashboard.time")}</th>
                    <th className="py-2">{t("adminDashboard.date")}</th>
                    <th className="py-2">{t("adminDashboard.event")}</th>
                  </tr>
                </thead>
                <tbody>
                  {userLogins.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="py-4 text-center">
                        {t("adminDashboard.noUserLogins")}
                      </td>
                    </tr>
                  ) : (
                    userLogins
                      .slice()
                      .reverse()
                      .map((login, idx) => (
                        <tr
                          key={idx}
                          className="border-t"
                          style={{ borderColor: "#EEE" }}
                        >
                          <td className="py-2">{login.email}</td>
                          <td className="py-2">{login.name}</td>
                          <td className="py-2">{login.role}</td>
                          <td className="py-2">{login.loginTime}</td>
                          <td className="py-2">{login.loginDate}</td>
                          <td className="py-2">
                            {login.event === "signup" ? "Signup" : "Login"}
                            {login.event === "signup"
                              ? t("adminDashboard.signup")
                              : t("adminDashboard.login")}
                          </td>
                        </tr>
                      ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* Top Grid - Utilization Stats */}
        <section className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
          {financialCardData.map((card, idx) => (
            <div
              key={card.label}
              className="rounded-xl shadow p-4 flex flex-col items-center"
              style={{
                background: darkMode ? "#333333" : "#F8F4E3",
                border: `2px solid ${card.color}`,
                minHeight: 110,
              }}
            >
              <FileText
                size={26}
                style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
              />
              <span
                className="text-2xl font-extrabold mt-2"
                style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
              >
                {card.value}
              </span>
              <span
                className="text-xs font-semibold mt-1 text-center"
                style={{
                  color: darkMode ? "#F8F4E3" : "#333333",
                  opacity: 0.85,
                }}
              >
                {card.label}
              </span>
            </div>
          ))}
        </section>

        {/* Firm Overview Row */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Firm Overview Bar Chart */}
          <div
            className="rounded-2xl shadow-md p-4 col-span-2"
            style={{ background: cardBg }}
          >
            <div className="flex justify-between items-center mb-3">
              <span
                className="font-bold text-lg"
                style={{ color: textPrimary }}
              >
                {t("adminDashboard.firmProjectOverview")}
              </span>
              <span
                className="text-xs font-semibold"
                style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
              >
                {t("adminDashboard.ongoingProjects")}: 13.6%
              </span>
            </div>
            <Bar
              data={firmOverviewData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: true,
                    labels: { color: darkMode ? "#F8F4E3" : "#333333" },
                  },
                },
                scales: {
                  x: { ticks: { color: darkMode ? "#F8F4E3" : "#333333" } },
                  y: { ticks: { color: darkMode ? "#F8F4E3" : "#333333" } },
                },
              }}
              height={110}
            />
            <div
              className="text-right text-xs mt-2"
              style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            >
              {t("adminDashboard.activeProjects", { count: 54 })} |{" "}
              {t("adminDashboard.completedProjects", { count: 235 })}
            </div>
          </div>

          {/* Client Locations Map */}
          <div
            className="rounded-2xl shadow-md p-4 flex flex-col items-center"
            style={{
              background: cardBg,
              minHeight: "220px",
              justifyContent: "center",
            }}
          >
            <span
              className="font-bold text-lg mb-2"
              style={{ color: textPrimary }}
            >
              Project Locations
            </span>
            <div className="w-full flex justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/300px-World_map_-_low_resolution.svg.png"
                alt="Projects Map"
                style={{ maxWidth: 180, opacity: 0.7, borderRadius: 10 }}
              />
            </div>
            <div className="flex gap-5 mt-3">
              <span className="flex items-center text-xs">
                <span
                  className="w-2 h-2 mr-1 rounded-full"
                  style={{ background: COLOR_1 }}
                />{" "}
                Active
              </span>
              <span
                className="flex items-center text-xs"
                style={{ color: COLOR_3, opacity: 0.7 }}
              >
                <span
                  className="w-2 h-2 mr-1 rounded-full"
                  style={{
                    background: COLOR_2,
                    border: `1.5px solid ${COLOR_3}`,
                  }}
                />{" "}
                Non-active
              </span>
            </div>
          </div>
        </section>

        {/* Country Statistics & Invoice Table */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-14">
          {/* By Country Bar Chart */}
          <div
            className="rounded-2xl shadow-md p-4"
            style={{ background: cardBg }}
          >
            <span
              className="font-bold text-md mb-2 block"
              style={{ color: textPrimary }}
            >
              {t("adminDashboard.projectsByCountry")}
            </span>
            <Bar
              data={statsByCountry}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: false },
                  title: { display: false },
                },
                scales: {
                  x: { ticks: { color: darkMode ? "#F8F4E3" : "#333333" } },
                  y: { ticks: { color: darkMode ? "#F8F4E3" : "#333333" } },
                },
              }}
              height={110}
            />
            <div
              className="text-right mt-3 text-xs font-semibold"
              style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            >
              {t("adminDashboard.projectsDeliveredGlobally", { count: 1129 })}
            </div>
          </div>

          {/* Recent Invoice Table */}
          <div
            className="rounded-2xl shadow-md p-4"
            style={{ background: cardBg }}
          >
            <span
              className="font-bold text-md mb-2 block"
              style={{ color: textPrimary }}
            >
              {t("adminDashboard.recentProjectInvoices")}
            </span>
            <table
              className="w-full text-left text-xs"
              style={{ color: textPrimary }}
            >
              <thead>
                <tr>
                  <th>{t("adminDashboard.clientName")}</th>
                  <th>{t("adminDashboard.status")}</th>
                </tr>
              </thead>
              <tbody>
                {recentInvoices.map((row, i) => (
                  <tr
                    key={i}
                    className="border-t"
                    style={{ borderColor: "#EEE" }}
                  >
                    <td className="py-2">{row.client}</td>
                    <td>
                      {row.status === "Paid" && (
                        <span style={{ color: "green" }}>
                          {t("adminDashboard.paid")}
                        </span>
                      )}
                      {row.status === "Pending" && (
                        <span style={{ color: "orange" }}>
                          {t("adminDashboard.pending")}
                        </span>
                      )}
                      {row.status === "Unpaid" && (
                        <span style={{ color: "red" }}>
                          {t("adminDashboard.unpaid")}
                        </span>
                      )}
                      {/*  */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Project Overview & Quick Actions */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Total Projects Card */}
          <div
            className="rounded-2xl shadow-md p-6 flex flex-col items-center"
            style={{
              background: cardBg,
              color: darkMode ? "#F8F4E3" : "#333333",
            }}
          >
            <FolderOpen size={36} />
            <div className="font-bold text-2xl mt-2">13,183</div>
            <div
              className="uppercase font-semibold mt-1"
              style={{ fontSize: 12, color: darkMode ? "#F8F4E3" : "#333333" }}
            >
              {t("adminDashboard.totalProjects")}
            </div>
          </div>
          {/* Completed Projects Card */}
          <div
            className="rounded-2xl shadow-md p-6 flex flex-col items-center"
            style={{
              background: cardBg,
              color: darkMode ? "#F8F4E3" : "#333333",
            }}
          >
            <FileText size={36} />
            <div className="font-bold text-2xl mt-2">3,410</div>
            <div className="uppercase font-semibold" style={{ fontSize: 12 }}>
              {t("adminDashboard.completedProjectsLabel")}
            </div>
          </div>
          {/* Clients Card */}
          <div
            className="rounded-2xl shadow-md p-6 flex flex-col items-center"
            style={{
              background: cardBg,
              color: darkMode ? "#F8F4E3" : "#333333",
            }}
          >
            <Users size={36} />
            <div className="font-bold text-2xl mt-2">921</div>
            <div className="uppercase font-semibold" style={{ fontSize: 12 }}>
              {t("adminDashboard.clientsServed")}
            </div>
          </div>
        </section>
      </main>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
