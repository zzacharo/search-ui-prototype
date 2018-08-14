import React, { Component } from 'react';
import './App.css';

import { Icon, Row, Col } from 'antd';

import Searchbar from './SearchBar';
import Paging from './Pagination';
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
            <Row>
              <Col span={4}></Col>
              <Col span={6}>Found 12345678 results</Col>
              <Col span={8}><Paging /></Col>
              <Col span={2}>
                <Row>
                  <Col span={12}><Icon type="bars" /></Col>
                  <Col span={12}><Icon type="appstore-o" /></Col>
                </Row>
              </Col>
              <Col span={4}><SortingBox /></Col>
            </Row>
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
