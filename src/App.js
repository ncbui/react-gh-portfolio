import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
// import SinglePageScroll from './SinglePageScroll';

import Landing from './Landing';
import ProjectsList from './ProjectsList';
import About from './About';
import Experience from './Experience';
import Footer from './Footer';
import Navigation from './Navigation';

/** Renders App
 * 
 * 
 *  App -> { Navigation, SinglePageScroll }
 */
export default function App() {
  return (
      <div className="App">
        <Navigation />
        <main>
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
        </main>
        <Footer />
      </div>
  );
}