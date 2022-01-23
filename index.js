// old
//const React = require("react");

// new way to do the same as above
import React from "react";

// old
// const ReactDOM = require("react-dom");

// new way to do the same as above
import ReactDOM from "react-dom";

// rendering a single element into the root div (render = single element)
// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

// rendeing multiple elements as one element by putting in a <div>
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);
