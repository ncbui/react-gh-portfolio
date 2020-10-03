import React, { useEffect, useState } from "react";
import {
  Container
} from 'reactstrap';
import './Footer.css'

import portfolioApi from "./Api";

/**Renders a collection of components */
export default function Footer() {

  const [info, setInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let res = await portfolioApi.getContactInfo();
      setInfo(res);
    };
    fetchData();
  }, []);



  return (
    <div className="Footer fixed-bottom">
      <Container fluid className="Footer-container col-12">
        <div className="Footer-contact col-12 col-md-6 mr-auto text-left">
        <p className="col-6 mr-auto">
             Animation as counterbalance to the toggling-animation of the top-right menu. Can be purely for funsies.
        </p>
        </div>
        <div className="Footer-notes col-12 col-md-6 mr-auto text-right">
          <small className="Footer-notes-text">
            fuck the system and also hire me plz
          </small>
        </div>
      </Container>
    </div>
  )
}