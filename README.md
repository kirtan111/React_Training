# React_Training

--------------------------------------------------------------------------------------------------------------------------------------------------------
MODULE_1
--------------------------------------------------------------------------------------------------------------------------------------------------------

1. REAL WORLD SPAs (SINGLE PAGE APPLICATIONS) AND REACT WEB APPS

    • Youtube
    • Facebook
    • Instagram
    • Slack
    • Netflix
    • Twitter
    • Gmail
--------------------------------------------------------------------------------------------------------------------------------------------------------

2. UNDERSTANDING SINGLE PAGE APPLICATION AND MULTIPAGE APPLICATION

    • SPAs are web applications that load a single HTML page and dynamically update its content without having to refresh the page. 

    • MPAs, on the other hand, are traditional web applications that reload the entire page every time a user interacts with the application. MPAs are typically easier to develop, as they don’t require as much client-side logic, and they can be more straightforward to maintain.
    
--------------------------------------------------------------------------------------------------------------------------------------------------------
MODULE_2
--------------------------------------------------------------------------------------------------------------------------------------------------------

    1.  UNDERSATNDING “ let ” AND “ const ”

    • Introduced in ES6
    • Block Scope
    • ‘ let ’ can be updated but can not be redeclared
    • ‘ const ’ can not be updated or redeclared

    • let :

        let Name = "KK";
        let Name = "not my name";
        console.log(Name);
        //output => SyntaxError: redeclaration of let name



        let Name = "KK";
        Name = "my new name";
        console.log(Name);
        //output => "my new name"

    • const :

        const Name = "KK";
        Name = "not my name";
        console.log(Name);
        //output => TypeError: invalid assignment to const 'Name'



        if(true) {
        		const Name = "KK";
        		console.log(Name);
		}

        console.log(Name);
        //output =>  ReferenceError: Name is not defined

--------------------------------------------------------------------------------------------------------------------------------------------------------

2.  ARROW FUNCTION

    Normal Function:

        hey = function () {
        	return "Hello World!"
        }

    ArroW Function:

        hey = () => {
        	return "Hello World!"
        }

    Syntax:

        (parmeter1, parameter2) => expression

        (parameter1, parameter2) => { statements }

--------------------------------------------------------------------------------------------------------------------------------------------------------

3. EXPORTS AND IMPORTS

    Defined in ES6

    Importing default export:
    import GIVEN_NAME from ADDRESS
    
    Importing named values:
    import { PARA_NAME } from ADDRESS
    
    Importing a combination of Default Exports and Named Values:
    import GIVEN_NAME, { PARA_NAME, ... } from ADDRESS
    
    Exporting default export:
    export default GIVEN_NAME
    
    Exporting named values:
    export { PARA_NAME }
    
    
    #TASK:
    Que: export these variables: "A" variable as a default export and rest of other variables as normal export
    const A = "a";
    const B = "b";
    const C = "c";
    const D = "d";
    
    ANS:
    export default A = "a";
    const B = "b";
    const C = "c";
    const D = "d";
    export {B, C, D}

	

    import A from './path'
    import {B, C, D} from './path'

--------------------------------------------------------------------------------------------------------------------------------------------------------

4.  CLASSES, PROPERTIES AND METHODS

    Syntax:

        const VariableName = class ClassName {
        	//CODE
        }

        const VariableName = class {
        	//CODE
        }

    Example:

        class MyClass {
        	constructor(name) {
        		this.name = name;
        	}

        	sayHello() {
        		console.log(`hello my name is ${this.name}`);
        	}
        }

        const Obj = new MyClass("KK"); // class instance
        Obj.sayHello(); // logs "hello my name is KK"

        //here MyClass = Name of the class, name = argument of constructor and sayHello = method of the class

    Properties :

    1.  instance properties - are unique to each instance of a class and can only be accessed through an instance of the class.
    2.  static properties - are shared by all instance of class and can be accessed directly through the class.

        import React from "react";
        import "./App.css";

        class myClass {
        static myStaticProp = 'static';
        myInstanceProp = 'instance';

            constructor () {
            	console.log(myClass.myStaticProp); // static
            	console.log(this.myInstanceProp); // instance
            }

            myMethod() {
            	console.log('hello there');
            }

        }

        const instance = new myClass();
        console.log(instance.myMethod()); // hello there

        export default App;

--------------------------------------------------------------------------------------------------------------------------------------------------------

