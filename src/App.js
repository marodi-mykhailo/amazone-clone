import React, {useEffect} from 'react';
import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import {auth} from "./firebase/firebase";
import {useStateValue} from "./StateProvider/StateProvider";
import Payment from "./Payment/Payment";
import {loadStripe} from "@stripe/stripe-js/";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders/Orders";

const promise = loadStripe('pk_test_51HPvXaGnxD8M48ZstPqlx611Nez2R9weuxYaPnOFpDG0FJzEPhR6l5MlG69hikwHKRPytBrCq1Xr6dPp1fqB8B9v00817DtHiW')

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        // will only run once when the app component loads...
        auth.onAuthStateChanged((authUser => {
            console.log("THE USER IS >>>", authUser);
            if (authUser) {
                // the user just logged in / the user was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                // the user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        }))
    }, [])
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path={'/login'}>
                        <Login/>
                    </Route>
                    <Route path={'/orders'}>
                        <Header/>
                        <Orders/>
                    </Route>
                    <Route path="/checkout">
                        <Header/>
                        <Checkout/>
                    </Route>
                    <Route path={'/payment'}>
                        <Header/>
                        <Elements stripe={promise}>
                            <Payment/>
                        </Elements>
                    </Route>
                    <Route path={'/'}>
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
