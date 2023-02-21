import React, { useContext } from "react";
import "./Person.css";
import Auxiliary from "../../../hoc/Auxiliary";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

const Person = (props) => {
    console.log(" [Person.js] Rendering ");
    const authContext = useContext(AuthContext);
    return (
        <Auxiliary className="Person">
            {authContext.authenticated ? <p>Authenticated</p> : <p>Please LOG IN</p>}
            <p onClick={props.click}>
                Hello, my name is {props.name} and i am {props.age} year old!{" "}
            </p>
            {/* <p> {props.children} </p> */}
            <input type="text" onChange={props.changed} value={props.name} />
        </Auxiliary>
    );
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};

export default Person;
