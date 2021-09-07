import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.png";
import "./App.css";
import About from "./components/aboutme";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="flex jc_sb">
          <a id="logo" href="/" alt="placeholder">
            MP
          </a>
          <nav className="flex">
           
            <a href="/about" alt="header link">
              About Me
            </a>
            <a href="/contact" alt="header link">
              Contact
            </a>
            <a href="/" alt="header link">
              Blog
            </a>
            <a id="ctaPortfolio" href="/portfolio" alt="header link">
              Portfolio
            </a>
           
          </nav>
        </header>
        <container className="topSection flex">
          <div id="intro">
            <p className="subtitle" id="hi_text">
              Hello, I am:
            </p>

            <p id="about_text">
              <span className="bigFont">Malcolm Peterson</span>
              <br />
              <span className="subtitle" id="job_title">
                Full Stack Web Developer
              </span>
              <br />
              <span id="intro_text">
                My ultimate goal is to fufill the demand of the client by making
                them satisfied with proper communication and ontime delivery
                with data driven results. Let's build something cool!
              </span>
            </p>
            <container>
              <div className="ctaContact">Contact Me</div>
              <span>...Or Not</span>
            </container>
          </div>
          <img src={logo} alt="placeholder"></img>
        </container>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
            <Contact />
          </Route>
          <Route path="/portfolio">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
