import React from "react"
import '../css/Experience.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'; 

const data = [
  {
    name: "Software Engineer @ Strongsuit",
    time: "Jun 2020 - Apr 2021",
    d1: "Built Task Manager to standardize organizational input of team, provided insight into variety & frequency of client work.",
    d2: "Designed Agenda Builder to streamline employee prep work by >60%, improved team efficiency & unit economics.",
    d3: "Directed Product meetings to show new features, user stories, project specifications & receive feedback from executives.",
    img: "../images/work/strongsuitlogo.png",
  },
  {
    name: "Co-Founder @ Aloe Vision",
    time: "Jun 2020 - Present",
    d1: "Founded Computer Vision startup in restaurant industry and chosen for selective summer ‘21 startup accelerator.",
    d2: "Conducted extensive bottom-up research with 50+ customer interviews and recurring meetings with experts & mentors.",
    d3: "Applied entrepreneurial process learned from previous venture to develop value proposition and customer definition.",
    img: "../images/work/aloe.png",
  },
  {
    name: "Teaching Assistant @ Brown CS",
    time: "Fall 2019",
    d1: "Selected as Teaching Assistant for 400+ students in intro CS course with Prof. Andy van Dam (CSCI 0150).",
    d2: "Led 2 labs/sections & 4 debugging hours each week to assist students with code and complex concepts.",
    d3: "Built agenda & task management system, which greatly increased productivity and consistency of employees.",
    img: "../images/work/cs15.png",
  }
]

const empty = {
  name: "1",
  description: "2",
  img: "images/oj.jpg",
}

const vals = ["0","1","2"]
const maxVal = vals.length - 1;

class Job extends React.Component {

  constructor(props) {
    super(props); 

    var id = this.props.match.params.id;
    if(!vals.includes(id)) {
      id = 0;
    }

    const job = data[id] || empty;

    this.state = {
      id: id,
      name: job.name,
      time: job.time,
      d1: job.d1,
      d2: job.d2,
      d3: job.d3,
      img: job.img,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.id;
    const job = data[id] || empty;

    this.setState({
      id: id,
      name: job.name,
      time: job.time,
      d1: job.d1,
      d2: job.d2,
      d3: job.d3,
      img: job.img,
    })
  }

  handleClick(id, direction) {
    var newid = parseInt(id) + direction;
    if (newid < 0) {
      newid = maxVal;
    } else if (newid > maxVal) {
      newid = 0;
    }
    return "/job/" + newid;
  };

  render() {
    console.log("hi", this.state.img)
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
        

        <img className="img" id="fc-img" src={this.state.img}></img>

        <ul className='description2'>
          <h3>{this.state.time}</h3>
          <li>{this.state.d1}</li>
          <li>{this.state.d2}</li>
          <li>{this.state.d3}</li>
        </ul>

      </div>
    )
  }
}
 
export default Job;