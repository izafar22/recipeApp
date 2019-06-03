import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import DefaultPage from "./pages/DefaultPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Switch>
          {/* <div className="text-slanted">
            Hello from recipe
            <Home />
            <Recipes />
            <SingleRecipe />
            <DefaultPage />
          </div> */}
          <Route path="/" exact component={Home} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/recipes/:id" component={SingleRecipe} />
          <Route component={DefaultPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
