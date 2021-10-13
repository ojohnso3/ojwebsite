import React from "react"
import '../css/Experience.css';
import { Link } from 'react-router-dom'; 

class Experience extends React.Component {

  render() {
    return (
      <div>
        <h1>Experience</h1>

        <h3 id="blurb">Designed & Developed Products at a Startup, Founded my own Tech Startup, and Gave Back to the Brown Community through Teaching.</h3>

        <h5><em>Press on a work experience to learn more!</em></h5>

        <div id="experience-container">
          <Link to="/job/0" className="experience">
            <img className="img" id="fc-img" src="images/work/strongsuitlogo.png"></img>
            <div className="text">
              <h3>Software Engineer @ Strongsuit</h3>
            </div>
          </Link>

          <Link to="/job/1" className="experience">
            <img className="img" id="aloe-img" src="images/work/aloe.png"></img>
            <div className="text">
              <h3>Co-Founder @ Aloe Vision</h3>
            </div>
          </Link>

          <Link to="/job/2" className="experience">
            <img className="img" id="fc-img" src="images/work/cs15.png"></img>
            <div className="text">
              <h3>Teaching Assistant @ Brown CS</h3>
            </div>
            
          </Link>
          
        </div>
      
      </div>
      
    )
  }
}
 
export default Experience;
