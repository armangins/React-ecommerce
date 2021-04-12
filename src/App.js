import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";

import HomePage from "./Pages/homePage/homepage.component";
import ShopPage from "./Pages/shopPage/shop-page.component";
import Header from './components/header-component/header.component';
import AuthPage from './Pages/authPage/auth.component';

function App() {
  return (
    <div>
<Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/shop" component={ShopPage} />
        <Route  path="/auth" component={AuthPage} />
      </Switch>
    </div>
  );
}

export default App;
