import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { Router, Link } from 'react-router-dom';
class Footer extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    return (
      <Paper>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          fullWidth
        >
          <Tab component={Link} to="/" label="Sobre mi" />
          <Tab component={Link} to="/blog" label="Blog" />
          <Tab component={Link} to="/contact" label="Contacto" />
        </Tabs>
      </Paper>
    );
  }
}

export default Footer;
