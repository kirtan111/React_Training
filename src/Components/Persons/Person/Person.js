import React from "react";
import "./Person.css";
import Aux from "../../../hoc/Auxiliary";

const person = (props) => {
    console.log(" [Person.js] Rendering ");
    return (
        <Aux className="Person">
            <p onClick={props.click}>
                Hello, my name is {props.name} and i am {props.age} year old!{" "}
            </p>
            {/* <p> {props.children} </p> */}
            <input type="text" onChange={props.changed} value={props.name} />
        </Aux>
    );
};
export default person;
