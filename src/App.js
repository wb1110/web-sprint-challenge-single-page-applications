import React, { useEffect, useState } from "react";
import { Route, Link  } from "react-router-dom";
import Form from "./Form";
import Pizza from "./Assets/Pizza.jpg";
import styled from "styled-components";
import "./index.css";
import axios from "axios";

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
const initialFormValues = {
  username: "",
  size: "Select a size",
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  spicyItalian: false,
  grilledChicken: false,
  onions: false,
  greenPepper: false,
  dicedTomatos: false,
  blackOlives: false,
  roastedGarlic: false,
  artichokeHearts: false,
  threeCheese: false,
  pineapple: false,
  extraCheese: false,
  special: ""
}

function App () {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [orders, setOrders] = useState([]);

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/orders', formValues)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    });
  }
  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value});
  }





  return (
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
          <Link id="order-pizza" to="/pizza" >Pizza?</Link>
      </Background>
      <Route path="/pizza">
        <Form formValues={formValues} change={handleChange} submit={handleSubmit}/>
      </Route>
      <Route exact path="/"/>
 
    </div>
  );
};
export default App;
