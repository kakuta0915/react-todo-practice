import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

// ReactDOMをインポートし、render関数を呼び出す
// render関数は画面を表示するための関数
// StrictModeは潜在的なエラーをコンソールに出力する
