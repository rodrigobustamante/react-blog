import React from "react";
import { Paper, Typography } from "@material-ui/core";

const style = {
  paper: {
    paddingTop: 10,
    paddingRight: 50,
    paddingLeft: 50,
    paddingBottom: 10,
    backgroundColor: "#3B90E3",
  },
  title: {
    color: "#FFFFFF"
  }

};

class TitleCard extends React.Component {
  render() {
    return (
      <Paper style={style.paper}>
        <Typography style={style.title} align="center" variant="display2">
          {this.props.title}
        </Typography>
      </Paper>
    );
  }
}

export default TitleCard;
