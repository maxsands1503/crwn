import React from 'react';
import './App.css';
import {Homepage} from "./pages/hompage.component";
import  { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/signin/sign-in-and-sign-up";
import { auth } from './firebase/firebase.utils';

const PageNotFound = () => {
    return (
        <h1>This page could not be found!</h1>
    )
}

class App extends React.Component {

    unsubscribeFromAuth = null;

    constructor() {
        super();
        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            console.log(user)
            this.setState({currentUser: user});
        })
    }

    componentWillUnmount() {
        if (this.unsubscribeFromAuth) {
            this.unsubscribeFromAuth();
        }

    }

    render(){
        return(
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route exact path='/shop' component={Shop}/>
                    <Route exact path='/signin' component={SignInAndSignUp}/>
                    <Route path='*'>
                        <PageNotFound/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App;
