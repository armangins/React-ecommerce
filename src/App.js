import "./App.css";
import React from "react";
import HomePage from "./Pages/homePage/homepage.component";
import ShopPage from "./Pages/shopPage/shop-page.component";
import Header from "./components/header-component/header.component";
import AuthPage from "./Pages/authPage/auth.component";
import { auth, createUserDoc } from "./firebase/firebaseConfig";
import { Route, Switch } from "react-router";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }


  unsubscribeFromAuth = null;

  componentDidMount() {
    // returns user Auth object
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {

      if (userAuth) {
        const userRef = await createUserDoc(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          })
        });
console.log(this.state);
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

<div>
  <Header></Header>
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/shop" component={ShopPage} />
    <Route path="/auth" component={AuthPage} />
  </Switch>
</div>;
