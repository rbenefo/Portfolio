import React, { Component }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


import WorkPage from "./components/WorkPage/workPage"
import AboutPage from "./components/AboutBody/AboutBody"
import BlogPage from "./components/BlogPage/BlogPage"

import gitHubMark from "./assets/images/github.png"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  render() {
    return (
      <div className="App">
      <table id = "logoLinks">
      <tbody>

      <tr><th><a href = "https://github.com/rbenefoz"><img src={gitHubMark} width="30px" alt = ""/></a></th></tr>
      </tbody>

      </table>

      <div className="outsideLayer">
      <Router>

      <div className = "menuAndName">
      <NavLink to="/" className = "navLink" exact={true}><div id = "name">ROSHAN</div></NavLink>
        <table id = "menuBar">
        <tbody>

          <tr>
          <th> <NavLink to="/" className = "navLink" activeStyle={{ color: 'rgb(236, 92, 102)' }} exact={true}>ABOUT</NavLink></th>
          <th> <NavLink to="/work" className = "navLink" activeStyle={{ color: 'rgb(236, 92, 102)' }}>WORK</NavLink></th>
            {/* <NavLink to="/blog" className = "navLink" activeStyle={{ color: 'rgb(236, 92, 102)' }}><th>BLOG</th></NavLink> */}
          </tr>
          </tbody>

        </table>
      </div>
      <Switch>
          <Route exact path="/">
            <AboutPage />
          </Route>
          <Route path="/work">
            <WorkPage />
          </Route>
          {/* <Route path="/blog">
            <BlogPage />
          </Route> */}

        </Switch>
        </Router>

      </div>

    </div>

    )
  
};
}


export default App;
