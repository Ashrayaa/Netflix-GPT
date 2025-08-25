import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../store/configSlice";
import { SUPPORTED_LANGUAGES } from "../constants/languageConstants";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const currentLang = useSelector((store) => store.config.lang);

  const handleLanguageChange = (lang) => {
    dispatch(changeLanguage(lang));
    setIsOpen(false);
  };

  const selectedLanguageName = SUPPORTED_LANGUAGES.find(
    (lang) => lang.identifier === currentLang
  )?.name;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-transparent cursor-pointer text-gray-400 border border-gray-400 rounded-md px-2 py-1 flex items-center"
      >
        {selectedLanguageName}
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-black bg-opacity-80 border border-gray-500 rounded-md shadow-lg">
          <ul>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <li
                key={lang.identifier}
                onClick={() => handleLanguageChange(lang.identifier)}
                className={`px-4 py-2 text-gray-400 cursor-pointer hover:bg-gray-700 ${
                  currentLang === lang.identifier
                    ? "font-light lg:font-bold"
                    : ""
                }`}
              >
                {currentLang === lang.identifier && (
                  <span className="mr-2">✓</span>
                )}
                {lang.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
