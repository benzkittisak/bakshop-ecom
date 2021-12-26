import React from "react";
import { Routes, Route } from "react-router-dom";
// import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

import './App.scss';

// Page
import HomePage from "./pages/home/home.component";
function App() {
  return (
    // <BreadcrumbsProvider>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    // </BreadcrumbsProvider>
  );
}

export default App;
