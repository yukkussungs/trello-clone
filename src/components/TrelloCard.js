import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const styles = {
  cardContainer: {
    marginBottom: 8
  }
};

const TrelloCard = ({ text }) => {
  return (
    <Card style={styles.cardContainer}>
      <CardContent>
        <Typography gutteBottom>{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default TrelloCard;
