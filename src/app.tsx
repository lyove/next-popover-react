import "./app.css";

import React from "react";
import ReactDOM from "react-dom";

import Popover from "./component";

function App() {
  return (
    <div className="app">
      <p>Next-Popover-React</p>
      <Popover content="next-popver">
        <button>Popover Demo</button>
      </Popover>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading">
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root"),
);
