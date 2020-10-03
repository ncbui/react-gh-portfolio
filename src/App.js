import React from "react";
import './App.css';

import Footer from './Footer';
import Routes from './Routes';
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
          <Routes />
        </main>
        <Footer />
      </div>
  );
}