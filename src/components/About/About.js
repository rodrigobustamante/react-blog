import React, { Fragment } from "react";
import Parallax from "./Parallax";
import TitleCard from './TitleCard';

const style = {
  container: {
    padding: 40,
  }
}

const studies = [
  {
    title: "Enseñansa Básica",
    image: "",
    institutions: [
      "Colegio Leonardo Da Vinci",
      "Colegio Nuestra Señora del Rosario"
    ],
  },
  {
    title: "Enseñansa Media",
    image: "",
    institutions: "Colegio Nuestra Señora del Rosario"
  },
  {
    title: "Educación Superior",
    image: "",
    institutions: "Instituto Profesional Duoc UC"
  }
];
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      studies
    }
  }

  render() {
    return (
      <Fragment>
        <Parallax name={this.props.me.name} career={this.props.me.career} />
        <div style={style.container}>
          <TitleCard title="Mis Educación" />
          <h1>Hola</h1>
        </div>
      </Fragment>
    );
  }
}

export default About;
