import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51JBp23JiXMBrYy36dloMRB1MG3M8gjwfvNcEXsKMvu6k62PruC8X9egiPFDtucY8NmwlfCAIlKN1TY1TKzu8XkAf00JSDqpire";
    const onToken = (token) => {
        console.log(token);
        alert("Payment Successful");
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="Brosmatics Ltd"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/en/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
