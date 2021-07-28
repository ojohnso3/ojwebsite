import React from "react"
import '../css/Recommendations.css';

class Bookshelf extends React.Component {

  render() {
    return (
      <div>
        <h1>MY BOOKSHELF</h1>

        <p id="book-intro">I have immersed myself in the worlds and lessons of books ever since I consumed the Harry Potter series at the age of 7.
          <br/>Below are some of the books that have influenced my personal growth and opened my mind to new ideas over the last decade. 
          <br/>Always looking for new recommendations, so please feel free to share!</p>

        <div id="bookshelf">
          <img className="rec-images" src="images/beloved.jpg"></img>
          <img className="rec-images" src="images/design.jpg"></img>
          <img className="rec-images" src="images/lean.jpg"></img>
        </div>

        <div id="bookshelf">
          <img className="rec-images" src="images/brave.jpg"></img>
          <img className="rec-images" src="images/belljar.jpg"></img>
          <img className="rec-images" src="images/thinking.jpg"></img>
        </div>
        
        <div id="bookshelf">
          <img className="rec-images" src="images/room.jpg"></img>
          <img className="rec-images" src="images/crime.jpg"></img>
          <img className="rec-images" src="images/dreamhouse.jpg"></img>
        </div>


      </div>
    )
  }
}
 
export default Bookshelf;