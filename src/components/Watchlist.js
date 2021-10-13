import React from "react"
import '../css/Recommendations.css';

class Watchlist extends React.Component {

  render() {
    return (
      <div>
        <h1>MY WATCHLIST</h1>

        <p id="book-intro">Ever since becoming enthralled with the extensive world-building of early Pixar movies, I have been greatly inspired by film and television.
          <br/><br/>One day I hope to apply my technical expertise to the entertainment industry 
                by leveraging data to curate more personalized recommendations for viewers
                and to create new content that highlights innovative story-telling & diversity.
          <br/><br/>I've included some content below that has either deeply moved me and brought me great joy & laughter. What else should I watch!</p>

        <div id="bookshelf">
          <img className="rec-images" src="images/recs/destroy.jpg"></img>
          <img className="rec-images" src="images/recs/arrival.jpg"></img>
          <img className="rec-images" src="images/recs/got.jpg"></img>
        </div>

        <div id="bookshelf">
          <img className="rec-images" src="images/recs/jojo.jpg"></img>
          <img className="rec-images" src="images/recs/parasite.jpg"></img>
          <img className="rec-images" src="images/recs/walle.jpeg"></img>
          {/* <img className="rec-images" src="images/avatar.jpg"></img> */}
        </div>

        <div id="bookshelf">
          <img className="rec-images" src="images/recs/westworld.jpg"></img>
          <img className="rec-images" src="images/recs/princess.jpg"></img>
          <img className="rec-images" src="images/recs/fleabag.jpg"></img>
        </div>
        


      </div>
    )
  }
}
 
export default Watchlist;