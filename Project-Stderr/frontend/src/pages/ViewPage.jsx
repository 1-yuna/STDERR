// eslint-disable-next-line no-unused-vars
import React from "react";
import Background from "../components/Background";
import TopBar from "../components/Bar/TopBar.jsx";

function ViewPage() {
  return (
    <Background>
      <TopBar isBackBtn={true} />

      <h1>ViewPage</h1>
    </Background>
  );
}

export default ViewPage;
