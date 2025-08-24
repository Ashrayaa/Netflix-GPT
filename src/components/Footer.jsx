import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const links = [
    ["Audio Description", "Investor Relations", "Legal Notices"],
    ["Help Centre", "Jobs", "Cookie Preferences"],
    ["Gift Cards", "Terms of Use", "Corporate Information"],
    ["Media Centre", "Privacy", "Contact Us"],
  ];

  return (
    <footer className="bg-black text-gray-400 py-12 mt-auto">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex space-x-4 mb-8 text-2xl">
          <a href="https://www.facebook.com/netflix" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/netflix" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/netflix" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com/netflix" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
          {links.map((column, colIndex) => (
            <ul key={colIndex} className="space-y-3">
              {column.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <p className="text-xs mt-8">© 2025 Netflix Clone, Ashraya.</p>
      </div>
    </footer>
  );
};

export default Footer;
