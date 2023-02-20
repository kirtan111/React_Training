import React, { useEffect, memo } from "react";
import "./Cockpit.css";

const Cockpit = (props) => {
    useEffect(() => {
        // const timer = setTimeout(() => {
        //     alert("UPDATED...");
        // }, 1000);
        return () => {
            // clearTimeout(timer);
            console.log("cleanup work");
        };
    }, []);

    const assignedClasses = [];

    let btnclass = "";

    if (props.showPerson) {
        btnclass = "red";
    }
    if (props.personsLength <= 2) {
        assignedClasses.push("Red");
    }
    if (props.personsLength <= 1) {
        assignedClasses.push("Bold");
    }

    console.log("cockpit jsibuvuvikvikuhsdfghjklkjhgfdsdfghj");

    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}> THIS IS WORKING </p>
            <button className={btnclass} onClick={props.clicked}>
                Show Name
            </button>
        </div>
    );
};

export default memo(Cockpit);
