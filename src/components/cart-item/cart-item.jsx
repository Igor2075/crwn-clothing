import React from "react";
// import "./cart-item.styles.scss";
import {
    CartItemContainer,
    ImageContainer,
    ItemDetailsContainer,
    NameContainer,
    PriceContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <CartItemContainer>
            <ImageContainer src={imageUrl} alt="item" />
            <ItemDetailsContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>
                    {quantity} x ${price}
                </PriceContainer>
            </ItemDetailsContainer>
        </CartItemContainer>
    );
};

export default CartItem;
