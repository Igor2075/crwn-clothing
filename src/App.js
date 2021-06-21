import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import SignInSignUp from "./pages/sign-in-sign-up/SignInSignUp";
import Header from "./components/header/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data(),
                        },
                    });
                });
            } else {
                setCurrentUser({ currentUser: userAuth });
            }
        });
        return () => {
            unsubscribe();
        };
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
