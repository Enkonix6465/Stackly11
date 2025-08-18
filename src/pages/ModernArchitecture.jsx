import React, { useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext.jsx';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import designProcess from '../assets/modernArchitecture.jpg'; // You may replace this with a relevant design process image

const ModernArchitecture = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'The Modern Architecture Design Process | Vision Builders';
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#002346] text-white' : 'bg-white text-[#002346]'} flex flex-col transition-colors duration-300`}>
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={onLogout} />
      </div>
      <main className="flex-grow max-w-4xl mx-auto p-8 pt-0">
        <article>
          <img src={designProcess} alt="Modern Architecture Design Process" className="w-full max-h-96 object-cover rounded-xl mb-8 mt-20" />
          <h1 className="text-4xl font-bold mb-4 mt-4 md:mt-0">The Modern Architecture Design Process</h1>
          <p className="mb-1 font-semibold">Ar. Rahul Verma</p>
          <p className="mb-6 text-sm">July 24, 2025</p>

          <section className="prose max-w-none dark:prose-invert space-y-6">
            <p>
              Understanding the step-by-step architecture design process is key to realizing your vision for a functional and beautiful space. This guide covers what to expect from concept to completion.
            </p>

            <h2>Concept Development</h2>
            <p>
              We start by understanding your needs, site conditions, and budget to create initial sketches and concepts that reflect your vision and sustainability goals.
            </p>

            <h2>Design & Planning</h2>
            <p>
              Our architects refine the design with detailed drawings, 3D models, and material selection. We collaborate closely with you to ensure each detail meets your expectations.
            </p>

            <h2>Permits & Approvals</h2>
            <p>
              Preparing all necessary documentation, coordinating with regulatory authorities, and obtaining building permits to ensure your project complies with local laws and safety codes.
            </p>

            <h2>Construction & Management</h2>
            <p>
              We oversee construction, coordinating contractors and suppliers, managing timelines and budgets, and ensuring quality control throughout the build.
            </p>

            <h2>Final Review & Handover</h2>
            <p>
              After completion, we conduct thorough inspections and walk-throughs to ensure your project is delivered to the highest standards and your satisfaction.
            </p>

            <h2>Tips for a Successful Project</h2>
            <ul className="list-disc list-inside">
              <li>Maintain clear and regular communication with your architect and builder</li>
              <li>Be proactive about budget considerations and potential changes</li>
              <li>Document decisions and approvals at every stage</li>
              <li>Prioritize sustainable and energy-efficient features</li>
            </ul>

            <p>
              Our experienced team at Vision Builders is dedicated to guiding you through every phase of your architectural journey, ensuring a smooth, transparent, and rewarding experience. Contact us today to start planning your dream project.
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

export default ModernArchitecture;
