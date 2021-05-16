import React from 'react';
import './App.css';
import {Homepage} from "./pages/hompage.component";
import  { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/signin/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from "react-redux";
import { setCurrentUser } from './redux/user/user.actions';

const PageNotFound = () => {
    return (
        <h1>This page could not be found!</h1>
    )
}

class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {

        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if (userAuth) {
                const userRef = createUserProfileDocument(userAuth);
                (await userRef).onSnapshot(snapshot => setCurrentUser({
                    currentUser: {
                        id: snapshot.id,
                        ...snapshot.data()
                    }
                }))
            }
            setCurrentUser(userAuth)
        });
    }

    componentWillUnmount() {
        if (this.unsubscribeFromAuth) {
            this.unsubscribeFromAuth();
        }

    }

    render(){
        return(
            <div>
                <Header />
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

const mapDispactchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispactchToProps)(App);
