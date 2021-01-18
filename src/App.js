
import { Redirect, Route, Switch } from 'react-router';
import NavBar from './NavBar';
import Resume from './Resume';
import Projects from './Projects';
import Home from './Home';
import Contact from './Contact';
import Landing from './Landing';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import rainbowPoly from './rainbow-poly.jpg';
import resumeImg from './resume-dec-2020.jpg'
import resumePdf from './resume-dec-2020.pdf'


function App({ projects, about, contact, resume }) {
  // console.log({ projects, about, contact, resume })
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
    <Landing data={contact}/>
      <Switch>
          <Route exact path="/resume"> <Resume data={resume}/> </Route>
          <Route exact path="/projects"> <Projects data={projects}/> </Route>
          <Route exact path="/contact"> <Contact data={contact}/> </Route>
            <Route exact path="/"> <Home data={{about, projects}}/> </Route>
        <Redirect to="/" />
      </Switch>
        <div className="divider">
          <img
            src={rainbowPoly}
            alt="Rendering of rainbow polygons"
            className="divider-img-b img-fluid" />
        </div>
        </BrowserRouter>
    </div>
  );
}

export const projects = [
  {
    name: "Warbler",
    languages: "Flask, Jinja, postgreSQL DB",
    code_url: "https://github.com/ncbui/Warbler",
    demo_url: "",
    description: " Twitter clone with authentication middleware, Bcrypt hashing, and postgreSQL database",
    updated: "September 2020",
  },
  {
    name: "Jobly API",
    languages: "Node.js, Express, PostgreSQL",
    code_url: "https://github.com/tm-1900/jobly",
    demo_url: "",
    description: " A RESTful API built with Node.js, Express and postgreSQL database",
    updated: "September 2020",
  },
  {
    name: "Jobly React App",
    languages: "React, Redux, React Router",
    code_url: "https://github.com/w12190/react-jobly",
    demo_url: "",
    description: " A small shopping website with filtered search, client-side rendering, and AJAX calls to an API",
    updated: "September 2020",
  },
];

export const about = 
  {
    name: "Cam Bui",
    tagline: "software developer with an non-traditional background",
    description: "I recently finished Rithm School's Web Developer intensive and I'm looking for my first software developer role.",
  overview:"I spent the last two years working with health records at a genetic data firm, and over a decade volunteering with community health orgs.",
    lab: "http://online.sfsu.edu/morsella/research.html",
    publication: "https://doi.org/10.1037/cns0000208",
    values: "I enjoy giving people access to info to help them make choices that will reshape their inner and outer worlds.",
    hobbies: "In my spare time I enjoy painting, and turning leftovers into gold with vermiculture.",
  };

export const contact = [
  {
    site: "github",
    url: "https://github.com/ncbui",
    icon: ['fab', 'github']
  },
  
  {
    site: "linkedin",
    url: "www.linkedin.com/in/cambui",
    icon: ['fab', 'linkedin']
  },
  
  {
    site: "email",
    url: "mailto:bui.nct@gmail.com",
    icon: ['fas', 'envelope']
  },
];

const resume = {
  url: resumePdf,
  img: resumeImg,
}

App.defaultProps = { projects, about, contact, resume };

export default App;
