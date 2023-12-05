import "./app.css";

import React from "react";
import ReactDOM from "react-dom";

import Popover from "./popover";

function App() {
  return (
    <>
      <header>
        <span className="title">Next-Popover-React</span>
        <div className="btn-row">
          <a
            className="btn"
            href="https://github.com/lyove/next-popover-react"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Github
          </a>
          <a
            className="btn pri"
            href="https://lyove.github.io/next-popover-react/"
            target="_blank"
            rel="noreferrer"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </header>
      <div className="feature">
        <div className="description">
          <p className="txt">
            Next-Popover is a lightweight and powerful popover plugin with vanillaJS. Simple,
            modern, and highly customizable.
          </p>
        </div>
      </div>
      <div className="main-content">
        <div className="demo-box">
          <br />
          <br />
          <p style={{ textAlign: "center" }}>
            <Popover content="next-popver" placement="right" emit="hover">
              <button className="trigger-btn">Hover</button>
            </Popover>
          </p>
          <p style={{ textAlign: "center" }}>
            <Popover content="next-popver2" placement="bottom">
              <button className="trigger-btn">Click</button>
            </Popover>
          </p>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading">
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("app"),
);
