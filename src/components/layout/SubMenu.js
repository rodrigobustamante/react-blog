import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";
class SubMenu extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    switch (this.props.location.pathname) {
      case "/":
        this.setState({ value: 0 })
        break;
      case "/projects":
        this.setState({ value: 1 })
        break;
      case "/contact":
        this.setState({ value: 2 })
        break;
      default:
        this.setState({ value: 0 })
        break;
    }
  }

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
          <Tab component={Link} to="/projects" label="Proyectos" />
          <Tab component={Link} to="/contact" label="Contacto" />
        </Tabs>
      </Paper>
    );
  }
}

export default SubMenu;
