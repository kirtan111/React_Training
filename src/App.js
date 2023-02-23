import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Blog from "./containers/Blog/Blog";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Blog />
            </div>
        </Router>
    );
};

export default App;
