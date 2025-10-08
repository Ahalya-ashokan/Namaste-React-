import React from "react";
import ReactDOM from "react-dom"

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "h1 tag od child1"),
    React.createElement("h2", {}, "h2 tag of child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1 tag of child2"),
    React.createElement("h2", {}, "h2 tag of child2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React using external js "
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
