
import { Redirect, Route, Switch } from 'react-router';
import NavBar from './NavBar';
import Resume from './Resume';
import ProjectsList from './ProjectsList';
import Project from './Project';
import Home from './Home';
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
          <Route exact path="/project/:id"> <Project data={projects}/> </Route>
          <Route exact path="/projects"> <ProjectsList data={projects}/> </Route>
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
    name: "Anaconda",
    tech: "javascript, Canvas API, jquery",
    code_url: "https://github.com/ncbui/Anaconda-game",
    demo_url: "/project/Anaconda-game",
    description: " Object-oriented remix of the Blockade arcade game built on the Canvas API and javascript. Play as a snake against an AI guided by A* search algorithm",
    updated: "January 2021",
    id:"anaconda"
  },
  {
    name: "Warbler",
    tech: "Flask, Jinja, postgreSQL DB",
    code_url: "https://github.com/ncbui/Warbler",
    demo_url: "https://cb-warbler-2020.herokuapp.com/",
    description: "Lite Twitter clone built as a Flask application with Google Login. Get a grip on doomscrolling by ",
    updated: "September 2020",
    id:"warbler"
  },
];

export const about = 
  {
    name: "Cam Bui",
    tagline: "software developer with a non-traditional background",
    description: "I recently finished Rithm School's Web Developer intensive and I'm looking for my first software developer role.",
    overview:"I have a Bachelor's in Kinesiology. I've worked with health records at a genetic data firm, published my work as a research assistant, and spent over a decade volunteering with community wellness orgs.",
    lab: "http://online.sfsu.edu/morsella/research.html",
    publication: "https://doi.org/10.1037/cns0000208",
    values: "I enjoy building tools to help people reshape their inner and outer worlds.",
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
