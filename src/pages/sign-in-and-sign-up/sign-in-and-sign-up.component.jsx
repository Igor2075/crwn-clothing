import React from "react";

import SignIn from "../../components/sign-in/signin";
import SignUp from "../../components/sign-up/singup";

import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";

const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
