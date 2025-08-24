import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signOut } from "firebase/auth";

import { auth } from "../utils/firebase";

import { toggleGptSearch } from "../store/gptSlice";
import { changeLanguage } from "../store/configSlice";

import { SUPPORTED_LANGUAGES } from "../constants/languageConstants";
import { LOGO } from "../constants/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGPTSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute flex justify-between w-screen z-30 px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-44" src={LOGO} alt="logo" />
      {user.isAuthenticated && (
        <div className="flex items-center gap-4">
          {showGPTSearch && (
            <select
              className="bg-transparent cursor-pointer text-white border border-gray-300 rounded-md px-2 py-1"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGPTSearchClick}
            className="py-2 px-3 bg-transparent text-white hover:bg-white hover:text-black texxt-2xl font-semibold rounded-lg mr-2"
          >
            {showGPTSearch ? "Go Home" : "GPT Search"}
          </button>
          <img
            src={user?.user.photoURL}
            alt="user-image"
            className="w-12 rounded-4xl"
          />
          <button onClick={handleSignOut} className="text-white font-semibold">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
