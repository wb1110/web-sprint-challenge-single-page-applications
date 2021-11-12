import React from "react";
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import Home from "./Home";
import styled from "styled-components";

const App = () => {

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2%;
`
const List = styled.ul`
  display: flex;
`
const NavLink = styled.li`
  text-decoration: none;
  list-style-type: none;
  border: solid black;
  padding: 0 2%;
  width: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
  return (
    <Router>
    <div className='main-container'>
      <Nav>
        <h1>Lambda Eats</h1>
        <List>
          <NavLink>
            <Link to="/" className="linkStyle">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="#" className="linkStyle">Help</Link>
          </NavLink>
        </List>
      </Nav>

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
