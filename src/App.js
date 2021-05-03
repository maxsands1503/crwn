import React from 'react';
import './App.css';
import {Homepage} from "./pages/hompage.component";
import  { Route, Switch } from "react-router-dom";

const HatsPage = () => {
    return (
        <h1>Hats Page</h1>
    )
}

const HatsDetailPage = props => {
    return (
        <h1>Hats Page {props.match.params.hatId}</h1>
    )
}

const PageNotFound = () => {
    return (
        <h1>This page could not be found!</h1>
    )
}

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/hats' component={HatsPage}/>
            <Route path='/hats/:hatId' component={HatsDetailPage}/>
            <Route path='*'>
                <PageNotFound />
            </Route>
        </Switch>



    </div>
  );
}

export default App;
