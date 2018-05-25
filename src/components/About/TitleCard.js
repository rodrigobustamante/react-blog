import React from "react";
import { Paper, Typography } from "@material-ui/core";

const style = {
  paddingCard: {
    paddingTop: 10,
    paddingRight: 50,
    paddingLeft: 50,
    paddingBottom: 10
  }
};

class TitleCard extends React.Component {
  render() {
    return (
      <Paper style={style.paddingCard}>
        <Typography align="center" variant="display2">
          {this.props.title}
        </Typography>
      </Paper>
    );
  }
}

export default TitleCard;
