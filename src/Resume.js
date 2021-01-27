import React from "react"
import { Container } from "reactstrap";

function Resume({data}) {
  console.log(data)
  return (
    <div className="Resume jumbotron jumbotron-fluid">
    <Container className="col-12 text-center">
        <p className="col-11 col-md-8 col-xl-6 mx-auto">Here is a direct link to <a href={data} download> download my resume</a>. I am currently looking for new opportunities in backend and frontend web development.</p>
        <embed
          src={data}
          alt="Cam Bui's resume 2020"
          className="col-12 col-md-10 mx-auto" 
          width="300" height="1000"/>
    </Container>
    </div>
  );
}

export default Resume;