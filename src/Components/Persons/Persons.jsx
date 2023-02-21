import React from "react";
import Person from "./Person/Person";

const Persons = (props) => {
    console.log("[Persons.js] Rendering ...");
    return props.persons.map((person, index) => {
        return <Person isAuth={props.isAuthenticated} click={() => props.click(index)} name={person.name} age={person.age} key={person.id} changed={(event) => props.changed(event, person.id)} />;
    });
};
export default Persons;
