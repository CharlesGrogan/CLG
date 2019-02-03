import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Howitworks from "./components/pages/Howitworks";
import BoxMeals from "./components/pages/BoxMeals";
import Plans from "./components/pages/Plans";
import Meals from "./components/pages/Meals";
import Order from "./components/pages/Order";

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={BoxMeals} />
          <Route exact path="/howitworks" component={Howitworks} />
          <Route exact path="/plans" component={Plans} />
          <Route exact path="/meals" component={Meals} />
          <Route exact path="/order" component={Order} />
        </div>
      </Router>
    </div>
  );
}

export default App;
