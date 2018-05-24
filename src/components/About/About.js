import React from "react";
import { Parallax } from "react-parallax";
import { Paper, Typography } from "@material-ui/core";
import parallaxImage from "./../../images/parallax-image.png";

const style = {
  padding: {
    paddingTop: 10,
    paddingRight: 50,
    paddingLeft: 50,
    paddingBottom: 10
  },
  height: {
    height: 500
  }
};
const insideStyles = {
  background: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
class About extends React.Component {
  render() {
    return (
      <Parallax bgImage={parallaxImage} strength={-100}>
        <div style={style.height}>
          <div style={insideStyles}>
            <Paper style={style.padding} elevation={10}>
              <Typography align="center" variant="display2">
                {this.props.me.name}
              </Typography>
              <Typography align="center" variant="display1">
                Software Developer
              </Typography>
            </Paper>
          </div>
        </div>
      </Parallax>
    );
  }
}

export default About;
