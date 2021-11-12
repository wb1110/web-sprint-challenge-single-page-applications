import React from "react";
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <Router>
    <div className='main-container'>
      <nav>
        <h1>Lambda Eats</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">Help</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
};
export default App;
