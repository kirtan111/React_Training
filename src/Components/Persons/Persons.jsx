import React from "react";
import Person from "./Person/Person";

const Persons = (props) => {
    console.log("[Persons.js] Rendering ...");
    return props.persons.map((persons, index) => {
        return <Person click={() => props.click(index)} name={persons.name} age={persons.age} key={persons.id} changed={(event) => props.changed(event, persons.id)} />;
    });
};
export default Persons;
