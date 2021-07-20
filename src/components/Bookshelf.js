import React from "react"
import '../css/Recommendations.css';

class Bookshelf extends React.Component {

  render() {
    return (
      <div>
        <h1>MY BOOKSHELF</h1>

        <p>I love books. Books. Please tell me more please thanks.</p>

        <div id="bookshelf">
          <img className="rec-images" src="images/beloved.jpg"></img>
          <img className="rec-images" src="images/beloved.jpg"></img>
          <img className="rec-images" src="images/beloved.jpg"></img>
        </div>
        


      </div>
    )
  }
}
 
export default Bookshelf;