import React, { useEffect, useState } from "react";
import './Contact.css'
import {Row, Col} from 'reactstrap';

/**Renders a collection of components */
export default function Contact() {

  const contactInfo = [
    { site: "linkedin" }, 
    { site:"git"}];

  const contactBoxes = () => {
    let sites=[];
    for (let site of contactInfo){
      sites.push(
        <div className={`Tiny ${site} col-6`}>
          <p>{site.site}</p>
        </div>)}
    return sites;
  }

  return (
    <div className="Contact">
      <h3 className="col-4 mx-auto"> Contact me </h3>
      <div className="row">
        <div className="col-8">
          {contactBoxes()}
        </div>
        <div className="col-4">
          <p>tiny text tiny text tiny text tiny text tiny text tiny text tiny text tiny text tiny text tiny text </p>
        </div>
      </div>
      <small className="text-muted">Brought to you by 2020</small>
    </div>
  )
}