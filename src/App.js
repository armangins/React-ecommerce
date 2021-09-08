import "./App.css";
import React from "react";
import HomePage from "../src/components/page-components/home-page/home.component";
import ShopPage from "../src/components/page-components/shop-page/shop.component";
import AuthPage from "../src/components/page-components/auth-page/auth.component";
import CheckOut from "../src/components/page-components/checkout-page/checkout.component";
import Header from "./components/header-component/header.component";

import { auth, createUserDoc } from "./firebase/firebaseConfig";
import { Redirect, Route, Switch } from "react-router";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-action";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

      const { setCurrentUser } = this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {


    //   if (userAuth) {
    //     const userRef = await createUserDoc(userAuth);
    //     userRef.onSnapshot((snapShot) => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data(),
    //       });
    //     });
    //   } else {
    //     setCurrentUser(userAuth);
    //   }
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProp = (dispatch) => {
  return {
    setCurrentUser: (user) => {
      dispatch(setCurrentUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(App);
