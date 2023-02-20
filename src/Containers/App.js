import React, { useState } from "react";
import "./App.css";
// import "../Components/Persons/Person/Person.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
// import "../Components/Cockpit/Cockpit.css";
// import person from "../Components/Persons/Person/Person";

const App = (props) => {
    const [personState, setPersonState] = useState({
        persons: [
            { id: "1", name: "KK", age: 21 },
            { id: "2", name: "OM", age: 21 },
            { id: "3", name: "RAJ", age: 24 },
        ],
        showPerson: true,
        showCockpit: true,
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

    console.log("[App.js] rendered");

    let persons = null;

    if (!personState.showPerson) {
        persons = <Persons persons={personState.persons} click={deletePersonHandler} changed={nameChangedHandler} />;
    }

    return (
        <div className="App">
            <button
                onClick={() => {
                    setPersonState((prevState) => {
                        return {
                            ...prevState,
                            showCockpit: !prevState.showCockpit,
                        };
                    });
                }}
            >
                Remove Cockpit
            </button>
            {personState.showCockpit ? <Cockpit title={props.title} showPerson={personState.showPerson} personsLength={personState.persons.length} clicked={togglePersonsHandler} /> : null}
            {persons}
        </div>
    );
};

export default App;
