import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn !== "true") {
      navigate("/log-in");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/log-in");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-2">Welcome!</h1>
      <p className="text-gray-600 font-semibold mb-6">This is your account.</p>
      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 transition"
      >
        Log Out
      </button>
    </div>
  );
};

export default Profile;
