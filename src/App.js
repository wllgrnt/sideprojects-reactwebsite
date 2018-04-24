import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  NavLink
} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands'
// import Button from 'material-ui/Button';
import ResponsiveMenu from './navbar.js';
import styled from 'styled-components';
import { FaBars, FaClose } from 'react-icons/lib/fa';

const Menu = styled.div`
  // border-bottom: 2px solid MediumPurple;
  ul {
    padding: 0;
  }
  li {
    display: inline;
    font-size: 13px;
    list-style-type: none;
    margin-left: 30px;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    color: MediumPurple;
    &:hover {
      color: white;
    }
  }
  @media (max-width: 500px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`;

// const ContentBox = styled.div`
//   background-color: white;
//   border: 2px solid MediumPurple;
//   width: 60%;
//   font-size: 15px;
//   padding: 20px;
//   margin: 20px;
//   float: ${props => props.float};
//   @media (max-width: 500px) {
//     float: none;
//     margin: 20px auto;
//   }
// `;

const maxWidth = '500px';

const NameHeader = styled.div`
  @media (max-width: ${maxWidth}) {
    text-align: center;
  }
`;


class App extends Component {

  render() {
    return (
      <HashRouter>
        <div>
        <NameHeader><h1>William Grant</h1></NameHeader>
          <ResponsiveMenu
            menuOpenButton={<FaBars size={30} color="White" />}
            menuCloseButton={<FaClose size={30} color="White" />}
            changeMenuOn={maxWidth}
            largeMenuClassName="large-menu"
            smallMenuClassName="small-menu"
            menu={
              <Menu>
                <ul className="header">
                  <li><NavLink exact to="/" activeClassName="active">About</NavLink></li>
                  {/* <li><NavLink to="/about" activeClassName="active">About</NavLink></li> */}
                  <li><NavLink to="/currentWork" activeClassName="active">Current Work</NavLink></li>
                  <li><NavLink to="/previousWork" activeClassName="active">Previous Work</NavLink></li>
                  <li><NavLink to="/education" activeClassName="active">Education</NavLink></li>
                  {/* <li><NavLink to="/todo" activeClassName="active">To-Do</NavLink></li> */}
                  <li><NavLink to="/colophon" activeClassName="active">Colophon</NavLink></li>
                  <li><a href="https://github.com/wllgrnt/"><FontAwesomeIcon icon={faGithub} color="white" transform="grow-10" /></a></li>
                </ul>
              </Menu>
            }
          />

          <div className="content">
            {this.props.children}
            <Route exact path="/" component={About} />
            {/* <Route path="/about" component={About}/> */}
            <Route path="/currentWork" component={CurrentWork} />
            <Route path="/previousWork" component={PrevWork} />
            <Route path="/education" component={Education} />
            {/* <Route path="/todo" component={ToDo} /> */}
            <Route path="/colophon" component={Colophon} />
          </div>
        </div>
      </HashRouter>
    )
  }
}



// EXAMPLE OF A PROPER COMPONENT
// class Content extends Component {
//   constructor(props) {
//     // Do nothing with state, for now.
//     super(props);
//   }

//   render() {
//     return (
//       <div id="content-container">
//         <Home />
//         <About />
//         <CurrentWork />
//         <PrevWork />
//         <Education />
//       </div>

//     );
//   }

// }

const About = () =>
  <div className="about">
    <h2>About Me:</h2>
    <p> I'm a PhD student in the Theory of Condensed Matter Group, at the Physics department of the University of Cambridge. </p>
    {/* <p> (This webpage represents an MVP vanity page, and is almost entirely a learning exercise in React/CSS. Code is on Github, though tests crash currently.)</p> */}
    <p> My public university page is <a href="http://www.tcm.phy.cam.ac.uk/profiles/wpg23/">here</a> with further information.</p>
    <p> Get in touch at contact@wpg.io if you have thoughts/feelings/questions!</p>
    {/* <Button variant="raised" color="primary">
      Hello World
    </Button> */}

  </div>

const CurrentWork = () =>
  <div className="currentWork">
    <h2>Current Work</h2>
    <p>I'm currently working on applying network analysis methods to protein structures, but am generally interested in network science/biophysics/emergent phenomena. I'm also interested in data visualisation (often using d3.js) and machine learning applications. Get in touch if you have a problem in any of those domains! </p>
  </div>

const PrevWork = () =>
  <div className="prevWork">
    <h2>Previous Work</h2>
    <ul>
      <li> Freelance consultancy for the Materials Science department</li>
      <li>Summer placement, public sector: Java development w/ Hadoop</li>
      <li>Summer placement, BAE Systems Detica: Java QA</li>
    </ul>
  </div>

