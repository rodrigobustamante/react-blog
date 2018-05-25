import React, { Fragment } from "react";
import Parallax from "./Parallax";
import TitleCard from "./TitleCard";
import Studies from "./Studies";
import basic from "./../../images/basica.jpg";
import media from "./../../images/media.jpg";
import superior from "./../../images/superior.jpg";

const style = {
  container: {
    padding: 40
  }
};

const studies = [
  {
    title: "Enseñansa Básica",
    image: basic,
    institutions: [
      { name: "Colegio Leonardo Da Vinci" },
      { name: "Colegio Nuestra Señora del Rosario" }
    ]
  },
  {
    title: "Enseñansa Media",
    image: media,
    institutions: [{ name: "Colegio Nuestra Señora del Rosario" }]
  },
  {
    title: "Educación Superior",
    image:  superior,
    institutions: [{ name: "Instituto Profesional Duoc UC" }]
  }
];
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      studies
    };
  }

  render() {
    return (
      <Fragment>
        <Parallax name={this.props.me.name} career={this.props.me.career} />
        <div style={style.container}>
          <TitleCard title="Mis Educación" />
          <Studies studies={this.state.studies} />
        </div>
      </Fragment>
    );
  }
}

export default About;
