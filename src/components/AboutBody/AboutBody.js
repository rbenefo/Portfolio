import React from 'react';
import './AboutBody.css';
import aboutBackground from "../../assets/images/aboutBackground.png";
import spacecraft from "../../assets/images/spacecraft.png";

import reentryBurn from "../../assets/images/reentryBurn.png";
import scroll from "../../assets/images/scroll.png";

export default class AboutBody extends React.Component {

    constructor(props) {
      super(props);
      this.state = {  
      }  
    }
    componentDidMount() {
      window.addEventListener("mousewheel", this.handleScroll);
    }
    componentWillUnmount() {
      window.removeEventListener("mousewheel", this.handleScroll);
    }

    handleScroll(e) {
      console.log("scroll!!")
      let title = document.getElementById("aboutHello");
      title.classList.add("upNAway")
      let background = document.getElementById("aboutBackground");
      background.classList.add("landing")
      let spacecraft = document.getElementById("spacecraft");
      spacecraft.classList.add("spacecraftLanding")
      let reentryBurn = document.getElementById("reentryBurn");
      reentryBurn.classList.add("burnOff")
      let aboutText = document.getElementById("aboutText");
      aboutText.classList.add("aboutTextShow")
      let scroll = document.getElementById("scroll");
      scroll.classList.add("vanish")

    }
  
  

    render() {
      return (
        <div id = "aboutBody">
        <div id = "aboutBodySection1">
        <div id = "aboutHello">
         <span>HI,</span> <br/><span>I'M ROSHAN.</span>
         </div>
          <img src = {aboutBackground} id = "aboutBackground" alt = ""/>
          <img src = {reentryBurn} id = "reentryBurn" width = "auto" height="200px" alt = ""/>

          <img src = {spacecraft} id = "spacecraft" width = "auto" height="100px" alt = ""/>
          <img src = {scroll} id = "scroll" width = "auto" height="100px" alt = ""/>

          <div id = "aboutText">
          I'm a masters student at Penn studying robotics engineering, and a 
          fresh grad of Penn's M&amp;T program. As you can probably tell, I'm into all things space-related. 
          Also high up on my list are business strategy, design, philosophy, cycling, and chicken.
        </div>
      </div>

      </div>

      );
    }
  
  }
