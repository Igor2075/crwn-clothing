import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
} from "./header.styles";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = ({ currentUser, isHidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                {currentUser ? (
                    <OptionLink as="div" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to="/signin">SIGN IN</OptionLink>
                )}

                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                <CartIcon />
            </OptionsContainer>
            {!isHidden && <CartDropdown />}
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
