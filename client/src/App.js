import React, { lazy, Suspense } from "react";
import { Routes, Route , useLocation } from "react-router-dom";
// import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

import "./App.scss";

// Page
const HomePage = lazy(() => import("./pages/home/home.component"));
const SearchPage = lazy(() => import("./pages/search/search.component"));

function App() {

  // Convert Search Params to props
  const searchParams = useLocation().search;
  const searchKeyword = new URLSearchParams(searchParams).get('search')

  return (
    // <BreadcrumbsProvider>
    <Suspense fallback={'Loading ...'}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage params={searchKeyword}/>} />
      </Routes>
    </Suspense>
    // </BreadcrumbsProvider>
  );
}

export default App;
