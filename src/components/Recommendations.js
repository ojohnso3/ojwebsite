import React from "react"
import Bookshelf from './Bookshelf.js'; 
import Watchlist from './Watchlist.js'; 
import Button from '@material-ui/core/Button';

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

        <div id="buttons">
          <Button 
            variant="contained" 
            disabled={!this.state.watchlist}
            color="default"
            onClick={() => this.handleRecType(false)}
            >
              Bookshelf</Button>
          <Button 
          variant="contained" 
          disabled={this.state.watchlist}
          color="default"
          onClick={() => this.handleRecType(true)}
            >
            Watchlist</Button>
        </div>

        {this.state.watchlist ? <Watchlist/> : <Bookshelf/>}
        
      </div>
    )
  }
}
 
export default Recommendations;