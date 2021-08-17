import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/custom-button";

import {
    googleSignInStart,
    emailSignInStart,
} from "../../redux/user/user.actions";
import "./sign-in.styles.scss";

const SignIn = (props) => {
    const { googleSignInStart, emailSignInStart } = props;
    const [credential, setCredential] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = credential;
        emailSignInStart(email, password);
    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        setCredential((prevState) => ({ ...prevState, [name]: value }));
    };
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    label="email"
                    value={credential.email}
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={credential.password}
                    handleChange={handleChange}
                    label="password"
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton
                        type="button"
                        onClick={googleSignInStart}
                        isGoogleSignIn
                    >
                        Sign In Wtih Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
