import "./App.css";
import React from "react";
import HomePage from "../src/components/page-components/home-page/home.component";
import ShopPage from "../src/components/page-components/shop-page/shop.component";
import AuthPage from "../src/components/page-components/auth-page/auth.component";
import CheckOut from "../src/components/page-components/checkout-page/checkout.component";
import Header from "./components/header-component/header.component";

import { Redirect, Route, Switch } from "react-router";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { checkUser } from "./redux/user/user-action";

class App extends React.Component {


  componentDidMount() {
    const { checkUser } = this.props;
    checkUser()
  }

  componentWillUnmount() {
 
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckOut} />
          {/* if the is a user logged in the we redirect him back to main page */}
          <Route
            exact
            path="/auth"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <AuthPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps  =dispatch=>({
  checkUser:()=>dispatch(checkUser())
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
