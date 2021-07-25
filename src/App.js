import logo from './logo.svg';
import './App.css';

// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'; 
import Home from './components/Home.js'; 
import About from './components/About.js'; 
import Projects from './components/Projects.js'; 
import Recommendations from './components/Recommendations.js'; 
import NoComponentFound from './components/NoComponentFound'; 

import DropdownMenu from './components/DropdownMenu';

function App() {

  return (
    <div className="App">
      <BrowserRouter>

      {/* <img id="orange-icon" src="images/orangeicon.png"></img> */}

        <div className="header">
          
          <div className="navigation">
            <Link to="/" id="name-header">OLIVIA JOHNSON</Link>

            <DropdownMenu
            />

            <div id="nav-links">
              <Link to="/" className="nav-link">HOME</Link>
              <Link to="/about" className="nav-link">ABOUT ME</Link>
              <Link to="/projects" className="nav-link">PROJECTS</Link>
              <Link to="/recs" className="nav-link">RECOMMENDATIONS</Link>
            </div>                             
  
          </div>
        </div>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/recs" component={Recommendations} />
          <Route exact path="*" component={NoComponentFound} />
        </Switch>

      </BrowserRouter>

      <div id="copyright">Copyright © 2021 Olivia Johnson. All rights reserved.</div>

    </div>
  );
}

export default App;
