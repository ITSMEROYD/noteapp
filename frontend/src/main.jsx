import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AddButtonToast from "./pages/Home/AddButton&Toast.jsx"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AddButtonToast>
      <App />
    </AddButtonToast>
  </React.StrictMode>
);
