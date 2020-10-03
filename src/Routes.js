import React from "react";
import { Route, Switch } from "react-router-dom";
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
        <Route>
          <h3>Oops, found a dead end</h3>
        </Route>
      </Switch>
  );
}