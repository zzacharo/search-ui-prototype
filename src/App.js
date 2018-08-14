import React, { Component } from 'react';
import './App.css';

import Searchbar from './SearchBar';
import Pagination from './Pagination';
import ResultsList from './ResultsList';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Searchbar />
          <Pagination />
        </header>
        <div className="App-content">
          <div className="App-left">
            Facets
          </div>
          <div className="App-right">
            <ResultsList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
