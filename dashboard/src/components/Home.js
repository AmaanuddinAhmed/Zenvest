import React, { useState, useEffect } from "react";
import api from "../api";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    api.get("/users").then((res) => {
      setIsLoggedIn(res.data.status);
      if (res.data.status) setUsername(res.data.user);
    });
  }, []);

  if (isLoggedIn === null) {
    return <p style={{ padding: "2em" }}>Loading...</p>;
  }

  if (isLoggedIn === false) {
    window.location.href =
      process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000/login";
    return null;
  }

  return (
    <>
      <TopBar username={username} />
      <Dashboard />
    </>
  );
};

export default Home;