5.  THE SPREAD AND REST OPERATORS

    Spread operator: The spread operator helps us expand an iterable such as an array where multiple arguments are needed, it also helps to expand the object expressions. In cases where we require all the elements of an iterable or object to help us achieve a task, we use a spread operator.

        var array1 = [10, 20, 30, 40, 50];
        var array2 = [60, 70, 80, 90, 100];
        var array3 = [...array1, ...array2];

        console.log(array3); // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

    Rest operator: The rest parameter is converse to the spread operator. while the spread operator expands elements of an iterable, the rest operator compresses them. It collects several elements. In functions when we require to pass arguments but were not sure how many we have to pass, the rest parameter makes it easier.

        average = (...args) => {
        console.log(args);
        var avg =
        	args.reduce((a, b) => {
        		return a + b;
        }, 0) / args.length;

        	return avg;

        }

        console.log("average of numbers is : "+ average(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5] "average of numbers is : 3"
        console.log("average of numbers is : "+ average(1, 2, 3)); // [1, 2, 3] "average of numbers is : 2"

--------------------------------------------------------------------------------------------------------------------------------------------------------

6. DESTRUCTURING

    Desturcturing is the javascript expression that allows us to unpack values from arrays, objects or from nested objects.

    #TASK:
    Que:
    const arr = [10,{item: {a:{val:[10,20]}}},2,3,4,]

    ANS:
    const [,{item: {a: {val: [x, y]}}},,,,] = arr

--------------------------------------------------------------------------------------------------------------------------------------------------------

7. REFERENCE AND PRIMITIVE DATA TYPES REFRESHER

    Primitive Data Types :
	    String
	    Number
	    Boolean
	    Null
	    Undefined
	    
    
    Reference Data Types :
	    Object
	    Array
	    Function
	    Date
	    RegExp
	    Map
	    Set
	    
		const person = {
		    name : "KK"
		};

		const SecondPerson = person;
		person.name = "Kirtan";
		console.log(SecondPerson); // {name : 'KK'}

		const person = {
		    name : "KK"
		};

		const SecondPerson = { ...person};
		person.name = "Kirtan";
		console.log(SecondPerson); // {name : 'Kirtan'}

--------------------------------------------------------------------------------------------------------------------------------------------------------

8.  ARRAY FUNCTIONS

    .map() - creates a new array with the results of calling a provided function on every element in the calling array.

        let numbers = [1, 2, 3, 4];
        let squares = numbers.map(num => num * num);
        console.log(squares); // Output: [ 1, 4, 9, 16 ]

    .filter() - creates a new array with all elements that pass the test implemented by the provided function.

        let numbers = [1, 2, 3, 4, 5];
        let evens = numbers.filter(num => num % 2)

    .reduce() - applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

        const numbers = [1, 2, 3, 4, 5];

        const sum = numbers.reduce((accumulator, currentValue) => {
        	return accumulator + currentValue;
        }, 0);
        console.log(sum); // Output: 15

    .forEach() - executes a provided function once for each array element.

        const numbers = [1, 2, 3, 4, 5];

        numbers.forEach(function(number) {
        	console.log(number);
        });

    .sort() - sorts the elements of an array in place and returns the sorted array.

        const numbers = [5, 2, 7, 4, 1];
        const sortedNumbers = numbers.sort((a, b) => a - b);
        console.log(sortedNumbers); // Output: [1, 2, 4, 5, 7]

    .concat() - creates a new array that contains the elements of the original array followed by the elements of the provided arrays.

    .slice() - returns a shallow copy of a portion of an array into a new array object.

        let fruits = ['apple', 'banana', 'mango', 'orange'];
        let cut = fruits.slice(1, 3);
        console.log(cut); // Output: [ 'banana', 'mango' ]

    .splice() - adds/removes elements from an array.

        let fruits = ['apple', 'banana', 'mango', 'orange'];
        fruits.splice(2, 1, 'kiwi');
        console.log(fruits); // Output: [ 'apple', 'banana', 'kiwi', 'orange' ]

    .indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.

    .join() - joins all elements of an array into a string.
    
--------------------------------------------------------------------------------------------------------------------------------------------------------
MODULE_3
--------------------------------------------------------------------------------------------------------------------------------------------------------
1.  BUILD WORKFLOW

    Setting up a development environment: This includes installing Node.js, a code editor and creating a new React project.
    
    Designing the component structure: This involves dividing the application into smaller, reusable components.
    
    Implementing the components: This involves writing the code for each component, including the component's render method and any necessary state and props.
    
    Managing the state and props: This involves using React's state and props to manage the component's data and behavior.
    
    Adding interactivity: This involves adding event handlers and making API calls to update the component's state.
    
    Testing: This involves running tests to ensure that the application behaves as expected.
    
    Deployment: This involves preparing the application for deployment and publishing it to a web server or hosting platform.
    
    Maintenance: This involves fixing bugs, adding new features, and making performance optimizations over time.

--------------------------------------------------------------------------------------------------------------------------------------------------------

2.  UNDERSTANDING THE FOLDER STRUCTURE

    - my-react-app/
    
    	- node_modules/: contains all the installed packages and dependencies for the project.
    	
    	- public/: contains the public assets for the project, including the index.html file, which is the entry point of the application.
    	
    	- src/: contains the source code of the application.
    		
    		- components/: contains all the reusable components for the application.
    
    		- App.js: the main component of the application.
    
    		- index.js: the entry point of the React application.
    	
    	- package.json: contains all the dependencies, scripts, and information about the project.
    	
    	- package-lock.json: lists the exact versions of all packages installed in the node_modules/ directory.
    	
    	- README.md: provides information and instructions about the project.

--------------------------------------------------------------------------------------------------------------------------------------------------------

3.  UNDERSTANDING JSX

    JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript.

--------------------------------------------------------------------------------------------------------------------------------------------------------

4.  JSX RESTRICTIONS

    You can’t use JavaScript expressions directly in the JSX code, you have to wrap them in curly braces.
    
    You can’t use if statements or for loops directly in JSX, you have to use conditional rendering for them.
    
    You need to close every tag that you open in JSX.
    
    In JSX, you can’t use the reserved words such as 'class' and 'for' as attribute names. Instead, you have to use 'className' and 'htmlFor' respectively.

--------------------------------------------------------------------------------------------------------------------------------------------------------

5.  FUNCTIONAL COMPONENTS

    Functional components are a simpler way of defining components in React. They are defined as JavaScript functions, which take in props as an argument and return a React element. They are primarily used for presentational components and do not have access to state or lifecycle methods. They are easy to understand, write, and test, and often have less code than class components.

        import React from 'react';

        const MyComponent = (props) => {
        return (
            <div>
                <h1>Hello, {props.name}!</h1>
            </div>
        );
        }

        export default MyComponent;

--------------------------------------------------------------------------------------------------------------------------------------------------------

6.  COMPONENTS AND JSX CHEATSHEET

    Components: Components can be written using uppercase or lowercase letters. Uppercase letters indicate that it is a component and lowercase letters indicate that it is an HTML element.

    JSX elements: JSX elements can be written just like HTML elements, for example <div>.

    Nesting: JSX elements can be nested within other JSX elements.

    Attributes: JSX elements can have attributes, which can be written just like HTML attributes, for example <div className="container">.

    JavaScript expressions: JavaScript expressions can be included within JSX code using curly braces {}.

    Self-closing elements: Self-closing elements can be written just like HTML self-closing elements, for example <img src="logo.png" />.

    Multi-line JSX: Multi-line JSX expressions can be written using parentheses ().

--------------------------------------------------------------------------------------------------------------------------------------------------------

7.  OUTPUTTING DYNAMIC CONTENT

		import React from 'react';
		
			const person = () => {
				return <p> I am {Math.floor(Math.random() * 30)} year old now.</p>;
			};
			
		export default person;

--------------------------------------------------------------------------------------------------------------------------------------------------------

8.  PROPS

	Props (properties) are way to pass data from parent component to child component.

        File: App.js (parent component)

		import React from 'react';
		import Details from './Details';

		function App() {
		    return (
		        <Details name="John Doe" age={30} />
		    );
		}

		export default App;



        File: Details.js (child component)

		import React from 'react';

		function Details(props) {
		    return (
		        <div>
		            <p>My name is {props.name}.</p>
		            <p>I am {props.age} years old.</p>
		        </div>
		    );
		}

		export default Details;

--------------------------------------------------------------------------------------------------------------------------------------------------------

9.  CHILDREN PROPERTY

        File: Card.js

        import React from "react";

        function Card(props) {
            return (
                <div className="card">
                    <h2>{props.title}</h2>
                    <p>{props.children}</p>
                </div>
            );
        }

        export default Card;


        File: App.js

        import React from "react";
        import Card from "./Card";

        function App() {
            return (
                <div className="container">
                    <Card title="Title 1">Content 1</Card>
                    <Card title="Title 2">Content 2</Card>
                </div>
            );
        }

        export default App;


        Output:
        Title 1 (in <h2> size)
        Content 1
        Title 2 (in <h2> size)
        Content 2

--------------------------------------------------------------------------------------------------------------------------------------------------------

10. STATE

	State is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.
	
	Four States: 
		Local State
		Global State
		Server State
		URL State
	
--------------------------------------------------------------------------------------------------------------------------------------------------------	
	
11. PROPS AND STATE

	Props (properties) are way to pass data from parent component to child component.
	Props are read-only.
	
	State is used to manage the internal data of a component.
	it can be changed component itself.
	
		import React, { useState } from "react";
		import "./App.css";

		function App() {

		    const [count, setCount] = useState(0)

		    const handleClick = () => {
			return setCount(count + 1)
		    }

		  return (
		    <div className="App">
			<h4> you clicked button {count} times! </h4>
			<button onClick={handleClick} >enter</button>
		    </div>
		  );
		}

		export default App;
	
-------------------------------------------------------------------------------------------------------------------------------------------------------
	
12. HANDLING EVENTS WITH METHODS

		import React, { useState } from "react";

		export default function App() {

		    const [count, setCount] = useState(0)

		    const handleClick = () => {
			return setCount(count + 1)
		    }

		  return (
		    <div className="App">
			<h4> you clicked button {count} times! </h4>
			<button onClick={handleClick} >enter</button>

			<form onSubmit={(e) => {alert("submitted sucessfully"); e.preventDefault()}}>
			<button> Submit ! </button>
			</form>
		    </div>
		  );
		}
		
--------------------------------------------------------------------------------------------------------------------------------------------------------			
		
13. MANIPULATING THE STATE

	 The state of a component represents its internal state and can be manipulated using the setState method.

--------------------------------------------------------------------------------------------------------------------------------------------------------

14. FUNCTION COMPOPNENT NAMING

	[Domain]|[Page/Context][ComponentName][Type]
	
--------------------------------------------------------------------------------------------------------------------------------------------------------	

15. STATELESS AND STATEFUL COMPONENTS

	In React, a stateless component is a component that only receives data and returns a view based on that data. It does not manage or modify any data and does not have its own state.

	On the other hand, a stateful component is a component that manages data, has its own state, and updates the UI based on that state.

--------------------------------------------------------------------------------------------------------------------------------------------------------

16. PASSING METHOD REFERENCES BETWEEN COMPONENTS

	File: App.js
	
		import React, { useState } from "react";
		import "./App.css";
		import Child from "./Child";

		function App() {

		    const [count, setCount] = useState(0)

		    const addCount = () => {
			return setCount(count + 1)
		    }

		  return (
		    <div className="App">
			<Child onButtonClick={addCount}/>
			<p> you clicked {count} times </p>
		    </div>
		  );
		}

		export default App;
		
	
	
	File: Child.js
	
		import React from 'react';

		export default function Child(props) {
		    return(
			<div>
				<button onClick={props.onButtonClick}> Click me </button>
		    	</div>
		    )
		}

--------------------------------------------------------------------------------------------------------------------------------------------------------

17. TWO WAY BINDING

	Two-way binding enables synchronization of data between a parent component and its child component.In two-way binding, when a change is made to the data in the child component, it is immediately reflected in the parent component, and when a change is made in the parent component, it is immediately reflected in the child component.

		import React, { useState } from "react";

		function App() {
		  const [text, setText] = useState("");

		  return (
		    <div>
		      <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} />
		      <p>{text}</p>
		    </div>
		  );
		}

		export default App;
		
