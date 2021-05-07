import React from 'react';
import './App.css';
import {Homepage} from "./pages/hompage.component";
import  { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/signin/sign-in-and-sign-up";

const PageNotFound = () => {
    return (
        <h1>This page could not be found!</h1>
    )
}

function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/signin' component={SignInAndSignUp} />
            <Route path='*'>
                <PageNotFound />
            </Route>
        </Switch>



    </div>
  );
}

export default App;
