import React, { useState } from "react";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/custom-button";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = (props) => {
    const [credential, setCredential] = useState({
        email: "",
        password: "",
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = credential;
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        }
        const emptyCred = { email: "", password: "" };

        setCredential(emptyCred);
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
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In Wtih Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