--------------------------------------------------------------------------------------------------------------------------------------------------------
		
18. STYLING WITH STYLESHEETS
    
    
--------------------------------------------------------------------------------------------------------------------------------------------------------
MODULE_4
--------------------------------------------------------------------------------------------------------------------------------------------------------
    
    1. RENDERING CONTENT CONDITIONALLY

	Rendering content conditionally means showing different content based on certain conditions or states. In React, you can use conditional rendering to display different components, elements, or content based on the state of your application.
	One common way to conditionally render content is using the ternary operator.

		import React, { useState } from "react";
		import "./App.css";

		function App() {

		    const [isLoggedIn, setisLoggedIn] = useState(false)

		  return (
		    <div className="App">
			{isLoggedIn ? <p>Welcome Back!</p> : <p>please log in to continue</p>}
			<button onclick = {() => setisLoggedIn(!isLoggedIn)}>
			    {isLoggedIn ? 'Log Out' : 'Log In'}
			</button>
		    </div>
		  );
		}

		export default App;

--------------------------------------------------------------------------------------------------------------------------------------------------------

2. HANDLING DYNAMIC CONTANT 'THE JAVASCRIPT WAY'

--------------------------------------------------------------------------------------------------------------------------------------------------------

3. OUTPUTTING LISTS

		function NumberList(props) {
			const numbers = props.numbers;
			const listItems = numbers.map((number) =>
		    <li> {number * 2} </li>
		  );
		  
		  return (
		    <ul>{listItems}</ul>
		  );
		}

		const numbers = [1, 2, 3, 4, 5];

		const root = ReactDOM.createRoot(document.getElementById('root')); 
		root.render( <NumberList numbers={numbers} />);

