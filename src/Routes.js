import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';


import SinglePageScroll from './SinglePageScroll';


/** Renders Routes
 * 
 * 
 *  App -> { Navigation, SinglePageScroll }
 */
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SinglePageScroll />
        </Route>
        <Route exact path="/resume">
          <SinglePageScroll />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}