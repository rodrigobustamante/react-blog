import React from "react";
import StudiesCard from "./StudiesCard";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: { paddingTop: 25 },
};

class Studies extends React.Component {
  render() {
    return (
      <Grid container style={styles.root}>
        <Grid item xs={12} sm={12}>
          <Grid container direction="row" justify="center">
            {this.props.studies.map((study, i) => {
              return (
                <StudiesCard
                  key={i}
                  title={study.title}
                  image={study.image}
                  institutions={study.institutions}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Studies;
