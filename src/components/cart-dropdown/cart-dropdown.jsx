import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartIsHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";

import {
    CartDropDownContainer,
    EmptyMessageSpan,
    CartItemsContainer,
    ButtonContainer,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
    const onClickHandler = () => {
        history.push("/checkout");
        dispatch(toggleCartIsHidden());
    };
    return (
        <CartDropDownContainer>
            <CartItemsContainer>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <EmptyMessageSpan>Your cart is empty</EmptyMessageSpan>
                )}
            </CartItemsContainer>
            {cartItems.length && (
                <ButtonContainer>
                    <CustomButton onClick={onClickHandler}>
                        GO TO CHECKOUT
                    </CustomButton>
                </ButtonContainer>
            )}
        </CartDropDownContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
