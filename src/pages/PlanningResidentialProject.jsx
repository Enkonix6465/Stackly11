import React from 'react';
import { useDarkMode } from '../context/DarkModeContext.jsx';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import projectPlanning from '../assets/residentialProject.jpg'; // Replace with an appropriate image for project planning

const PlanningResidentialProject = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#002346] text-white' : 'bg-white text-[#002346]'} flex flex-col transition-colors duration-300`}>
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={onLogout} />
      </div>
      <main className="flex-grow max-w-4xl mx-auto p-8 pt-0">
        <article>
          <img src={projectPlanning} alt="Planning Your Residential Project" className="w-full max-h-96 object-cover rounded-xl mb-8 mt-20" />
          <h1 className="text-4xl font-bold mb-4">Planning Your Residential Project: A Comprehensive Guide</h1>
          <p className="mb-1 font-semibold">Ar. Priya Sharma</p>
          <p className="mb-6 text-sm">August 1, 2025</p>

          <section className="prose max-w-none dark:prose-invert space-y-6">
            <p>
              Successfully planning a residential construction project requires thorough understanding and careful preparation. Here’s a guide to help you navigate the process.
            </p>
            <p>
              Whether building a new home or renovating an existing space, attention to detail at each stage ensures your vision comes to life smoothly and within budget.
            </p>
            <h2>Setting Your Goals and Budget</h2>
            <p>
              Clearly define your project goals including style preferences, functional needs, and budget constraints to guide the design and construction phases.
            </p>
            <h2>Working with Architects and Engineers</h2>
            <p>
              Collaborate with professionals to develop detailed plans, structural calculations, and material selections tailored specifically for your site and requirements.
            </p>
            <h2>Obtaining Permits and Approvals</h2>
            <p>
              Ensure all necessary permits are secured from local authorities before construction begins to comply with regulations and avoid delays.
            </p>
            <h2>Project Timeline and Management</h2>
            <p>
              Establish realistic schedules, monitor progress regularly, and maintain communication with your construction team to handle challenges efficiently.
            </p>
            <h2>Tips for a Smooth Project</h2>
            <ul className="list-disc list-inside">
              <li>Keep a detailed record of decisions and approvals</li>
              <li>Prioritize sustainable and energy-efficient design choices</li>
              <li>Maintain flexibility for adjustments along the way</li>
              <li>Engage a reliable project manager or builder for professional oversight</li>
            </ul>
            <p>
              Our expert team at Vision Builders is ready to support you throughout every step of your residential project planning and execution. Contact us for personalized consultation and guidance.
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

export default PlanningResidentialProject;
