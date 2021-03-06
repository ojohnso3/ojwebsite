import React from "react"
import '../css/Recommendations.css';

class Bookshelf extends React.Component {

  render() {
    return (
      <div>
        <h1>MY BOOKSHELF</h1>

        <p id="book-intro">I have immersed myself in the worlds and lessons of books ever since I devoured the Harry Potter series at the age of seven.
          <br/><br/>Below are some of the books that have influenced my personal growth and opened my mind to new ideas over the last decade. 
          <br/><br/>Always looking for new recommendations, so please feel free to share!</p>

        <div id="bookshelf">
          <img className="rec-images" src="images/recs/beloved.jpg"></img>
          <img className="rec-images" src="images/recs/design.jpg"></img>
          <img className="rec-images" src="images/recs/lean.jpg"></img>
        </div>

        <div id="bookshelf">
          <img className="rec-images" src="images/recs/brave.jpg"></img>
          <img className="rec-images" src="images/recs/belljar.jpg"></img>
          <img className="rec-images" src="images/recs/thinking.jpg"></img>
        </div>
        
        <div id="bookshelf">
          <img className="rec-images" src="images/recs/room.jpg"></img>
          <img className="rec-images" src="images/recs/crime.jpg"></img>
          <img className="rec-images" src="images/recs/dreamhouse.jpg"></img>
        </div>


      </div>
    )
  }
}
 
export default Bookshelf;