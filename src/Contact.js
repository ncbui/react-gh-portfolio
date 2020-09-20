import React, { useEffect, useState } from "react";
import './Contact.css'

import portfolioApi from "./Api";

/**Renders a collection of components */
export default function Contact() {

  const [info, setInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let res = await portfolioApi.getContactInfo();
      setInfo(res);
    };
    fetchData();
  }, []);

  const contactBoxes = () => {
    // console.log("contactBoxes,", info)
    const site = Object.keys(info);
    return site.map(site => {
      return (
      <div 
        key={site}
        className={`Tiny ${site} col-3 ml-auto`}
        >
          <p><a href={info[site]}>{site}</a></p>
      </div>)
    })
    }
  

  return (
    <div className="Contact">
      <h3 className="col-4 mx-auto"> Contact me </h3>
      <div className="row">
        <div className="col-6 ml-auto text-right">
          {info && contactBoxes()}
        </div>
        <div className="col-4 ml-auto">
          <p>tiny text tiny text tiny text tiny text tiny text tiny text tiny text tiny text tiny text tiny text </p>
        </div>
      </div>
      <small className="text-muted">Brought to you by 2020</small>
    </div>
  )
}