// App.jsx
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import LogoWithRipples from "./components/LogoWithRipples";
import HomePage from "./pages/HomePage";
import AuthCard from "./pages/AuthCardPage";
import SignInForm from "./pages/SignInPage";
import SignUpForm from "./pages/SignUpPage";
import EmailVerificationPage from "./pages/EmailVarificationPage";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // ✅ redirect to signup after 2s
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-full h-screen bg-white dark:bg-black flex justify-center items-center">
      <LogoWithRipples />
    </div>
  );
}

function App() {
  return (
    <>
      <ToastContainer position="top-center" theme="colored" />

      <Router>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/auth" element={<AuthCard />} />
          <Route path="/auth/signin" element={<SignInForm />} />
          <Route path="/auth/signup" element={<SignUpForm />} />
          <Route path="/verify" element={<EmailVerificationPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
