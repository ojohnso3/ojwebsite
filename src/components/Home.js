import React from "react"
import '../css/Home.css';

class Home extends React.Component {

  render() {
    return (
      <div>
        <h1 id="welcome">Hey! I'm Olivia, and I'm a CS major at Brown University.</h1>

        <div id="container">
          <div id="profile">
            <img id="profile-pic" src="images/dunntackle.jpg"></img>
          </div>

          <div id="bio">
            <ul>
              <li className="bio-text">Computer Science at Brown.</li>
              <li className="bio-text">Software Engineer at Strongsuit.</li>
              <li className="bio-text">Co-founder & COO of Aloe Vision.</li>
              <li className="bio-text">Captain of Brown Club Soccer.</li>
              <li className="bio-text">Teaching Assistant for Intro CS course.</li>
            </ul> 
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
 
export default Home;