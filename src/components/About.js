import React from "react"
import '../css/About.css';

class About extends React.Component {

  render() {
    return (
      <div id="fullabout">
        <div id="lessabout">
          <div>
            <h1>About Me</h1>
            <p>Hi again! I'm an aspiring Product Manager with a passion for designing user-friendly products.

            <br/><br/>
            I grew up in New York City, and I credit its energy and diversity in shaping my sense of independence and ambition. 
            Despite my attachment to NYC, I’ve grown to love Providence these past few years.
            I’ve spent countless hours exploring the city on foot, especially walking along Blackstone Boulevard and Swan Point. 
            {/* Feel free to reach out if you'd like any recommendations for either city! */}
            
            <br/><br/>
            In 2020, I took a gap year to work as a Software Engineer at a growing tech startup. 
            At the same time, my friend and I founded our own startup, an iOS app for survivors of sexual assault. 
            We spent over 9 months designing and building this app from scratch, 
            but by March 2021 we decided to pivot to a new concept. 
            We spent Summer 2021 in Brown's Breakthrough Lab accelerator building 
            our second startup—Aloe Vision—and we plan to continue making progress this year. 

            <br/><br/>
            I’ve also played soccer competitively for the last decade, and I’m currently a captain of Brown Club Soccer. 
            The sport is a significant part of my relationship with my family, 
            and I watch Liverpool FC and the US Women’s National Team in my free time.
            
            <br/><br/>
            Learn more about me through my Resume, LinkedIn, GitHub, or Email by pressing the icons below.
            Thanks for visiting my website!
            </p>
          </div>

          <div id="profile2">
            <img id="profile-pic2" src="images/oj2.jpg"></img>
          </div>
        </div>

        <div id="contacts">
          <a href="images/icons/resume.png" target="_blank"><img className="contact-image" src="images/icons/resume.png"></img></a>
          <a href="https://www.linkedin.com/in/ojohnson23/" target="_blank"><img className="contact-image" src="images/icons/linkedin.png"></img></a>
          <a href="https://github.com/ojohnso3" target="_blank"><img className="contact-image" src="images/icons/github.png"></img></a>
          <a href="mailto:olivia_johnson@brown.edu" target="_blank"><img className="contact-image" src="images/icons/email.png"></img></a>
        </div>
      </div>
    )
  }
}
 
export default About;