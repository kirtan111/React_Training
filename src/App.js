import React, { useState } from "react";
// import Details from "./Details";
import Person from "./Person";
import "./Person.css";

const App = () => {
    const [persons, setPersons] = useState({
        person: [
            { id: "1", name: "KK", age: 21 },
            { id: "2", name: "OM", age: 21 },
            { id: "3", name: "RAJ", age: 24 },
        ],
        showPerson: false,
    });

    // const newChangeName = (e, id) => {
    //     setPersons({
    //         person: [
    //             { name: "Kirtan Thummar", age: 21 },
    //             { name: "Tejas Rangani", age: 25 },
    //             { name: e.target.value, age: 3.5 },
    //         ],
    //         showPerson: persons.showPerson,
    //     });
    // };

    // const newChangeName = (e, id) => {
    //     const personIndex = persons.person.findIndex((p) => p.id === id);
    //     const person = { ...persons.person[personIndex] };
    //     person.name = e.target.value;
    //     const kkm = [...persons.person];
    //     kkm[personIndex] = person;
    //     setPersons({ person: person });
    // };

    // const togglePersonsHandler = () => {
    //     // const doesShow = persons.showPerson;
    //     // setPersons({ showPerson: !doesShow });
    //     setPersons((prevState) => {
    //         return {
    //             ...prevState,
    //             showPerson: !prevState.showPerson,
    //         };
    //     });
    // };

    // let people = null;

    // if (persons.showPerson) {
    //     people = (
    //         <div>
    //             <Person name={persons.person[0].name} age={persons.person[0].age} />
    //             <Person name={persons.person[1].name} age={persons.person[1].age} />
    //             <Person name={persons.person[2].name} age={persons.person[2].age} changed={newChangeName} />
    //         </div>
    //     );
    // }

    const deletePerson = (personIndex) => {
        // const person = persons.person.splice(); //.splice() method
        const person = [...persons.person]; // spread operator
        person.splice(personIndex, 1);
        setPersons({ person: person });
    };

    let people = null;

    if (!persons.showPerson) {
        people = (
            <div>
                {persons.person.map((pupil, index) => {
                    return <Person click={() => deletePerson(index)} name={pupil.name} age={pupil.age} key={pupil.id} changed={(e) => newChangeName(e, pupil.id)} />;

                    {
                        /* return <Person click={() => deletePerson(index)} name={pupil.name} age={pupil.age} key={pupil.id} changed={(e) => newChangeName(e, pupil.id)} />; */
                    }
                })}
            </div>
        );
    }

    return (
        <div className="App">
            <h1>Heading</h1>
            <button className="switchNameBtn">Switch Name</button>
            {people}
        </div>
    );
};

export default App;
