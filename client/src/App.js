import React, { lazy, Suspense , useEffect} from "react";

import { Routes, Route, useLocation , Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";

import "./App.scss";

// Page
const HomePage = lazy(() => import("./pages/home/home.component"));
const SearchPage = lazy(() => import("./pages/search/search.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.container"));
const LoginRegisterpage = lazy(() => import('./pages/login-register/login-register.component'));
const CartPage = lazy(() => import('./pages/cart/cart.component'));

// Components

const App = ({checkCurrentUser , currentUser}) => {
  // Convert Search Params to props
  const searchParams = useLocation().search;
  const searchKeyword = new URLSearchParams(searchParams).get("search");

  useEffect(() => {
    checkCurrentUser();
  } , [checkCurrentUser])
  return (
    // <BreadcrumbsProvider>
      <Suspense fallback={"Loading ..."}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/search"
            element={<SearchPage params={searchKeyword} />}
          />
          <Route path="login" element={currentUser ? <Navigate to={"/account"} /> :<LoginRegisterpage/>}/>
          <Route path="/shop/*" element={<ShopPage />} />
          <Route path="/cart" exact element={<CartPage/>}/>
        </Routes>
      </Suspense>
    // </BreadcrumbsProvider>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkCurrentUser:() => dispatch(checkUserSession())
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
