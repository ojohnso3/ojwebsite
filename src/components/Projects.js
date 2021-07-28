import React from "react"
import '../css/Projects.css';
import { Link } from 'react-router-dom'; 

class Projects extends React.Component {

  render() {
    return (
      <div>
        <h1>Projects</h1>

        <h5>Click on a project to learn more!</h5>

        <div id="project-container">
          <Link to="/project/0" className="project">
            <div className="text">
              <h3>Sexual Assault Survivors iOS App</h3>
              <h5>Product Management & Backend (NodeJS, ReactJS)</h5>
              <p className="description">An iOS app that supports survivors of sexual assault 
                by facilitating their healing and normalizes conversations
                around impactful sexual experiences.</p>
            </div>
            <img className="img" id="aloe-img" src="images/aloe.png"></img>
          </Link>

          <Link to="/project/1" className="project">
            <div className="text">
              <h3>Food-Coma Recipe Recommendation Web App</h3>
              <h5>Full-Stack (Java, Javascript, HTML, CSS)</h5>
              <p className="description">A Web App that utilized a k-d tree algorithm 
                to curate recipes to a user’s dietary preferences.</p>
            </div>
            <img className="img" id="fc-img" src="images/foodCOMA.png"></img>
          </Link>

          <Link to="/project/2" className="project">
            <div className="text">
              <h3>Convolutional Recurrent Neural Network Model</h3>
              <h5>Machine Learning (Python with PyTorch)</h5>
              <p className="description">A CRNN model that takes in Moving MNIST videos 
                and predicts future frames using unsupervised learning.</p>
            </div>
            <div id="gifs">
              <div>
                <img className="img" id="mnist-img" src="images/MNIST.gif"></img>
                <p><em>Original</em></p>
              </div>
              <div>
                <img className="img" id="mnist-img" src="images/MNIST.gif"></img>
                <p><em>Reconstructed</em></p>
              </div>
            </div>
          </Link>
          
        </div>

        <div id="project-container">
          <Link to="/project/3" className="project">
            <div className="text">
              <h3>1</h3>
              <p className="description">Description</p>
            </div>
            <img className="img" id="aloe-img" src="images/aloe.png"></img>
          </Link>

          <Link to="/project/4" className="project">
            <div className="text">
              <h3>2</h3>
              <p className="description">Description</p>
            </div>
            <img className="img" id="fc-img" src="images/foodCOMA.png"></img>
          </Link>
          
        </div>
      
        
        

      </div>
      
    )
  }
}
 
export default Projects;

 
// function Projects(props) {
//   return (
//     <div>
//       <h1>New Component</h1>
//     </div>
//   )
// }