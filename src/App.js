import React, { Component, Fragment } from "react";
import "./App.css";
import About from "./components/About/About";
import Toolbar from "./components/layout/Toolbar";
import SubMenu from "./components/layout/SubMenu";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
const SomeComponent = withRouter(props => <SubMenu {...props} />);
class App extends Component {
  state = {
    me: {
      name: "Rodrigo Bustamante",
      career: "Software Developer",
      // description:
      //   "Titulado de Ingeniería en Informática de Duoc UC, sede Antonio Varas.  " +
      //   "Con 22 años, He realizado diferentes proyectos dentro como fuera de mi institución académica."
    }
  };
  componentDidMount() { }
  render() {
    return (
      <Router>
        <Fragment>
          <Toolbar me={this.state.me} />
          <SomeComponent />

          <Switch>
            <Route
              exact
              path="/"
              render={() => <About me={this.state.me} />}
            />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>

        </Fragment>
      </Router>
    );
  }
}

export default App;
