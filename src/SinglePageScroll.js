import React from "react";
import Landing from './Landing';
import About from './About';
import ProjectsList from './ProjectsList';
import ProjectsShort from './ProjectsShort';
import Navigation from './Navigation';

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
      <Navigation />
      <ProjectsShort />
      <About />
    </div>
  )
}