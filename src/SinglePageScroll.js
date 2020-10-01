import React from "react";
import { useParams } from "react-router-dom";
// import './SingleScrollPage.css';
import Landing from './Landing';
import About from './About';
import Projects from './ProjectsList';
import Contact from './Footer';

/**Renders a collection of components 
 * 
 * App -> SinglePageScroll -> { 
 *                              Landing, 
 *                              About, 
 *                              Projects, 
 *                              Contacts }
*/
export default function SinglePageScroll() {

  const id = useParams();

  // TODO: if page accessed by url, jump to that section

  return (
    <div className="SinglePageScroll">
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  )}