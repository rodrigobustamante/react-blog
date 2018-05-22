import React, { Component, Fragment } from 'react';
import './App.css';
import About from './components/About/About';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
