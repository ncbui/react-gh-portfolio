import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import Landing from './Landing';
import ProjectsList from './ProjectsList';
import About from './About';
import Experience from './Experience';

/** Renders Routes
 * 
 * 
 *  App -> { Navigation, SinglePageScroll }
 */
export default function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/about" >
          <About />
        </Route>
        <Route exact path="/projects" >
          <ProjectsList />
        </Route>
        <Route exact path="/exp" >
          <Experience />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}