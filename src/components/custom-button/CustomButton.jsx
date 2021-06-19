import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherPops }) => {
    return (
        <button className="custom-button" {...otherPops}>
            {children}
        </button>
    );
};

export default CustomButton;
