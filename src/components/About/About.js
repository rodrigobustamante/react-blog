import React from "react";
import Parallax from './Parallax';
class About extends React.Component {
  render() {
    return (
      <Parallax name={this.props.me.name} career={this.props.me.career} />
    );
  }
}

export default About;
