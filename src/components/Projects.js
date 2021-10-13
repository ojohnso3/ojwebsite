import React from "react"
import '../css/Projects.css';
import { Link } from 'react-router-dom'; 

class Projects extends React.Component {

  render() {
    return (
      <div>
        <h1>Projects</h1>

        <h3 id="blurb">Gained Comprehensive Experience in Full-Stack React Web Dev, NoSQL Database Management, and Machine Learning.</h3>

        <h5><em>Press on a project to learn more!</em></h5>

        <div id="project-container">
          <Link to="/project/0" className="project">
            <img className="img" id="aloe-img" src="images/work/aloepreview.png"></img>
            <div className="text">
              <h3>Sexual Assault Survivor iOS App</h3>
            </div>
          </Link>

          <Link to="/project/1" className="project">
            <img className="img" id="fc-img" src="images/work/foodcoma2.png"></img>
            <div className="text">
              <h3>Food-Coma Recipe Recommendation Web App</h3>
            </div>
          </Link>

          <Link to="/project/2" className="project">
            <div id="gifs">
              <div>
                <img className="img" id="mnist-img" src="images/work/MNIST1.gif"></img>
                <p><em>Original</em></p>
              </div>
              <div>
                <img className="img" id="mnist-img" src="images/work/MNIST2.gif"></img>
                <p><em>Reconstructed</em></p>
              </div>
            </div>
            <div className="text">
              <h3>Convolutional Recurrent Neural Network Model</h3>
            </div>
            
          </Link>
          
        </div>
      
      </div>
      
    )
  }
}
 
export default Projects;
