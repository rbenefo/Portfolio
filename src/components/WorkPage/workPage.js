import React, { Component }  from 'react';


import dlOfficeUIPic from "../../assets/images/dlOfficeUIPic.png"
import endeavor from "../../assets/images/endeavor.JPG"
import protDF from "../../assets/images/protDF.png"
import seniorDesign from "../../assets/images/seniorDesign.jpg"
import graphicDesign from "../../assets/images/graphicDesign.png"

import protDFLogo from "../../assets/images/protDamnFineLogo.png"
import virtOfficeLogo from "../../assets/images/virtOfficeLogo.png"
import seniorDesignLogo from "../../assets/images/seniorDesignLogo.png"
import aircraftLogo from "../../assets/images/aircraftLogo.png"
import graphicDesignLogo from "../../assets/images/graphicDesignLogo.png"
import scroll from "../../assets/images/blackScroll.png";

import './workPage.css';

class workPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  componentDidMount() {
    let elem = document.getElementsByClassName("workBody")
    elem[0].addEventListener("mousewheel", this.handleWorkScroll);
    elem[0].addEventListener("scroll", this.handleWorkScroll);
  }
  componentWillUnmount() {
    let elem = document.getElementsByClassName("workBody")
    elem[0].removeEventListener("mousewheel", this.handleWorkScroll);
    elem[0].removeEventListener("scroll", this.handleWorkScroll);
  }

  handleWorkScroll(e) {
    let elem = document.getElementsByClassName("workBody");
    let scrollPercent = (elem[0].scrollTop)/(elem[0].scrollHeight - elem[0].clientHeight);
    let scrollNotif = document.getElementById("workScroll");
    scrollNotif.style.opacity = 1-scrollPercent;
  }


  workPopUp= (elem) => {
    let el = document.getElementById(elem);
    el.style.display="block";
  }

  hidePopUp = (elem) => {
    let el = document.getElementById(elem);
    el.style.display="none";
  }
  render() {
    return (
      <div className="workBody">
        <div id = "workBodySection">
          <span>
          <h1>MY WORK</h1>
          My work has spanned a range of disciplines: design, product management, software and mechanical engineering, and writing.
          Take a look below!
          </span>
        </div>
      <div id = "workBodySection2">
      <img src = {scroll} id = "workScroll" width = "auto" height="100px" alt = ""/>

      <div id = "workGrid">
          <div onClick = {() => this.workPopUp('protDFPopUp')} className = "workGridBox">  
            <div className = "workGridImage" style ={{backgroundImage:`url(${protDFLogo})`}}>
               <span>Protocol D-F</span>
            </div>
              <div className = "hidden">A helpful, AI-driven PDF reader.</div>  
          </div>
          <div onClick = {() => this.workPopUp('virtOfficePopUp')} className = "workGridBox"> 
              <div className = "workGridImage" style ={{backgroundImage:`url(${virtOfficeLogo})`}}>
                <span>Virtual Office</span>
              </div>
              <div className = "hidden">Creating community in a pandemic through code.</div>
          </div>
          <div onClick = {() => this.workPopUp('seniorDesignPopUp')} className = "workGridBox">  
            <div className = "workGridImage" style ={{backgroundImage:`url(${seniorDesignLogo})`}}>
               <span>Lake Cleaning AUV</span>
            </div>
              <div className = "hidden">A submersible designed to clean up pollutants.</div>  
          </div>
          <div onClick = {() => this.workPopUp('endeavorPopUp')} className = "workGridBox">
              <div className = "workGridImage" style ={{backgroundImage:`url(${aircraftLogo})`}}>
                <span>Aircraft Design</span>
              </div>
              <div className = "hidden">it flies??</div>
          </div>
          <div onClick = {() => this.workPopUp('graphicDesignPopUp')} className = "workGridBox">  
            <div className = "workGridImage" style ={{backgroundImage:`url(${graphicDesignLogo})`}}>
               <span>Graphic Design</span>
            </div>
              <div className = "hidden">Magazine design I've done over the years.</div>  
          </div>
          </div>

        </div>

        {/* PopUps */}
        <div id ="virtOfficePopUp" style={{display:"none"}}>
          <div className = "popUpWhiteBox">
            <table className = "popUpTable">
              <tbody>
              <tr>
              <th style={{textAlign: "left"}}>
                SOFTWARE, DESIGN, PM
              </th>
              <th>
                VIRTUAL OFFICE
              </th>
              <th style={{textAlign: "right"}}>
                SUMMER 2020
              </th>
              </tr>
              <tr>
              <td colSpan ="3">
              <img src = {dlOfficeUIPic} width="100%" height="auto" alt = ""/>
              </td>
              </tr>
              <tr>
              <td colSpan ="3">
              As an intern at Deeplocal, I worked with two designers to create the company's <a href = "https://virtualoffice-285701.ue.r.appspot.com/" className = "intextLink">Virtual Office</a>. We designed 
              the webapp to also help company employees feel connected to the company while working from home during the COVID pandemic–
              the building reacts to data inputs from the new platform for office banter: Slack. We also 
              hid a number of easter eggs that reveal information about the company's culture and history for company outsiders.
              I worked on the full stack: the Express server, React frontend, and deployment.
              </td>
              </tr>
            </tbody>
            </table> 
          </div>
          <div className = "blocker" onClick= {() => this.hidePopUp("virtOfficePopUp")}/>

        </div>
        <div id ="endeavorPopUp" style={{display:"none"}}>
          <div className = "popUpWhiteBox">
            <table className = "popUpTable">
              <tbody>
              <tr>
              <th style={{textAlign: "left"}}>
                MECHANICAL
              </th>
              <th>
                ENDEAVOR
              </th>
              <th style={{textAlign: "right"}}>
                SPRING 2019
              </th>
              </tr>
              <tr>
              <td colSpan ="3">
              <img src = {endeavor} width="100%" height="auto" alt = ""/>
              </td>
              </tr>
              <tr>
              <td colSpan ="3">
              I spent three semesters at Penn leading the aircraft team of the Penn Aerospace Club. While 
              lead, I oversaw the design, construction of three UAVs: Herbat, Endeavor, and Boing. Pictured above is
              Endeavor, a lightweight carbon fiber and balsa wood pusher UAV, designed to have a cruising speed of 20 mph and weigh 
              around 2 pounds.
              </td>
              </tr>
            </tbody>
            </table> 
          </div>
          <div className = "blocker" onClick= {() => this.hidePopUp("endeavorPopUp")}/>

        </div>

        <div id ="protDFPopUp" style={{display:"none"}}>
          <div className = "popUpWhiteBox">
            <table className = "popUpTable">
              <tbody>
              <tr>
              <th style={{textAlign: "left"}}>
                SOFTWARE, DESIGN, PM
              </th>
              <th>
                Protocol D-F
              </th>
              <th style={{textAlign: "right"}}>
                SUMMER 2020
              </th>
              </tr>
              <tr>
              <td colSpan ="3" className = "popUpImage" style ={{backgroundImage:`url(${protDF})`, backgroundPosition: "50% 0%"}}>
              </td>
              </tr>
              <tr>
              <td colSpan ="3">
              I spent the first half of the summer of 2020 learning how to do web development with my friend Wes.
              Neither of us had much experience with software or web development, but we were keen to learn.
              We built the reader from the ground up, developing native PDF editing and visualization
              packages to give us full control over PDF rendering. We also included a number of smart features:
              smart search, and sentence similarity, to upgrade the PDF viewing experience. Over the summer,
              I worked on the full stack: the UX design, React frontend, Express backend, Mongo database connectivity, and 
              smart search features.
              </td>
              </tr>
            </tbody>
            </table> 
          </div>
          <div className = "blocker" onClick= {() => this.hidePopUp("protDFPopUp")}/>

        </div>
       
        <div id ="seniorDesignPopUp" style={{display:"none"}}>
          <div className = "popUpWhiteBox">
            <table className = "popUpTable">
              <tbody>
              <tr>
              <th style={{textAlign: "left"}}>
                SOFTWARE, MECHANICAL, PM
              </th>
              <th>
                FREE WILLY: LAKE CLEANUP AUV
              </th>
              <th style={{textAlign: "right"}}>
                FALL 2019, SPRING 2020
              </th>
              </tr>
              <tr>
              <td colSpan ="3">
              <img src = {seniorDesign} width="100%" height="auto" alt = ""/>
              </td>
              </tr>
              <tr>
              <td colSpan ="3">
              For our Senior Design project, my friends and I created an underwater pollution collection platform we
              called Free Willy. The platform was designed to be as modular as possible to increase its use cases, with 
              collection filters that could be easily swapped out to collect different kinds of pollutants. I worked on
              the software systems of the robot, designing its communication packages, a tracking dashboard via AWS,
              a path planner, and control package. I also helped conceptualize and pitch the business case for our drone.
              </td>
              </tr>
            </tbody>
            </table> 
          </div>
          <div className = "blocker" onClick= {() => this.hidePopUp("seniorDesignPopUp")}/>

        </div>

        <div id ="graphicDesignPopUp" style={{display:"none"}}>
          <div className = "popUpWhiteBox">
            <table className = "popUpTable">
              <tbody>
              <tr>
              <th style={{textAlign: "left"}}>
                DESIGN
              </th>
              <th>
                GRAPHIC DESIGN
              </th>
              <th style={{textAlign: "right"}}>
                2018, 2019
              </th>
              </tr>
              <tr>
              <td colSpan ="3">
              <img src = {graphicDesign} width="100%" height="auto" alt = ""/>
              </td>
              </tr>
              <tr>
              <td colSpan ="3">
              I ran the design team of the Penn Science Magazine while at Penn, where I taught my team of 
              designers how to create compelling and beautiful graphics to accompany the student research
              and articles in the magazine. I personally created the covers and tables of contents for the magazine's Fall
              2018 and Spring 2019 issues.
              </td>
              </tr>
            </tbody>
            </table> 
          </div>
          <div className = "blocker" onClick= {() => this.hidePopUp("graphicDesignPopUp")}/>

        </div>

    </div>
    )
};
}


export default workPage;
