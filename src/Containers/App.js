import React, { useState } from "react";
import "./App.css";
import "../Components/Persons/Person/Person.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import "../Components/Cockpit/Cockpit.css";

const App = (props) => {
    const [personState, setPersonState] = useState({
        persons: [
            { id: "1", name: "KK", age: 21 },
            { id: "2", name: "OM", age: 21 },
            { id: "3", name: "RAJ", age: 24 },
        ],
        showPerson: true,
    });

    const nameChangedHandler = (e, id) => {
        const personIndex = personState.persons.findIndex((p) => {
            return p.id === id;
        });

        const person = { ...personState.persons[personIndex] };
        person.name = e.target.value;
        const persons = [...personState.persons];
        persons[personIndex] = person;
        setPersonState({ persons: persons });
    };

    const deletePersonHandler = (personIndex) => {
        const persons = [...personState.persons];
        persons.splice(personIndex, 1);
        setPersonState({ persons: persons });
    };

    const togglePersonsHandler = () => {
        setPersonState((prevState) => {
            return {
                ...prevState,
                showPerson: !prevState.showPerson,
            };
        });
    };

    let persons = null;

    if (!personState.showPerson) {
        persons = <Persons persons={personState.persons} click={deletePersonHandler} changed={nameChangedHandler} />;
    }

    return (
        <div className="App">
            <Cockpit title={props.title} showPerson={personState.showPerson} persons={personState.persons} clicked={togglePersonsHandler} />
            {persons}
        </div>
    );
};

export default App;
