import React, { Component } from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  lists: state.lists
});

class App extends Component {
  render() {
    const { lists } = this.props;

    return (
      <div className="App">
        <h2>Hello Test</h2>
        {lists.map(list => (
          <TrelloList title={list.title} cards={list.cards} />
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
