import React from "react";
import './App.css';

import Footer from './Footer';
import Routes from './Routes';
import Navigation from './Navigation';
import { Container } from "reactstrap";
import SinglePageScroll from './SinglePageScroll';

/** Renders App
 * 
 * 
 *  App -> { Navigation, SinglePageScroll }
 */
export default function App() {
  return (
      <Container fluid className="App">
        <main>
        <Routes />
        </main>
        <Footer />
      </Container>
  );
}