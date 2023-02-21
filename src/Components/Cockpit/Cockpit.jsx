import React, { useEffect, memo, useRef, useContext } from "react";
import "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        return () => {
            // eslint-disable-next-line
            // toggleBtnRef.current.click();
            return () => {
                console.log("cleanup work");
            };
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

    console.log("cockpit");

    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}> THIS IS WORKING </p>
            <button ref={toggleBtnRef} className={btnclass} onClick={props.clicked}>
                Show Name
            </button>
            {<button onClick={authContext.login}> Login </button>}
        </div>
    );
};

export default memo(Cockpit);
