import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import Header from "./Header";
import { checkValidData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../store/userSlice";
import { BG_IMG } from "../constants/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    //SignIn / SignUp logic

    if (!isSignInForm) {
      // Call SignUp API

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/110713536?v=4",
          })
            .then(() => {
              // Profile updated! Dispatch the action with the updated user.
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage("Profile update failed: " + error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Call SignIn API
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInBtn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src={BG_IMG}
          alt="bg-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute z-20 w-full md:w-4/12 lg:w-3/12 p-12 bg-black opacity-85 my-36 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-[#333] rounded-md border border-gray-500"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full bg-[#333] rounded-md border border-gray-500"
        />

        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-[#333] rounded-md border border-gray-500"
        />
        {errorMessage ? (
          <p className="text-red-800 text-sm font-semibold py-2">
            {errorMessage}
          </p>
        ) : (
          <></>
        )}
        <button
          onClick={handleButtonClick}
          className="p-3 my-6 w-full bg-red-600 rounded-md font-bold cursor-pointer"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInBtn}>
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
