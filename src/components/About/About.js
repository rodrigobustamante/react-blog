import React from "react";
import { Paper, Typography } from '@material-ui/core';

const style = {
  padding: {
    padding: 10,
  }
};
class About extends React.Component {
  render() {
    return (
      <Paper style={style.padding} elevation={10}>
        <Typography align="center" variant="display2">
          {this.props.me.name}
        </Typography>
        <Typography align="center" variant="display1">
          Software Developer
        </Typography>
      </Paper>
    );
  }
}

export default About;
