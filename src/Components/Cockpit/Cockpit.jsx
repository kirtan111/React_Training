import React from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
    const assignedClasses = [];
    let btnclass = "";
    if (props.showPerson) {
        btnclass = "red";
    }
    if (props.persons.length <= 2) {
        assignedClasses.push("red");
    }
    if (props.persons.length <= 1) {
        assignedClasses.push("bold");
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}> THIS IS WORKING </p>
            <button className={btnclass} onClick={props.clicked}>
                Show Name
            </button>
        </div>
    );
};

export default Cockpit;
