import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signOut } from "firebase/auth";

import { auth } from "../utils/firebase";

import { toggleGptSearch } from "../store/gptSlice";
import { LOGO, HEADER_BUTTONS } from "../constants/constants";
import LanguageSelector from "./LanguageSelector";

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

  return (
    <div className="absolute flex justify-between w-screen z-30 px-4 lg:px-10 py-1 bg-gradient-to-b from-black">
      <div className="flex gap-10">
        <img className="w-20 mr-12 lg:w-32" src={LOGO} alt="logo" />
        {user.isAuthenticated && (
          <div className="gap-6 hidden lg:flex">
            {HEADER_BUTTONS.map((button) => (
              <button
                key={button}
                className="text-gray-300 text-sm font-light hover:text-white"
              >
                {button}
              </button>
            ))}
          </div>
        )}
      </div>
      {user.isAuthenticated && (
        <>
          <div className="flex items-center gap-4">
            {showGPTSearch && <LanguageSelector />}
            <button
              onClick={handleGPTSearchClick}
              className="py-2 px-1 lg:px-3 bg-transparent text-gray-300 text-sm font-light hover:bg-white hover:text-black hover:font-semibold rounded-lg lg:mr-2"
            >
              {showGPTSearch ? "Go Home" : "GPT Search"}
            </button>
            <img
              src={user?.user.photoURL}
              alt="user-image"
              className="w-12 rounded-4xl hidden lg:block"
            />
            <button
              onClick={handleSignOut}
              className="text-gray-300 text-sm font-light"
            >
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
