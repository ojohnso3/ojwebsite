import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import '../App.css';
import { Link } from 'react-router-dom'; 



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
    // window.location.href = "http://localhost:3000" + "/" + link;
    window.location.href = "https://ojwebsite-ed80f.web.app" + "/" + link;

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
          <Link to="/" className="menu-link">
            <MenuItem key={'home'} selected={false} onClick={this.handleClose}>
              HOME
            </MenuItem>
          </Link>
          <Link to="/about" className="menu-link">
            <MenuItem key={'about'} selected={false} onClick={this.handleClose}>
              ABOUT
            </MenuItem>
          </Link>
          <Link to="/projects" className="menu-link">
            <MenuItem key={'projects'} selected={false} onClick={this.handleClose}>
              PROJECTS
            </MenuItem>
          </Link>
          <Link to="/recs" className="menu-link">
            <MenuItem key={'recs'} selected={false} onClick={this.handleClose}>
              RECOMMENDATIONS
            </MenuItem>
          </Link>
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