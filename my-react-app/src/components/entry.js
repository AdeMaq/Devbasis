import React from "react";
import { useNavigate } from "react-router-dom";

const Entry = () => {
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('loggedIn');
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>My App</h2>
        <button style={styles.logoutBtn} onClick={handleLogOut}>
          Logout
        </button>
      </nav>

      <div style={styles.card}>
        <h1 style={styles.title}>Welcome to My App</h1>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    background: "#0f172a",
    position: "relative",
  },

  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "60px",
    background: "#1e293b",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 30px",
    color: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  },

  logo: {
    margin: 0,
  },

  logoutBtn: {
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    background: "#ef4444",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },

  card: {
    background: "#1e293b",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
    width: "300px",
    color: "white",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  title: {
    marginBottom: "10px",
  },
};

export default Entry;
