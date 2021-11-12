import React from "react";
import styled from "styled-components";

const Form = () => {

const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid black;
`
  return (
    <Container>
    <Form id="pizza-form">
        <label>
            Name
            <input id="name-input"/>
        </label>
        <label>
            Choice of Size
            <select id="size-dropdown">
                <option value="null">Select a size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </label>
        <label>
            Choice of Sauce
            <input type="radio" value="originalRed" name="originalRed"/>Original Red
            <input type="radio" value="garlicRanch" name="garlicRanch"/>Garlic Ranch
            <input type="radio" value="bbqSauce" name="bbqSauce"/>BBQ Sauce
            <input type="radio" value="spinachAlfredo" name="spinachAlfredo"/>Spinach Alfredo
        </label>
        <label>
            Add Toppings
            <input type="checkbox" name="pepperoni" value="pepperoni"/>Pepperoni
            <input type="checkbox" name="sausage" value="sausage"/>Sausage
            <input type="checkbox" name="canadianBacon" value="canadianBacon"/>Canadian Bacon
            <input type="checkbox" name="spicyItalian" value="spicyItalian"/>Spicy Italian Sausage
            <input type="checkbox" name="grilledChicken" value="grilledChicken"/>Grilled Chicken
            <input type="checkbox" name="onions" value="onions"/>Onions
            <input type="checkbox" name="greenPepper" value="greenPepper"/>Green Pepper
            <input type="checkbox" name="dicedTomatos" value="dicedTomatos"/>Diced Tomatos
            <input type="checkbox" name="blackOlives" value="blackOlives"/>Black Olives
            <input type="checkbox" name="roastedGarlic" value="roastedGarlic"/>Roasted Garlic
            <input type="checkbox" name="artichokeHearts" value="artichokeHearts"/>Artichoke Hearts
            <input type="checkbox" name="threeCheese" value="threeCheese"/>Three Cheese
            <input type="checkbox" name="pineapple" value="pineapple"/>Pineapple
            <input type="checkbox" name="extraCheese" value="extraCheese"/>Extra Cheese
        </label>
        <label>
            Choice of Substitute
            <input type="checkbox" name="glutenFree" value="glutenFree"/>Gluten Free Crust (+$1.00)
        </label>
        <label>
            Special Instructions
            <input id="special-text" type="text"/>
        </label>
        <input id="order-button" type='submit'/>

    </Form>
    </Container>
  );
};
export default Form;