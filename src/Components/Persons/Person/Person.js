import React from "react";
import "./Person.css";
import Auxiliary from "../../../hoc/Auxiliary";
import PropTypes from "prop-types";

const person = (props) => {
    console.log(" [Person.js] Rendering ");
    return (
        <Auxiliary className="Person">
            {props.isAuth ? <p>Authenticated</p> : <p>Please LOG IN</p>}
            <p onClick={props.click}>
                Hello, my name is {props.name} and i am {props.age} year old!{" "}
            </p>
            {/* <p> {props.children} </p> */}
            <input type="text" onChange={props.changed} value={props.name} />
        </Auxiliary>
    );
};

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};

export default person;