const Education = () =>
  <div className="education">
    <h2>Education:</h2>
    <ul>
      <li>PhD in Physics</li>
      <li> MPhil in Scientiic Computing</li>
      <li> Part III (MSci) in Physics </li>
      <li> BA in Natural Sciences </li>
    </ul>

    <h3> Publications </h3>
    <p>NPJ Comp Mat.</p>
  </div>


// const ToDo = () =>
//   <div className="todo">
//     <h2>To-do:</h2>
//     <ul>
//       <li>Better CSS: Responsive menu bar</li>
//       <li> Investigate react-spa by WRidder</li>
//       <li> Add d3.js examples</li>
//       <li> Prettier pictures</li>
//       <li> Content </li>
//       <li> Write a colophon, giving the libraries and tools used in the process and documenting the rationale behind the choices.</li>
//       <li> Enumerate website goals</li>
//     </ul>
//   </div>

const Colophon = () =>
  <div className="colophon">
    <h2>Website requirements</h2>
    <ul>
      <li>Lightweight: it's only a vanity page/cv/list of hobby projects, I shouldn't force anyone to download megabytes of cruft to look at it.</li>
      <li>Responsive: it's 2018, so to be otherwise isn't really acceptable.</li>
      <li>Integrated with D3: lots of my viz work is in D3, and it'd be good to host that directly.</li>
      <li>Modern: this whole project is a learning exercise, so I might as well learn the current web-dev dogma.</li>
      <li>CRUD interface? It'd be good if I could learn how to roll my own CRUD service, for blogging/further websites.</li>
    </ul>
    <h2>Tech Stack</h2>
    <ul>
      <li>FontAwesome</li>
      <ul>
        <li>Needed as for some reason the svg of the Github icon won't resize correctly if included as an inline element.</li>
      </ul>
      <li> React-Router</li>
      <li> React</li>
      <li> Create-React-App</li>
      <li>Namecheap Hosting</li>
      <ul>
        <li>Cheap and secure, with whois masking, though currently I can only host static websites (which I believe Github would do for free).</li>
      </ul>
      <li> Material UI </li>
      <ul>
        <li>I'm not necessarily a fan, but it seems like the best way to get a responsive menu bar.</li>
        <li>See alternatives e.g. /stephanieinez/react-responsive-navbar and  https://codepen.io/danbuda/post/a-react-navbar-component </li>
      </ul>
      <li>styled-components: who knows what it does?</li>
    </ul>
    <p> Maybe I need Bootstrap too?</p>
    <p> Front-end development suffers mightily from the fact that there's no Right Way to do things, and new, better methods arise every day.</p>
    <p>This makes finding good, up-to-date, documentation difficult, and makes it hard to know you're following best practices (which of course is what you're after).</p>
    <p>This is often most true with CSS styling of the components. Hopefully I can survey other people's work and acquire some consensus.</p>
  </div>


// const GithubIcon = () =>
//   <svg id="githubIcon" viewBox="0 0 40.723751 39.718582">
//     <g id="g10" transform="matrix(1.25 0 0 -1.25 -170.4 210.68)"><path id="path106" d="m152.61 168.54c-8.994 0-16.288-7.293-16.288-16.29 0-7.197 4.667-13.302 11.14-15.456 0.815-0.15 1.112 0.353 1.112 0.785 0 0.387-0.014 1.411-0.022 2.77-4.531-0.984-5.487 2.184-5.487 2.184-0.741 1.882-1.809 2.383-1.809 2.383-1.479 1.01 0.112 0.99 0.112 0.99 1.635-0.115 2.495-1.679 2.495-1.679 1.453-2.489 3.813-1.77 4.741-1.353 0.148 1.052 0.569 1.77 1.034 2.177-3.617 0.411-7.42 1.809-7.42 8.051 0 1.778 0.635 3.233 1.677 4.371-0.168 0.412-0.727 2.069 0.16 4.311 0 0 1.367 0.438 4.479-1.67 1.299 0.362 2.693 0.542 4.078 0.549 1.384-0.007 2.777-0.187 4.078-0.549 3.11 2.108 4.475 1.67 4.475 1.67 0.889-2.242 0.33-3.899 0.163-4.311 1.044-1.138 1.674-2.593 1.674-4.371 0-6.258-3.809-7.635-7.437-8.038 0.584-0.503 1.105-1.497 1.105-3.016 0-2.178-0.02-3.935-0.02-4.469 0-0.436 0.294-0.943 1.12-0.784 6.468 2.159 11.131 8.26 11.131 15.455 0 8.997-7.294 16.29-16.291 16.29" fill-rule="evenodd" fill="#fff" /></g>
//   </svg>

export default App;
