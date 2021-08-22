import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebaseConfig";
import { connect } from "react-redux";
import CartIcon from "../cart/cart-icon/cart-icon.component";
import CartDropDown from "../cart/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { cartHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contacts">Contact</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>Sign out</OptionDiv>
        ) : (
          <OptionLink to="/auth">Login</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: cartHidden,
});

export default connect(mapStateToProps)(Header);
