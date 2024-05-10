// eslint-disable-next-line no-unused-vars
import React from "react";
import HamburgerBar from "../components/Bar/HamburgerBar.jsx";
import Background from "../components/Background";

function HomePage() {
  return (
    <Background>
      <HamburgerBar />
      <h1>Home</h1>
    </Background>
  );
}

export default HomePage;
