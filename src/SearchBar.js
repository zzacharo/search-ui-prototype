import React, { Component } from 'react';
import { Input } from 'antd';

const Search = Input.Search;

class Searchbar extends Component {
  render() {
    return (
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: 500 }}
      />
    );
  }
}

export default Searchbar;
