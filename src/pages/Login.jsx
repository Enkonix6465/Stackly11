/* eslint-disable no-unused-vars */
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../assets/login.jpg";
import logo from "../assets/logo1.png";
import { useDarkMode } from "../context/DarkModeContext";

const ADMIN_EMAIL = "admin@enkonix.in";
const ADMIN_PASSWORD = "admin123";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useDarkMode();
  const [isSignup, setIsSignup] = useState(false);
  const [isForgot, setIsForgot] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    adminEmail: "",
    adminPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Helper to log any event to localStorage in a consistent format
  const logUserEvent = (email, name, event) => {
    const now = new Date();
    const newLog = {
      email,
      name,
      loginTime: now.toLocaleTimeString(),
      loginDate: now.toLocaleDateString(),
      event, // 'login' or 'signup'
    };
    const logins = JSON.parse(localStorage.getItem("userLogins") || "[]");
    logins.push(newLog);
    localStorage.setItem("userLogins", JSON.stringify(logins));
  };

  // USER LOGIN
  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    const found = users.find(
      (u) => u.email === formData.email && u.password === formData.password,
    );

    if (
      formData.email === ADMIN_EMAIL ||
      formData.password === ADMIN_PASSWORD
    ) {
      alert("These credentials are reserved for admin.");
      return;
    }
    if (!found) {
      alert("No such user registered. Please sign up first.");
      return;
    }

    const fullName = `${found.firstName} ${found.lastName}`;
    logUserEvent(found.email, fullName, "login");

    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        firstName: found.firstName,
        lastName: found.lastName,
        email: found.email,
      }),
    );

    onLogin({
      firstName: found.firstName,
      lastName: found.lastName,
      email: found.email,
    });
    navigate("/home");
  };

  // USER SIGNUP
  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (
      formData.email === ADMIN_EMAIL ||
      formData.password === ADMIN_PASSWORD
    ) {
      alert("These credentials are reserved for admin.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    if (users.some((u) => u.email === formData.email)) {
      alert("User already registered. Please login.");
      return;
    }

    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };
    users.push(userData);
    localStorage.setItem("registeredUsers", JSON.stringify(users));

    logUserEvent(
      userData.email,
      `${userData.firstName} ${userData.lastName}`,
      "signup",
    );

    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
      }),
    );

    const { password, ...loginUser } = userData;
    onLogin(loginUser);
    navigate("/home");
  };

  // USER FORGOT PASSWORD
  const handleForgotPassword = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    if (users.some((u) => u.email === formData.email)) {
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      };
      users.push(userData);
      localStorage.setItem("registeredUsers", JSON.stringify(users));
    }
    setIsSignup(false);
  };

  // ADMIN LOGIN
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (
      formData.adminEmail === ADMIN_EMAIL &&
      formData.adminPassword === ADMIN_PASSWORD
    ) {
      logUserEvent(ADMIN_EMAIL, "Admin", "login");

      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          firstName: "Admin",
          lastName: "",
          email: ADMIN_EMAIL,
        }),
      );

      onLogin({ email: ADMIN_EMAIL, isAdmin: true });
      navigate("/admin-dashboard");
    } else {
      alert("Invalid admin credentials!");
    }
  };

  return (
    <div
      className="min-h-screen w-screen flex items-center justify-center transition duration-300 relative"
      style={{
        backgroundImage: darkMode
          ? `linear-gradient(120deg, rgba(15,23,42,0.95) 0%, rgba(51,65,85,0.95) 100%), url(${login})`
          : `linear-gradient(120deg, rgba(34,193,195,0.7) 0%, rgba(253,187,45,0.7) 100%), url(${login})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`backdrop-blur-lg bg-white/30 dark:bg-[#0f172a]/80 border border-white/40 dark:border-[#334155]/60 shadow-2xl p-10 rounded-2xl w-full max-w-lg mx-auto relative z-10`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2
            className={`text-3xl font-bold tracking-tight ${darkMode ? "text-[#e0e7ff]" : "text-[#002346]"}`}
          >
            {isAdmin ? "Admin Login" : isSignup ? "Sign Up" : "Login"}
          </h2>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className={`flex items-center rounded-full px-4 py-2 shadow-md ${darkMode ? "bg-[#334155] text-[#e0e7ff]" : "bg-[#B57560] text-white"} hover:scale-105 transition-transform border border-transparent dark:border-[#64748b]`}
            aria-label="Toggle dark mode"
          >
            <Sun size={18} className="mr-2 text-white" />{" "}
            <span className="font-bold">/</span>{" "}
            <Moon size={18} className="ml-2 text-black" />
          </button>
        </div>
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="Login Background"
            className="w-30 h-auto cursor-pointer"
          />
        </div>

        {/* User/Admin TOGGLE */}
        <div className="flex items-center justify-center mb-8 gap-4">
          <span
            className={`${!isAdmin ? "font-bold underline text-[#002346] dark:text-[#e0e7ff]" : "text-gray-400 dark:text-gray-500"} cursor-pointer px-3 py-1 rounded transition-colors hover:bg-[#e0e7ff] dark:hover:bg-[#334155]`}
            onClick={() => setIsAdmin(false)}
          >
            User
          </span>
          <span className="mx-2 text-gray-400 font-bold dark:text-gray-500">
            |
          </span>
          <span
            className={`${isAdmin ? "font-bold underline text-[#002346] dark:text-[#e0e7ff]" : "text-gray-400 dark:text-gray-500"} cursor-pointer px-3 py-1 rounded transition-colors hover:bg-[#e0e7ff] dark:hover:bg-[#334155]`}
            onClick={() => setIsAdmin(true)}
          >
            Admin
          </span>
        </div>

        {/* ADMIN FORM */}
        {isAdmin ? (
          <form onSubmit={handleAdminLogin} className="space-y-6">
            <input
              type="email"
              name="adminEmail"
              placeholder="Admin Email"
              value={formData.adminEmail}
              onChange={handleInputChange}
              required
              autoComplete="username"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-[#64748b] bg-white/80 dark:bg-[#1e293b]/80 text-gray-900 dark:text-[#e0e7ff] focus:outline-none focus:ring-2 focus:ring-[#002346] dark:focus:ring-[#64748b]"
            />
            <input
              type="password"
              name="adminPassword"
              placeholder="Admin Password"
              value={formData.adminPassword}
              onChange={handleInputChange}
              required
              autoComplete="current-password"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-[#64748b] bg-white/80 dark:bg-[#1e293b]/80 text-gray-900 dark:text-[#e0e7ff] focus:outline-none focus:ring-2 focus:ring-[#002346] dark:focus:ring-[#64748b]"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#002346] to-[#1a3b6f] dark:from-[#334155] dark:to-[#64748b] text-white py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Login as Admin
            </button>
          </form>
        ) : // USER FORM
        !isSignup ? (
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              autoComplete="username"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-[#64748b] bg-white/80 dark:bg-[#1e293b]/80 text-gray-900 dark:text-[#e0e7ff] focus:outline-none focus:ring-2 focus:ring-[#002346] dark:focus:ring-[#64748b]"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
              autoComplete="current-password"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-[#64748b] bg-white/80 dark:bg-[#1e293b]/80 text-gray-900 dark:text-[#e0e7ff] focus:outline-none focus:ring-2 focus:ring-[#002346] dark:focus:ring-[#64748b]"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#002346] to-[#1a3b6f] dark:from-[#334155] dark:to-[#64748b] text-white py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Login
            </button>
          </form>
        ) : !isForgot ? (
          <form onSubmit={handleSignup} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-[#64748b] bg-white/80 dark:bg-[#1e293b]/80 text-gray-900 dark:text-[#e0e7ff] focus:outline-none focus:ring-2 focus:ring-[#002346] dark:focus:ring-[#64748b]"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-[#64748b] bg-white/80 dark:bg-[#1e293b]/80 text-gray-900 dark:text-[#e0e7ff] focus:outline-none focus:ring-2 focus:ring-[#002346] dark:focus:ring-[#64748b]"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-[#64748b] bg-white/80 dark:bg-[#1e293b]/80 text-gray-900 dark:text-[#e0e7ff] focus:outline-none focus:ring-2 focus:ring-[#002346] dark:focus:ring-[#64748b]"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-[#64748b] bg-white/80 dark:bg-[#1e293b]/80 text-gray-900 dark:text-[#e0e7ff] focus:outline-none focus:ring-2 focus:ring-[#002346] dark:focus:ring-[#64748b]"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-[#64748b] bg-white/80 dark:bg-[#1e293b]/80 text-gray-900 dark:text-[#e0e7ff] focus:outline-none focus:ring-2 focus:ring-[#002346] dark:focus:ring-[#64748b]"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#002346] to-[#1a3b6f] dark:from-[#334155] dark:to-[#64748b] text-white py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Sign Up
            </button>
          </form>
        ) : (
          <form onSubmit={handleForgotPassword} className="space-y-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-[#64748b] bg-white/80 dark:bg-[#1e293b]/80 text-gray-900 dark:text-[#e0e7ff] focus:outline-none focus:ring-2 focus:ring-[#002346] dark:focus:ring-[#64748b]"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-[#64748b] bg-white/80 dark:bg-[#1e293b]/80 text-gray-900 dark:text-[#e0e7ff] focus:outline-none focus:ring-2 focus:ring-[#002346] dark:focus:ring-[#64748b]"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#002346] to-[#1a3b6f] dark:from-[#334155] dark:to-[#64748b] text-white py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Reset Password
            </button>
          </form>
        )}

        {!isAdmin && (
          <div className="mt-6 text-sm text-center text-[#002346] dark:text-[#e0e7ff]">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <span
                  className="underline cursor-pointer text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold"
                  onClick={() => setIsSignup(false)}
                >
                  Login
                </span>
              </>
            ) : (
              <>
                Don&apos;t have an account?{" "}
                <div>
                  <span
                    className="underline cursor-pointer text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold"
                    onClick={() => {
                      setIsSignup(true);
                      setIsForgot(false);
                    }}
                  >
                    Sign up
                  </span>
                </div>
                <br />
                <span
                  className="underline cursor-pointer text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 font-semibold block mt-2"
                  onClick={() => {
                    setIsForgot(true);
                    setIsSignup(true);
                  }}
                >
                  Forgot password?
                </span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
