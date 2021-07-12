import React from "react";
import SignIn from "../../components/sign-in/signin";
import SignUp from "../../components/sign-up/singup";
import "./sign-in-sign-up.styles.scss";

const SignInSignUp = (props) => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SignInSignUp;
