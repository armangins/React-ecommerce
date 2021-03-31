import React from "react";
import HomePage from "./Pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch } from "react-router";
import ShopPage from "./Pages/shop-page/shop-page.component";
import Header from './components/header-component/header.component'

function App() {
  return (
    <div>
<Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
