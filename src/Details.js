import React from "react";

function Details(props) {
    return (
        <div>
            <p>My name is {props.name}.</p>
            <p>I am {props.age} years old.</p>
            <p> I am{props.children} </p>
        </div>
    );
}

export default Details;
