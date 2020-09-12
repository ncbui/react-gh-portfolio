import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import './SingleScrollPage.css';
import Landing from './Landing';
import About from './About';
import Projects from './ProjectsList';
import Contact from './Contact';

/**Renders a collection of components 
 * 
 * App -> SinglePageScroll -> { 
 *                              Landing, 
 *                              About, 
 *                              Projects, 
 *                              Contacts }
*/
export default function SinglePageScroll() {

  return (
    <div className="SinglePageScroll">
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  )}