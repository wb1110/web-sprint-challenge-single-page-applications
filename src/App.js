import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import Form from "./Form";
import Pizza from "./Assets/Pizza.jpg";
import styled from "styled-components";
import "./index.css";

function App () {

  const initialForm = {
    name: "",
    size: "",
    sauce: "",
    substitute: "",
    special: ""
  }

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
  const Background = styled.div`
      background-image: url(${Pizza});
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 50vh;
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
      <Background className='home-image'>
          <h1>Your favorite food, delivered while coding</h1>
          <Link to="/pizza" id="order-pizza">Pizza?</Link>
      </Background>

      <Route exact path="/" />
      <Route path="/pizza" component={Form}/>
    </div>
    </Router>
  );
};
export default App;
