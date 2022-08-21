import React from "react";
import "./App.css";
import Home from "./component/pages/form";
import NotFound from "./component/pages/notFound";
import MainLayout from "./component/mainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <MainLayout>
      <Router>
        <Routes>
          <Route path="/inter-form" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </MainLayout>
  );
}

export default App;
