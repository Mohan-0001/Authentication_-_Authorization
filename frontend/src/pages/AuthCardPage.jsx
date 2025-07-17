// components/AuthCard.jsx
import { useState } from "react";
import SignInForm from "./SignInPage";
import SignUpForm from "./SignUpPage";

const AuthCard = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="flex w-full max-w-4xl bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2 hidden md:flex flex-col items-center justify-center p-10 bg-gradient-to-br from-[#3d348b] to-[#00509d] text-white text-center">
          <h2 className="text-3xl font-bold mb-2">
            {isSignIn ? "Hello, Friend!" : "Welcome Back!"}
          </h2>
          <p className="mb-6">
            {isSignIn
              ? "Enter your personal details and start your journey with us"
              : "To keep connected with us please login with your personal info"}
          </p>
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#3d348b] transition"
          >
            {isSignIn ? "SIGN UP" : "SIGN IN"}
          </button>
        </div>

        <div className="w-full md:w-1/2 p-6">
          {isSignIn ? (
            <SignInForm onSwitch={() => setIsSignIn(false)} />
          ) : (
            <SignUpForm onSwitch={() => setIsSignIn(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
