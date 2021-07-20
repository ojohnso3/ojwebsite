import React from 'react';
// import '../css/NoComponentFound.css';

class NoComponentFound extends React.Component {

  render() {
    return (
      <div>
        <h1>Sorry! Looks like that page doesn't exist. 
          Click <a href='/'>HERE</a> to return Home</h1>
      </div>
    )
  }
}

export default NoComponentFound;
