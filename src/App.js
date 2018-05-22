import React, { Component, Fragment } from "react";
import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/layout/Navbar";
import SubMenu from "./components/layout/SubMenu";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
const SomeComponent = withRouter(props => <SubMenu {...props}/>);
class App extends Component {
  state = {
    route: ""
  };
  componentDidMount() {
    
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <SomeComponent />
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
