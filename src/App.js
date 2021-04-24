import "./App.css";
import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "./Pages/homePage/homepage.component";
import ShopPage from "./Pages/shopPage/shop-page.component";
import Header from "./components/header-component/header.component";
import AuthPage from "./Pages/authPage/auth.component";
import { auth, createUserDoc } from "./firebase/firebaseConfig";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDoc(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          },()=>{
            console.log(this.state);
          })
        });
      } else {
        this.setState({ currentUSer: userAuth });
      }
    });
  }
  o;

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
