import React, { Component } from 'react';
import './App.css';
import Searchbar from './SearchBar';
import Pagination from './Pagination';
import ResultsList from './ResultsList';
import SortingBox from './SortingBox';
import Facets from './Facets';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Searchbar />

          <div className="pt-20">
            <label className="mr-20">Found 12345678 results</label>
            <span className="mr-20"> <Pagination/> </span>
            <SortingBox />
          </div>

        </header>
        <div className="App-content">
          <div className="App-left">
            <b>Active filters:</b>
            <Facets />
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
