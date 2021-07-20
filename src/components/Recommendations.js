import React from "react"
import Bookshelf from './Bookshelf.js'; 
import Watchlist from './Watchlist.js'; 

class Recommendations extends React.Component {

  constructor(props) {
    super(props); 

    this.state = {
      watchlist: false,
    }

    this.handleRecType = this.handleRecType.bind(this)
  }

  handleRecType(watchlist) {
    this.setState({ watchlist: watchlist })
  }

  render() {

    return (
      <div>
        {/* <h1>Olivia's Media Recommendations</h1> */}
        {/* {this.state.watchlist ? <h1>MY WATCHLIST</h1> : <h1>MY BOOKSHELF</h1>} */}

        <div>
          <button onClick={() => this.handleRecType(false)}>Bookshelf</button>
          <button onClick={() => this.handleRecType(true)}>Watchlist</button>
        </div>

        {this.state.watchlist ? <Watchlist/> : <Bookshelf/>}
        
      </div>
    )
  }
}
 
export default Recommendations;