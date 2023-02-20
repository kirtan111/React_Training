import React, { useState } from "react";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import "./App.css";
import WithClass from "../hoc/WithClass";

const App = (props) => {
    const [personState, setPersonState] = useState({
        persons: [
            { id: "1", name: "KK", age: 21 },
            { id: "2", name: "OM", age: 21 },
            { id: "3", name: "RAJ", age: 24 },
        ],
        showPerson: true,
        showCockpit: true,
        changeCounter: 0,
        authenticated: false,
    });

    const nameChangedHandler = (e, id) => {
        const personIndex = personState.persons.findIndex((p) => {
            return p.id === id;
        });

        const person = { ...personState.persons[personIndex] };
        person.name = e.target.value;
        const persons = [...personState.persons];
        persons[personIndex] = person;
        setPersonState((prevState) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1,
            };
        });
    };

    console.log(personState.changeCounter);

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

    const loginhandler = () => {
        setPersonState((prevState) => {
            return {
                ...prevState,
                authenticated: !prevState.authenticated,
            };
        });
    };

    // const loginhandler = () => {
    //     setPersonState({ authenticated: true });
    // };

    console.log("[App.js] rendered");

    let persons = null;

    if (!personState.showPerson) {
        persons = <Persons isAuthenticated={personState.authenticated} persons={personState.persons} click={deletePersonHandler} changed={nameChangedHandler} />;
    }

    return (
        <WithClass classes="App">
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
            {personState.showCockpit ? <Cockpit title={props.title} login={loginhandler} showPerson={personState.showPerson} personsLength={personState.persons.length} clicked={togglePersonsHandler} /> : null}
            {persons}
        </WithClass>
    );
};

export default App;
