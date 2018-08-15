import React, { Component } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
class SortingBox extends Component {

  render() {
    const options = [
      { key: 1, text: 'Best Match', value: 1 },
      { key: 2, text: 'Most recent', value: 2 },
      { key: 3, text: 'Newest created', value: 3 },
    ]
    return (
      <Menu compact>
        <Dropdown defaultValue={1} options={options} selection/>
      </Menu>
    );
  }
}

export default SortingBox;
