import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import SinglePageScroll from './SinglePageScroll';
import Navigation from './Navigation'

/** Renders App
 * 
 * 
 *  App -> { Navigation, SinglePageScroll }
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <SinglePageScroll />
          </Route>
          <Route exact path="/about" >
            <SinglePageScroll />
          </Route>
          <Route exact path="/projects" >
            <SinglePageScroll />
          </Route>
          <Route exact path="/contact" >
            <SinglePageScroll />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
