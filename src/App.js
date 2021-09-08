 import React from "react";
 import Home from "./Home";
 import { Route, Switch } from "react-router";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error"
import Service from "./Pages/Service";
 const App =()=> {
   return (
     <>
     <Switch>
       <Route  exact path="/" component={Home}></Route>
       <Route  path="/about" component={About}></Route>
       <Route  path="/contact" component={Contact}></Route>
       <Route  path="/service" component={Service}></Route>
       <Route  path="/error" component={Error}></Route>
       <Route  component={Error}></Route></Switch>
     </>
   );
 };
 export default App;