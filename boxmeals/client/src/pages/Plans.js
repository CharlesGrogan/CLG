import React from "react";
import { Link, Route } from "react-router-dom";
import Order from "./Order";
import Meals from "./Meals";

function Plans(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum
        faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
        dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
        rhoncus. Etiam vel condimentum magna, quis tempor nulla.
      </p>
      <Link to={"/meals"} role="button" className="btn btn-link">
        Meal Plans
      </Link>
      <Route path={`${props.match.url}/meals`} component={Meals} />{" "}
      <Link to="/order" role="button" className="btn btn-link">
        Order Now
      </Link>
      <Route path={`${props.match.url}/order`} component={Order} />
    </div>
  );
}

export default Plans;
