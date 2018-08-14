import React, { Component } from 'react';


class Searchbar extends Component {
  render() {
    return (
      <div className="Searchbar">
        <input type="text" value="Type something..." />
        <button>Search</button>
      </div>
    );
  }
}

export default Searchbar;
