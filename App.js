import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListHome from "./Components/ListHome";
import Details from "./Components/Details";
import AddOrder from "./Components/AddOrder";
import EditOrder from "./Components/EditOrder";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ListHome} />
          <Route exact path="/orderdetails/:id" component={Details} />
          <Route exact path="/order" component={AddOrder}/>
          <Route exact path="/order/:id" component={EditOrder}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
