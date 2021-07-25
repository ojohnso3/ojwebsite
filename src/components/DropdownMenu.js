import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import '../App.css';



const options = [
  'HOME',
  'ABOUT ME',
  'PROJECTS',
  'RECOMMENDATIONS',
];

const ITEM_HEIGHT = 48;

class DropdownMenu extends React.Component {

  constructor(props) {
    super(props); 

    this.state = {
      anchorEl: null,
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleLink = this.handleLink.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClick = (event) => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleLink = (value) => {
    const index = options.indexOf(value)

    var link;
    switch(index) {
      case 0:
        link = "";
        break;
      case 1:
        link = "about";
        break;
      case 2:
        link = "projects";
        break;
      case 3:
        link = "recs";
        break;
      default:
        link = "";
    }
    window.location.href = "http://localhost:3000" + "/" + link;
    this.handleClose();
  }

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  render() {

    const open = Boolean(this.state.anchorEl);

    return (
      <div>
        <IconButton
          id="nav-dropbutton"
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} selected={option === 'None'} onClick={() => this.handleLink(option)}>
              {option}
            </MenuItem>
          ))}

          {/* <MenuItem key={'home'} selected={false} onClick={this.handleClose}>
              <Link to="/" className="nav-link">HOME</Link>
          </MenuItem>
          <MenuItem key={'about'} selected={false} onClick={this.handleClose}>
              <Link to="/about" className="nav-link">ABOUT ME</Link>
          </MenuItem>
          <MenuItem key={'about'} selected={false} onClick={this.handleClose}>
              <Link to="/about" className="nav-link">ABOUT ME</Link>
          </MenuItem>
          <MenuItem key={'about'} selected={false} onClick={this.handleClose}>
              <Link to="/about" className="nav-link">ABOUT ME</Link>
          </MenuItem> */}
        </Menu>
      </div>
    );
  }
}

export default DropdownMenu;

    {/* {options.map((option) => (
            <MenuItem key={option} selected={option === 'None'} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))} */}