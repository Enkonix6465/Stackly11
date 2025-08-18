import React from 'react';
import { useDarkMode } from '../context/DarkModeContext.jsx';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import renovationImage from '../assets/renovation.jpg'; // Replace with a relevant renovation image

const Renovation = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#002346] text-white' : 'bg-white text-[#002346]'} flex flex-col transition-colors duration-300`}>
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={onLogout} />
      </div>
      <main className="flex-grow max-w-4xl mx-auto p-8 pt-0">
        <article>
          <img src={renovationImage} alt="Home Renovation Tips and Best Practices" className="w-full max-h-96 object-cover rounded-xl mb-8 mt-20" />
          <h1 className="text-4xl font-bold mb-4">Renovations: Essential Tips and Best Practices</h1>
          <p className="mb-1 font-semibold">Ar. Sneha Nair</p>
          <p className="mb-6 text-sm">July 15, 2025</p>

          <section className="prose max-w-none dark:prose-invert space-y-6">
            <p>
              Renovating your home or commercial space can be a rewarding yet complex endeavor. Understanding the key strategies and best practices helps ensure a successful project.
            </p>
            <h2>Understanding Renovation Scope</h2>
            <p>
              Renovations can range from simple cosmetic upgrades to major structural changes. Defining the scope early on will guide design choices and budgeting.
            </p>
            <h2>Planning Common Renovation Challenges</h2>
            <ul className="list-disc list-inside">
              <li><strong>Structural Limitations:</strong> Assessing load-bearing walls and foundation constraints.</li>
              <li><strong>Permitting Requirements:</strong> Securing local permits and approvals before work begins.</li>
              <li><strong>Material Selection:</strong> Choosing durable, sustainable, and period-appropriate materials.</li>
              <li><strong>Timeline Management:</strong> Coordinating contractors and deliveries to stay on schedule.</li>
              <li><strong>Budget Control:</strong> Planning for unexpected costs and contingencies.</li>
            </ul>
            <h2>The Role of Expert Guidance</h2>
            <p>
              Experienced architects and project managers can foresee pitfalls, recommend innovative solutions, and ensure your renovation enhances both value and livability.
            </p>
            <p>
              Contact Vision Builders to get expert advice and professional renovation services built around your needs and aspirations.
            </p>
          </section>
          <button
            onClick={() => navigate(-1)}
            className="mt-10 px-6 py-3 bg-[#B57560] text-white rounded shadow hover:bg-[#8c5448] transition"
          >
            &#8592; Back
          </button>
        </article>
      </main>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Renovation;
