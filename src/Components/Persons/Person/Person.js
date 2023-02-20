import React from "react";
import "./Person.css";

const person = (props) => {
    console.log(" [Person.js] Rendering ");
    return (
        <div className="Person">
            <p onClick={props.click}>
                Hello, my name is {props.name} and i am {props.age} year old!{" "}
            </p>
            {/* <p> {props.children} </p> */}
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};
export default person;
