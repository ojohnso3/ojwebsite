import React from "react"
// import '../css/Recommendations.css';
import '../css/Projects.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'; 

const data = [
  {
    name: "Sexual Assault Survivor iOS App",
    role: "Product Management & Backend Engineer",
    languages: "Javascript, via NodeJS & ReactJS",
    description: "An iOS app that supports survivors of sexual assault by facilitating their healing and normalizes conversations around impactful sexual experiences.",
    img: "../images/work/aloepreview.png",
    link: "https://aloestories.com/",
    github: "https://github.com/Aloe-Stories/aloe-backend",
  },
  {
    name: "Food-Coma Recipe Web App",
    role: "Full-Stack Engineer",
    languages: "Java, Javascript, HTML, CSS",
    description: "A Web App that utilizes a k-d tree algorithm to curate recipes to a user’s dietary preferences.",
    img: "../images/work/foodcoma2.png",
    link: "https://aloestories.com/",
    github: "https://github.com/ojohnso3/food-coma-application",
  },
  {
    name: "Convolutional Recurrent Neural Network Model",
    role: "Machine Learning Engineer",
    languages: "Python with PyTorch",
    description: "A CRNN model that takes in Moving MNIST videos and predicts future frames using unsupervised learning..",
    img: "../images/work/MNIST1.gif",
    img2: "../images/work/MNIST2.gif",
    link: "https://zuckermaninstitute.columbia.edu/nikolaus-kriegeskorte-phd#profile-bio-module",
    github: "https://colab.research.google.com/drive/1znoymLygRnrsKW4Jn-CnNnfTg3wEglME?usp=sharing",
  },
]

const empty = {
  name: "1",
  role: "1",
  description: "2",
  img: "images/oj.jpg",
}

const vals = ["0","1","2"]
const maxVal = vals.length - 1;

class Project extends React.Component {

  constructor(props) {
    super(props); 

    var id = this.props.match.params.id;
    if(!vals.includes(id)) {
      id = 0;
    }

    const project = data[id] || empty;

    this.state = {
      id: id,
      name: project.name,
      role: project.role,
      languages: project.languages,
      description: project.description,
      img: project.img,
      img2: project.img2 || null,
      link: project.link,
      github: project.github,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.id;
    const project = data[id] || empty;

    this.setState({
      id: id,
      name: project.name,
      role: project.role,
      languages: project.languages,
      description: project.description,
      img: project.img,
      img2: project.img2 || null,
      link: project.link,
      github: project.github,
    })
  }

  handleClick(id, direction) {
    var newid = parseInt(id) + direction;
    if (newid < 0) {
      newid = maxVal;
    } else if (newid > maxVal) {
      newid = 0;
    }
    return "/project/" + newid;
  };

  render() {
    return (
      <div>
        <div id="header">
          <Link to={() => this.handleClick(this.state.id, -1)}><Button
            id="return-button"
            variant="contained" 
            color="default">
              PREVIOUS</Button></Link>

          <h1>{this.state.name}</h1>

          <Link to={() => this.handleClick(this.state.id, 1)}><Button
            id="return-button"
            variant="contained" 
            color="default">
              NEXT</Button></Link>
        </div>

      <div className='project-details'>
        {this.state.img2 ? 
            <div className='img-container'>
              <img className="imgE" id="imgDouble" src={this.state.img}></img>
              <img className="imgE" id="imgDouble" src={this.state.img2}></img>
            </div>
        :
        <img className="imgE" src={this.state.img}></img>}

          <div className="description">
            <h3>Role: <em>{this.state.role}</em></h3>
            <h3>Languages: <em>{this.state.languages}</em></h3>
            <h3><a href={this.state.link} target="_blank">Project Website</a></h3>
            <h3><a href={this.state.github} target="_blank">Code Repository</a></h3>
            <p>{this.state.description}</p>
        </div>
        </div>

      </div>
    )
  }
}
 
export default Project;