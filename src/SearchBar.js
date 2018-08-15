import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import * as _ from 'lodash';

class Searchbar extends Component {

  render() {
    let { width, placeholder} = this.props;
    width = width || 500;
    placeholder = placeholder || "input search text";
    return (
      <Input
        placeholder= {placeholder}
        action={{ icon: 'search' }}
        onChange={_.debounce((e, value) => console.log(value), 500)}
        style={{ width: width}}
      />
    );
  }
}

export default Searchbar;