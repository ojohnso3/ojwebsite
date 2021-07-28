import React from "react"
// import '../css/Recommendations.css';
import '../css/Projects.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'; 

const data = [
  {
    name: "Sexual Assault Survivors iOS App",
    description: "An iOS app that supports survivors of sexual assault by facilitating their healing and normalizes conversations around impactful sexual experiences.",
    img: "images/aloe.png",
  },
  {
    name: "Food-Coma Recipe Recommendation Web App",
    description: "Fine.",
    img: "images/aloe.png",
  },
  {
    name: "Convolutional Recurrent Neural Network Model",
    description: "Hi.",
    img: "images/aloe.png",
  },
  {
    name: "4444",
    description: "This empty.",
    img: "images/aloe.png",
  },
  {
    name: "55555",
    description: "This empty.",
    img: "images/aloe.png",
  },
]

const empty = {
  name: "1",
  description: "2",
  img: "images/oj.jpg",
}

const vals = ["0","1","2","3","4"]

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
      description: project.description,
      img: project.img,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.id;
    const project = data[id] || empty;

    this.setState({
      id: id,
      name: project.name,
      description: project.description,
      img: project.img,
    })
  }

  handleClick(id, direction) {
    var newid = parseInt(id) + direction;
    if (newid < 0) {
      newid = 4;
    } else if (newid > 4) {
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
              BACK</Button></Link>

          <h1>{this.state.name}</h1>

          <Link to={() => this.handleClick(this.state.id, 1)}><Button
            id="return-button"
            variant="contained" 
            color="default">
              NEXT</Button></Link>
        </div>
        
        <p>{this.state.description}</p>

        <img className="phones" src="images/aloe.png"></img>
        <img className="phones" src="images/iphone2.jpeg"></img>
        <img className="phones" src="images/iphone2.JPG"></img>
        {/* <img className="rec-images" src={this.state.img || "images/oj.jpg"}></img> */}

      </div>
    )
  }
}
 
export default Project;