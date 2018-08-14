import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class SortingBox extends Component {
  render() {
    return (
      <Select defaultValue="best" onChange={handleChange}>
        <Option value="best">Best Match</Option>
        <Option value="recent">Most Recent</Option>
      </Select>
    );
  }
}

export default SortingBox;
