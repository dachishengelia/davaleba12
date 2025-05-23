import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
      alert("Username must not contain symbols.");
      return;
    }

    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }


    localStorage.setItem("loggedIn", "true");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 border rounded shadow-sm"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded shadow-sm"
        />

        <button
          type="submit"
          className="w-full p-3 bg-white border border-cyan-500 text-cyan-500 font-semibold rounded hover:bg-cyan-100 transition"
        >
          Confirm
        </button>

        <p className="mt-4 text-sm text-gray-600 text-center">
          Don’t have an account?{" "}
          <Link to="/sign-up" className="text-cyan-600 hover:underline">
            Click here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
