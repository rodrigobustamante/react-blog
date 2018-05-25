import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

const styles = {
  paddingCards: {
    padding: 10
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

class StudiesCard extends React.Component {
  render() {
    return (
      <div style={styles.paddingCards}>
        <Card style={styles.card}>
          <CardMedia
            style={styles.media}
            image={this.props.image}
            title={this.props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.title}
            </Typography>
            <hr />
            <ul>
              {this.props.institutions.map((institution, i) => {
                return <li key={i}>{institution.name}</li>;
              })}
            </ul>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default StudiesCard;
