import React from "react";
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import Form from "./Form";
import styled from "styled-components";
import Pizza from "./Assets/Pizza.jpg";
import "./index.css";

const Home = () => {

const Background = styled.div`
    background-image: url(${Pizza});
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50vh;
`
const Button = styled.button`
    padding: 0.5% 1.5%;
    text-decoration: none;
`

  return (
    <Router>
    <div className='main-container'>
        <Background className='home-image'>
            <h1>Your favorite food, delivered while coding</h1>
            <Button id="order-pizza"><Link to="/pizza" className="linkStyle">Pizza?</Link></Button>
        </Background>
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
