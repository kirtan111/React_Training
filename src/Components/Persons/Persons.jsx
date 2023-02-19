import React from "react";
import Person from "./Person/Person";

export const Persons = (props) =>
    props.persons.map((persons, index) => {
        return <Person click={() => props.click(index)} name={persons.name} age={persons.age} key={persons.id} changed={(e) => props.changed(e, persons.id)} />;
    });
export default Persons;
