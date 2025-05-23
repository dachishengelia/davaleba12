import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn") === "true");

  useEffect(() => {
    const checkLogin = () => setLoggedIn(localStorage.getItem("loggedIn") === "true");
    checkLogin();

    window.addEventListener("storage", checkLogin);
    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn") === "true");
  }, [location]);

  return (
    <header style={styles.header}>
      <div style={styles.left} onClick={() => navigate("/")}>
        <h1 style={styles.logo}>
          Post<span style={{ color: "cyan" }}>s</span>
        </h1>
      </div>
      <div style={styles.right}>
        {!loggedIn && (
          <>
            <Link to="/log-in" style={styles.link}>
              <button style={styles.button}>Log in</button>
            </Link>
            <Link to="/sign-up" style={styles.link}>
              <button style={styles.button}>Sign up</button>
            </Link>
          </>
        )}
        <Link to="/profile" style={styles.link}>
          <button style={{ ...styles.button, padding: "0.4rem 0.6rem" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M16 16a4 4 0 0 0-8 0" />
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    borderBottom: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
  },
  left: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    margin: 0,
  },
  right: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  button: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "white",
  },
  link: {
    textDecoration: "none",
  },
};

export default Header;
