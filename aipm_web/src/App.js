import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { BACKGROUND_COLOR } from "./utils/constants/colors";
import AppAdmin from "./pages/Admin/AppAdmin";
import AppUsers from "./pages/Users/AppUsers";
function App() {
  const page = true;
  return (
    <Router>
      <div
        style={{ backgroundColor: `${BACKGROUND_COLOR}`, minHeight: "100vh" }}
      >
        {page ? <AppUsers /> : <AppAdmin />}
      </div>
    </Router>
  );
}

export default App;
