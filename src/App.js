import React from "react";
import HomePage from "./Pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch } from "react-router";
import ShopPage from "./Pages/shop-page/shop-page.component";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
