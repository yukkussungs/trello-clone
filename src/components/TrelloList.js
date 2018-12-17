import React from "react";
import TrelloCard from "./TrelloCard";

const styles = {
  container: {
    backgroundColor: "#ccc",
    boderRadius: 3,
    width: 300,
    padding: 8
  }
};

const TrelloList = ({ title, cards }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map(card => (
        <TrelloCard text={card.text} />
      ))}
    </div>
  );
};

export default TrelloList;
