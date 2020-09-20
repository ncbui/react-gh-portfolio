import React from "react";
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
        <main>
        <Switch>
          <Route exact path="/">
            <SinglePageScroll />
          </Route>
          <Route exact path="/:id" >
            <SinglePageScroll />
          </Route>
          <Route>
            <h3>Oops, found a dead end</h3>
          </Route>
        </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}
