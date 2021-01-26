import React from "react"
import { Container } from "reactstrap";

function Resume({data}) {
  console.log(data)
  return (
    <div className="Resume jumbotron jumbotron-fluid">
    <Container className="col-11 col-md-8 mx-auto">
        <p>Here is a direct link to <a href={data.url} download> download my resume</a>. I am currently looking for new opportunities in backend and frontend web development.</p>
        <img
          src={data.img}
          alt="Cam Bui's resume 2020"
          className="Resume-img img-fluid" />
    </Container>
    </div>
  );
}

export default Resume;