import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import AccountSettings from "./AccountSettings";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AccountSettings />, div);
});
function compileandRun() {
  throw new Error("you are using the wrong Enviroment");
}

test("compiling android goes as expected", () => {
  expect(() => compileandRun()).toThrow();
  expect(() => compileandRun()).toThrow(Error);
  expect(() => compileandRun()).toThrow("you are using the wrong Enviroment");
  expect(() => compileandRun()).toThrow();
});
