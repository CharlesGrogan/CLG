import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Howitworks from "./components/pages/Howitworks";
import BoxMeals from "./components/pages/BoxMeals";
import Plans from "./components/pages/Plans";
import Meals from "./components/pages/Meals";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={BoxMeals} />
        <Route exact path="/howitworks" component={Howitworks} />
        <Route exact path="/plans" component={Plans} />
        <Route path="/Meals" component={Meals} />
      </div>
    </Router>
  );
}

export default App;
