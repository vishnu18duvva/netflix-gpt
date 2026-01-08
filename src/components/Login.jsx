import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidateFormData from "../utils/Validation";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // References to get input values without re-rendering on every keystroke
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const handleButtonClick = () => {
    // 1. Extract values from refs
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = isSignInForm ? null : nameRef.current.value;

    // 2. Validate data using your utility function
    const message = checkValidateFormData(email, password, name);
    setErrorMessage(message);
    if (message) return; // Stop if there's a validation error
    // console.log(emailRef)
    // console.log(passwordRef);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null); // Clear errors when switching forms
  };

  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Background Image Wrapper */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_large.jpg"
          alt="banner"
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Login / Sign Up Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-black/75 p-16 text-white rounded-md"
      >
        <h1 className="font-bold text-3xl mb-7">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="p-4 mb-4 bg-zinc-800 w-full rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        )}

        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          className="p-4 mb-4 bg-zinc-800 w-full rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-4 mb-4 bg-zinc-800 w-full rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        {/* Dynamic Error Message Display */}
        {errorMessage && (
          <p className="text-red-500 font-bold text-sm py-2">{errorMessage}</p>
        )}

        <button
          className="bg-red-600 p-3 mt-6 w-full rounded font-semibold hover:bg-red-700 transition duration-200"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="mt-10 text-zinc-400">
          <span className="mr-1">
            {isSignInForm ? "New to Netflix?" : "Already have an account?"}
          </span>
          <span
            onClick={toggleSignInForm}
            className="text-white hover:underline cursor-pointer"
          >
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
