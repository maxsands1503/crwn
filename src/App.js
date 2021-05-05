import React from 'react';
import './App.css';
import {Homepage} from "./pages/hompage.component";
import  { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";
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
            <Route path='*'>
                <PageNotFound />
            </Route>
        </Switch>



    </div>
  );
}

export default App;