--------------------------------------------------------------------------------------------------------------------------------------------------------

4. **LISTS AND STATE

		import React, { useState } from 'react';

		function App() {
		  const [persons, setPersons] = useState([
		    { name: 'Lucy', age: 23 },
		    { name: 'Max', age: 12 },
		    { name: 'Mike', age: 34 },
		  ]);

		  const deletePersonHandler = (personIndex) => {
		    const updatedPersons = [...persons];
		    updatedPersons.splice(personIndex, 1);
		    setPersons(updatedPersons);
		  };

		  return (
		    <div className="App">
		      {persons.map((person, index) => (
			<Person
			  key={index}
			  name={person.name}
			  age={person.age}
			  click={() => deletePersonHandler(index)}
			/>
		      ))}
		    </div>
		  );
		}

		export default App;
		
--------------------------------------------------------------------------------------------------------------------------------------------------------

5. UPDATING STATE IMMUTABLY

	A good practice is to create a "copy of your persistence array" before manipulating it. There are two simple ways to do it; 1. By using .slice() method without arguments and 2. By using spread operator. that creates the copy of an Array.
	
--------------------------------------------------------------------------------------------------------------------------------------------------------

6. LISTS AND KEY

	The key prop is an important property we should add when rendering list of data and that is why react tell us to do so.
	As per Example of "OUTPUTTING LIST";
		function NumberList(props) {
			const numbers = props.numbers;
			const listItems = numbers.map((number) =>
		    <li key = {numbers.toString()} > {number * 2} </li>
		);
		  
		  return (
		    <ul>{listItems}</ul>
		  );
		}

		const numbers = [1, 2, 3, 4, 5];

		const root = ReactDOM.createRoot(document.getElementById('root')); 
		root.render( <NumberList numbers={numbers} />);
	
