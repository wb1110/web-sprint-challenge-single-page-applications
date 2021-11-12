import React from "react";
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import Form from "./Form";

const Home = () => {
  return (
    <Router>
    <div className='main-container'>
        <div className='home-image'>
            <h1>Your favorite food, delivered while coding</h1>
            <button><Link to="/pizza">Pizza?</Link></button>
        </div>
    </div>
    <Switch>
        <Route path="/pizza">
          <Form />
        </Route>
    </Switch>
    </Router>

  );
};
export default Home;
