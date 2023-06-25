import React from "react";
import ListView from "./ListView";

const App = () => {
  return (
    <div style={bodystyle}>
      <h1 style={heading}>GREENDZINE TECHNOLOGIES PVT LTD</h1>
      <h3 style={tagline}>Intern Assessment : </h3>
      <ListView />
    </div>
  );
};

const bodystyle = {
  backgroundColor: "lightgreen",
  borderradius: "35px",
  borderstyle: "solid",
  padding: "3%",
};
const heading = {
  color: "black",
  marginLeft: "25%",
};
const tagline = {
  color: "black",
  marginLeft: "25%",
};

export default App;
