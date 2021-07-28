import React from "react"
import '../css/Recommendations.css';

class Watchlist extends React.Component {

  render() {
    return (
      <div>
        <h1>MY WATCHLIST</h1>

        <p id="book-intro">Ever since becoming a huge Pixar fan, I have been greatly inspired by film and television.
          <br/>Below are some of the movies/shows that *. 
          <br/>What else should I watch!</p>

        <div id="bookshelf">
          <img className="rec-images" src="images/destroy.jpg"></img>
          <img className="rec-images" src="images/arrival.jpg"></img>
          <img className="rec-images" src="images/got.jpg"></img>
        </div>

        <div id="bookshelf">
          <img className="rec-images" src="images/jojo.jpg"></img>
          <img className="rec-images" src="images/parasite.jpg"></img>
          <img className="rec-images" src="images/walle.jpeg"></img>
          {/* <img className="rec-images" src="images/avatar.jpg"></img> */}
        </div>

        <div id="bookshelf">
          <img className="rec-images" src="images/westworld.jpg"></img>
          <img className="rec-images" src="images/princess.jpg"></img>
          <img className="rec-images" src="images/fleabag.jpg"></img>
        </div>
        


      </div>
    )
  }
}
 
export default Watchlist;