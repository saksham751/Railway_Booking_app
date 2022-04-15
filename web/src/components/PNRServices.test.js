import React from "react";
import ReactDOM from "react-dom";
import PNRServices from "./PNRServices";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PNRServices />, div);
});
