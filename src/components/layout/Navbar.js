import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

class Navbar extends React.Component {
  render() {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="display1" color="inherit">Rodrigo Bustamante</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
