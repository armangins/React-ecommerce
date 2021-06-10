import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebaseConfig';
import { connect } from 'react-redux';
import CartIcon from '../cart/cart-icon/cart-icon.component';
import CartDropDown from '../cart/cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (

    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contacts">Contact</Link>
            {
                currentUser ?
                    <span className="option signout" onClick={() => auth.signOut()} >Sign out</span>
                    :
                    <Link className="option" to="/auth">Login</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null :
                <CartDropDown />
        }
    </div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden,
})

export default connect(mapStateToProps)(Header);