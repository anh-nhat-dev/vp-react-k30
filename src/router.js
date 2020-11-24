import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import OrderSuccess from "./pages/OrderSuccess";
import Search from "./pages/Search";

// Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Menu from "./components/layout/Menu";
import Slider from "./components/layout/Slider";
import SideBar from "./components/layout/SideBar";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <div id="body">
        <div className="container">
          <Menu />
          <div className="row">
            <div id="main" className="col-lg-8 col-md-12 col-sm-12">
              <Slider />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/404" exact component={NotFound} />
                <Route path="/cat-:slug.:id" exact component={Category} />
                <Route path="/p-:slug.:id" exact component={ProductDetail} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/order-success" exact component={OrderSuccess} />
                <Route path="/search" exact component={Search} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
            <SideBar />
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
