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

    </Form>
    </Container>
  );
};
export default Form;