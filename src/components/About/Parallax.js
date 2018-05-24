import React from "react";
import { Parallax as ParallaxComponent } from "react-parallax";
import { Paper, Typography } from "@material-ui/core";
import parallaxImage from "./../../images/parallax-image.png";

const style = {
  paddingCard: {
    paddingTop: 10,
    paddingRight: 50,
    paddingLeft: 50,
    paddingBottom: 10
  },
  parallax: {
    paddingTop: 88,
  },
  height: {
    height: 500,
  }
};
const insideStyles = {
  background: "white",
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
class Parallax extends React.Component {
  render() {
    return (
      <ParallaxComponent style={style.parallax} bgImage={parallaxImage} strength={-100}>
        <div style={style.height}>
          <div style={insideStyles}>
            <Paper style={style.paddingCard} elevation={10}>
              <Typography align="center" variant="display2">
                {this.props.name}
              </Typography>
              <Typography align="center" variant="display1">
                {this.props.career}
              </Typography>
            </Paper>
          </div>
        </div>
      </ParallaxComponent>
    );
  }
}

export default Parallax;
