import "./App.css";
import React from "react";
import HomePage from "./Pages/homePage/homepage.component";
import ShopPage from "./Pages/shopPage/shop-page.component";
import Header from "./components/header-component/header.component";
import AuthPage from "./Pages/authPage/auth.component";
import { auth, createUserDoc } from "./firebase/firebaseConfig";
import { Redirect, Route, Switch } from "react-router";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-action";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      const { setCurrentUser } = this.props;

      if (userAuth) {
        const userRef = await createUserDoc(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
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

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    setCurrentUser: (user) => {
      dispatch(setCurrentUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(App);
