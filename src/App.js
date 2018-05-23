import React, { Component, Fragment } from "react";
import "./App.css";
import About from "./components/About/About";
import Toolbar from "./components/layout/Toolbar";
import SubMenu from "./components/layout/SubMenu";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
const SomeComponent = withRouter(props => <SubMenu {...props}/>);
class App extends Component {
  state = {
    blogName: "Rodrigo Bustamante"
  };
  componentDidMount() {
    
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Toolbar name={this.state.blogName} />
          <SomeComponent />
          <Switch>
            <Route exact path="/" render={()=><About name={this.state.blogName} />} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
