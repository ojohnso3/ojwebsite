import React from "react"
import '../css/Home.css';
import About from './About'; 

class Home extends React.Component {

  render() {
    return (
      <div>
        <div id="home">
          <h1 id="welcome">Hey! I'm Olivia, and I study Computer Science at Brown University.</h1>

          <div id="container">
            <div id="profile">
              <img id="profile-pic" src="images/oj.jpg"></img>
            </div>

            <div id="bio">
              <ul id="bio-list">
                <li className="bio-text"><b>👩‍🎓 Computer Science Student</b> at Brown (2018-).</li>
                <li className="bio-text"><b>💻 Software Engineer</b> at Strongsuit (2020-21).</li>
                <li className="bio-text"><b>🧠 Co-Founder & COO</b> of Aloe Vision (2021-).</li>
                <li className="bio-text"><b>⚽ Captain</b> of Brown Club Soccer (2021-).</li>
                <li className="bio-text"><b>📚 Teaching Assistant</b> for Intro CS course (2019).</li>
              </ul> 
            </div>
          </div>
        </div>
        
      {/* <About/> */}
      </div>
    )
  }
}
 
export default Home;