7. FLEXIBLE LISTS
--------------------------------------------------------------------------------------------------------------------------------------------------------
MODULE_5
--------------------------------------------------------------------------------------------------------------------------------------------------------

1.  SETTING STYLE DYNAMICALLY

		import React from "react";
		import "./App.css";

		function App() {

		    const style = {
			background: 'red',
			padding: '8px',
			color: 'white',
			font: 'inherit'
		    }

		  return (
		    <div className="App">
			<button style = {style} > I'm KK ! </button>
		    </div>
		  );
		}

		export default App;
		
--------------------------------------------------------------------------------------------------------------------------------------------------------

2.  SETTING CLASS NAMES DYNAMICALLY (Like Bootstrap)


	CSS File: 

		.App {
			text-align: center;
		}
		.red {
			color: red;
		}
		.bold{
			font-weight: bold;
		}

	JSX File:
	
		render() {
		  let classes = ['red', 'bold'].join(' ');    // classes = red bold
			return (
		      <p className = {classes} >Some Rnadom Paragraph</p> // it looks like <p className = "red bold" > ... </p>
		}

	JSX File:

		const classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red');
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold');
		}
		return (
		      <p className = {classes} >Some Rnadom Paragraph</p> 
		}

--------------------------------------------------------------------------------------------------------------------------------------------------------

3.  ADDING AND USING RADIUM

	Radium is a popular npm package for React which allows us to use inline styling with pseudo selectors and media queries. Without this third party package, one can not do inline styling with pseudo selectors because React doesn’t allow us to use pseudo-selectors in inline styling.
	
	install radium: 
	
		npm install --save radium
		
		import Radium from 'radium';

--------------------------------------------------------------------------------------------------------------------------------------------------------

4.  USING RADIUM FOR MEDIA QUERIES

		import Radium from 'radium';

		const MyComponent = () => {
		  const styles = {
		    color: 'red',
		    '@media (min-width: 768px)': {
		      color: 'blue'
		    }
		  };

		  return (
		    <div style={styles}>Hello World!</div>
		  );
		}

		export default Radium(MyComponent);


--------------------------------------------------------------------------------------------------------------------------------------------------------

5.  ADDING PSEUDO SELECTORS

		import React from 'react';
		import Radium from 'radium';

		const styles = {
			color: 'red',
			  ':hover': {
			color: 'blue',
			},
		};

		const MyComponent = () => {
		  return <div style={styles}>Hello World!</div>;
		}

		export default Radium(MyComponent);
