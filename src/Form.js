import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
`
const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid black;
`

const Form = (props) => {
    const {   change, submit    } = props;
    const {username, checked, special} = props.formValues;

    const onChange = (e) => {
        const { name, value, checked, type   } = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

  return (
    <Container>
    <FormStyle id="pizza-form" onSubmit={onSubmit}>
        <label>
            Name
            <input id="name-input"
                type="text"
                name="username"
                value={username}
                onChange={onChange}
            />
        </label>
        <label>
            Choice of Size
            <select id="size-dropdown">
                <option onChange={onChange} checked={checked}value="null">Select a size</option>
                <option onChange={onChange} checked={checked}value="small">Small</option>
                <option onChange={onChange} checked={checked}value="medium">Medium</option>
                <option onChange={onChange} checked={checked}value="large">Large</option>
            </select>
        </label>
        <div>
        <label>
            Choice of Sauce
            <input type="radio" checked={checked} onChange={onChange} value="originalRed" name="sauce"/>Original Red
            <input type="radio" checked={checked} onChange={onChange} value="garlicRanch" name="sauce"/>Garlic Ranch
            <input type="radio" checked={checked} onChange={onChange} value="bbqSauce" name="sauce"/>BBQ Sauce
            <input type="radio" checked={checked} onChange={onChange} value="spinachAlfredo" name="sauce"/>Spinach Alfredo
        </label>
        </div>
        <label>
            Add Toppings
            <input type="checkbox" name="pepperoni" checked={checked} onChange={onChange}/>Pepperoni
            <input type="checkbox" name="sausage" checked={checked} onChange={onChange}/>Sausage
            <input type="checkbox" name="canadianBacon" checked={checked} onChange={onChange}/>Canadian Bacon
            <input type="checkbox" name="spicyItalian" checked={checked} onChange={onChange}/>Spicy Italian Sausage
            <input type="checkbox" name="grilledChicken" checked={checked} onChange={onChange}/>Grilled Chicken
            <input type="checkbox" name="onions" checked={checked} onChange={onChange}/>Onions
            <input type="checkbox" name="greenPepper" checked={checked} onChange={onChange}/>Green Pepper
            <input type="checkbox" name="dicedTomatos" checked={checked} onChange={onChange}/>Diced Tomatos
            <input type="checkbox" name="blackOlives" checked={checked} onChange={onChange}/>Black Olives
            <input type="checkbox" name="roastedGarlic" checked={checked} onChange={onChange}/>Roasted Garlic
            <input type="checkbox" name="artichokeHearts" checked={checked} onChange={onChange}/>Artichoke Hearts
            <input type="checkbox" name="threeCheese" checked={checked} onChange={onChange}/>Three Cheese
            <input type="checkbox" name="pineapple" checked={checked} onChange={onChange}/>Pineapple
            <input type="checkbox" name="extraCheese" checked={checked} onChange={onChange}/>Extra Cheese
        </label>
        <label>
            Choice of Substitute
            <input type="checkbox" name="glutenFree" checked={checked} onChange={onChange}/>Gluten Free Crust (+$1.00)
        </label>
        <label>
            Special Instructions
            <input id="special-text" type="text" name="special" value={special} onChange={onChange}/>
        </label>
        <button id="order-button" type='submit'>Add to Order</button>

    </FormStyle>
    </Container>
  );
};
export default Form;