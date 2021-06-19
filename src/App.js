import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import SignInSignUp from "./pages/sign-in-sign-up/SignInSignUp";
import Header from "./components/header/Header";
import { auth } from "./firebase/firebase.utils";

/* function onAuthStateChange(callback) {
    return auth().onAuthStateChanged((user) => {
        if (user) {
            callback({ loggedIn: true });
        } else {
            callback({ loggedIn: false });
        }
    });
} */

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            console.log(user);
        });
    }, []);
    return (
        <div>
            <Header currentUser={currentUser} />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/signin" component={SignInSignUp} />
            </Switch>
        </div>
    );
}

export default App;
