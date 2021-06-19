import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherPops }) => {
    return (
        <button
            className={`${
                isGoogleSignIn ? "google-sign-in" : ""
            } custom-button`}
            {...otherPops}
        >
            {children}
        </button>
    );
};

export default CustomButton;
