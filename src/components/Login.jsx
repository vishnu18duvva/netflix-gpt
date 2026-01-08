import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const ToggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Background Wrapper */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_large.jpg"
          alt="banner"
        />
        {/* Added Overlay to darken the background image */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Login Form */}
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-black/45 p-16 text-white rounded-md">
        <h1 className="font-bold text-3xl mb-7">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 mb-4 bg-zinc-800 w-full rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 mb-4 bg-zinc-800 w-full rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 mb-4 bg-zinc-800 w-full rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        {!isSignInForm && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-4 mb-4 bg-zinc-800 w-full rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        )
          
        }

        <button className="bg-red-600 p-3 mt-6 w-full rounded font-semibold hover:bg-red-700 transition duration-200">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="mt-10 text-zinc-400">
          <span className="mr-1">{isSignInForm ? "New to Netflix?" : "Already have an account?"}</span>
          <span
            onClick={ToggleSignInForm}
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
