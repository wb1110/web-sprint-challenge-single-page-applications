import React from "react";
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";

const Form = () => {
  return (
    <form id="pizza-form">
        <label>
            Name
            <input id="name-input"/>
        </label>
        <label>
            Choice of Size
            <input id="size-dropdown"/>
        </label>
        <label>
            Choice of Sauce
            <input />
        </label>
        <label>
            Add Toppings
            <input />
        </label>
        <label>
            Choice of Substitute
            <input />
        </label>
        <label>
            Special Instructions
            <input id="special-text"/>
        </label>
        <input id="order-button" type='submit'/>

    </form>
  );
};
export default Form;