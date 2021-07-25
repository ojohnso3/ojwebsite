import React from "react"
import '../css/About.css';

class About extends React.Component {

  render() {
    return (
      <div id="fullabout">
        <div id="lessabout">
          <div>
            <h1>About Me!</h1>
            <p>Hello again! I'm an aspiring Product Manager with a passion for *.
              
              I love working.
              <br/><br/> Thanks for visiting my site! Find me anywhere in the links below.</p>

            <p>Born in NYC. Studying in PVD.</p>
          </div>

          <div id="profile">
            <img id="profile-pic" src="images/dunntackle.jpg"></img>
          </div>
        </div>

        <div id="contacts">
          <a href="images/resume.png" target="_blank"><img className="contact-image" src="images/resume.png"></img></a>
          <a href="https://www.linkedin.com/in/ojohnson23/" target="_blank"><img className="contact-image" src="images/linkedin.png"></img></a>
          <a href="https://github.com/ojohnso3" target="_blank"><img className="contact-image" src="images/github.png"></img></a>
        </div>
      </div>
    )
  }
}
 
export default About;