import React, { useState } from "react";
import "./App.css";
import Person from "../Components/Persons/Person";
import "../Components/Persons/Person.css";

const App = () => {
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

    // const togglePersonsHandler = () => {
    //     const doesShow = personState.showPerson;
    //     setPersonState({ showPersons: !doesShow });
    // };

    const style = {
        backgroundColor: "green",
        color: "white",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor: "pointer",
        ":hover": {
            backgroundColor: "lightgreen",
            color: "black",
        },
    };

    let persons = null;

    if (!personState.showPerson) {
        persons = (
            <div>
                {personState.persons.map((persons, index) => {
                    return <Person click={() => deletePersonHandler(index)} name={persons.name} age={persons.age} key={persons.id} changed={(e) => nameChangedHandler(e, persons.id)} />;
                })}
            </div>
        );

        style.backgroundColor = "red";
        style[":hover"] = {
            backgroundColor: "salmon",
            color: "black",
        };
    }

    const classes = [];
    if (personState.persons.length <= 2) {
        classes.push("red");
    }
    if (personState.persons.length <= 1) {
        classes.push("bold");
    }

    return (
        <div className="App">
            <h1>Heading</h1>
            <p className={classes.join(" ")}> THIS IS WORKING </p>
            <button style={style} onClick={togglePersonsHandler}>
                Show Name
            </button>
            {persons}
        </div>
    );
};

export default App;
