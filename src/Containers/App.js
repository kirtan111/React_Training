// App.js

import React, { useState } from "react";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import "./App.css";
import WithClass from "../hoc/WithClass";
import AuthContext from "../context/auth-context";

const App = (props) => {
    const [personState, setPersonState] = useState({
        persons: [
            { id: "1", name: "KK", age: 21 },
            { id: "2", name: "OM", age: 21 },
            { id: "3", name: "RAJ", age: 24 },
        ],
        showPerson: false,
        showCockpit: true,
        changeCounter: 0,
        authenticated: false,
    });

    const nameChangedHandler = (e, id) => {
        // const personIndex = personState.persons.findIndex((p) => {
        //     return p.id === id;
        // });
        // const person = { ...personState.persons[personIndex] };
        // person.name = e.target.value;
        // const persons = [...personState.persons];
        // persons[personIndex] = person;
        // setPersonState((prevState) => {
        //     return {
        //         persons: persons,
        //         changeCounter: prevState.changeCounter + 1,
        //     };
        // });
        setPersonState((prevState) => {
            const persons = [...prevState.persons];
            const personIndex = persons.findIndex((p) => {
                return p.id === id;
            });
            const person = { ...persons[personIndex] };
            person.name = e.target.value;
            persons[personIndex] = person;
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1,
                authenticated: prevState.authenticated,
                showCockpit: prevState.showCockpit,
                showPerson: prevState.showPerson,
            };
        });
    };

    console.log(personState.changeCounter);

    // const deletePersonHandler = (personIndex) => {
    //     const persons = [...personState.persons];
    //     persons.splice(personIndex, 1);
    //     setPersonState({ persons: persons });
    // };

    const deletePersonHandler = (personIndex) => {
        const persons = [...personState.persons];
        persons.splice(personIndex, 1);
        setPersonState({ persons: persons, changeCounter: personState.changeCounter, authenticated: personState.authenticated, showCockpit: personState.showCockpit, showPerson: personState.showPerson });
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

    console.log("[App.js] rendered");

    let persons = null;

    if (personState.showPerson) {
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
            <AuthContext.Provider value={{ authenticated: personState.authenticated, login: loginhandler }}>
                {personState.showCockpit ? <Cockpit title={props.title} login={loginhandler} showPerson={personState.showPerson} personsLength={personState.persons.length} clicked={togglePersonsHandler} /> : null}
                {persons}
            </AuthContext.Provider>
        </WithClass>
    );
};

export default App;
