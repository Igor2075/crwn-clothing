import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import "./sign-in.styles.scss";

const SignIn = (props) => {
    const [credential, setCredential] = useState({
        email: "",
        password: "",
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(credential);

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
                <CustomButton type="submit">Sign In</CustomButton>
            </form>
        </div>
    );
};

export default SignIn;
