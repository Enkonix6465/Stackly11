import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import logo1 from '../assets/logo1.png';

const Footer = ({ darkMode, bgColor }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer
      className={` ${darkMode ? 'bg-[#002346] text-[#F8F4E3]' : 'text-[#333333]'} px-6 py-10 font-sans transition-colors duration-300 overflow-x-hidden w-full`}
      style={!darkMode && bgColor ? { background: bgColor } : undefined}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Logo */}
        <div className="col-span-1 flex items-start">
          <div className="w-28 h-28 flex items-center justify-center overflow-hidden">
            <img src={logo1} alt="Vision Builders Logo" className="w-52 h-52 object-contain" style={{ filter: 'grayscale(100%) brightness(0.5) sepia(1) hue-rotate(160deg) saturate(4) contrast(1.2)' }} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-[#F8F4E3]' : 'text-[#002346]'}`}>Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/home" className={`${darkMode ? 'text-[#F8F4E3] hover:text-[#F8F4E3]' : 'text-[#333333] hover:text-[#002346]'} hover:underline`}>Home</Link></li>
            <li><Link to="/about" className={`${darkMode ? 'text-[#F8F4E3] hover:text-[#F8F4E3]' : 'text-[#333333] hover:text-[#002346]'} hover:underline`}>About Us</Link></li>
            <li><Link to="/blog" className={`${darkMode ? 'text-[#F8F4E3] hover:text-[#F8F4E3]' : 'text-[#333333] hover:text-[#002346]'} hover:underline`}>Blog</Link></li>
            <li><Link to="/contact" className={`${darkMode ? 'text-[#F8F4E3] hover:text-[#F8F4E3]' : 'text-[#333333] hover:text-[#002346]'} hover:underline`}>Contact Us</Link></li>
            <li><Link to="/services" className={`${darkMode ? 'text-[#F8F4E3] hover:text-[#F8F4E3]' : 'text-[#333333] hover:text-[#002346]'} hover:underline`}>Services</Link></li>
          </ul>
        </div>

        {/* Services (instead of Practice Areas) */}
        <div>
          <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-[#F8F4E3]' : 'text-[#002346]'}`}>Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/residential-projects" className={`${darkMode ? 'text-[#F8F4E3]' : 'text-[#333333]'} hover:underline`}>Residential Projects</Link></li>
            <li><Link to="/services/commercial-complexes" className={`${darkMode ? 'text-[#F8F4E3]' : 'text-[#333333]'} hover:underline`}>Commercial Complexes</Link></li>
            <li><Link to="/services/industrial-facilities" className={`${darkMode ? 'text-[#F8F4E3]' : 'text-[#333333]'} hover:underline`}>Industrial Facilities</Link></li>
            <li><Link to="/services/interior-design" className={`${darkMode ? 'text-[#F8F4E3]' : 'text-[#333333]'} hover:underline`}>Interior Design</Link></li>
            <li><Link to="/services/urban-planning" className={`${darkMode ? 'text-[#F8F4E3]' : 'text-[#333333]'} hover:underline`}>Urban Planning</Link></li>
            <li><Link to="/services/renovation-restoration" className={`${darkMode ? 'text-[#F8F4E3]' : 'text-[#333333]'} hover:underline`}>Renovation & Restoration</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-[#F8F4E3]' : 'text-[#002346]'}`}>Contact Us</h4>
          <p className="text-sm">
            <span className={`font-semibold ${darkMode ? 'text-[#F8F4E3]' : 'text-[#002346]'}`}>Address:</span> <span className={darkMode ? 'text-[#F8F4E3]' : 'text-[#333333]'}>123 Skyline Avenue, Design City</span><br />
            <span className={`font-semibold ${darkMode ? 'text-[#F8F4E3]' : 'text-[#002346]'}`}>Phone:</span> <span className={darkMode ? 'text-[#F8F4E3]' : 'text-[#333333]'}>(123) 456-7890</span><br />
            <span className={`font-semibold ${darkMode ? 'text-[#F8F4E3]' : 'text-[#002346]'}`}>Email:</span> <span className={darkMode ? 'text-[#F8F4E3]' : 'text-[#333333]'}>info@visionbuilders.com</span><br />
            <span className={`font-semibold ${darkMode ? 'text-[#F8F4E3]' : 'text-[#002346]'}`}>Hours:</span> <span className={darkMode ? 'text-[#F8F4E3]' : 'text-[#333333]'}>Mon–Fri, 9 AM – 6 PM</span>
          </p>
          <div className="flex space-x-3 mt-2 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF color="#002346" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn color="#002346" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram color="#002346" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter color="#002346" /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-[#F8F4E3]' : 'text-[#002346]'}`}>Newsletter</h4>
          <p className={`text-sm mb-2 ${darkMode ? 'text-[#F8F4E3]' : 'text-[#333333]'}`}>
            Stay updated with the latest trends in architecture and construction.
          </p>
          <form className="flex flex-col" onSubmit={handleSubscribe}>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={`w-full px-3 py-2 rounded-l border text-sm ${darkMode ? 'border-[#F8F4E3] bg-[#002346] text-[#F8F4E3]' : 'border-[#002346] bg-[#F8F4E3] text-[#333333]'}`}
                required
              />
              <button type="submit" className={`px-4 py-2 rounded-r text-sm transition-colors ${darkMode ? 'bg-[#F8F4E3] text-[#002346] hover:bg-[#333333] hover:text-[#F8F4E3]' : 'bg-[#002346] text-[#F8F4E3] hover:bg-[#333333] hover:text-[#F8F4E3]'}`}> 
                Subscribe
              </button>
            </div>
            {subscribed && (
              <span className={`mt-2 text-xs font-semibold ${darkMode ? 'text-[#F8F4E3]' : 'text-[#002346]'}`}>Subscribed!</span>
            )}
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t mt-10 pt-4 text-center text-sm ${darkMode ? 'border-[#F8F4E3] text-[#F8F4E3]' : 'border-[#002346] text-[#333333]'}`}>
        <p>© 2025 Vision Builders. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
