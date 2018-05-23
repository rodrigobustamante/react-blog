import React from "react";
import { AppBar, Toolbar as Bar, Typography } from "@material-ui/core";

class Toolbar extends React.Component {
  render() {
    console.log(this.props);
    return (
      <AppBar position="static" color="primary">
        <Bar>
          <Typography variant="display1" color="inherit">{this.props.name}</Typography>
        </Bar>
      </AppBar>
    );
  }
}

export default Toolbar;
