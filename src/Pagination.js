import React, { Component } from 'react';
import { Pagination as SemanticPagination } from 'semantic-ui-react'

class Pagination extends Component {
  render() {
    return (
      <SemanticPagination defaultActivePage={5} totalPages={10} />
    );
  }
}

export default Pagination;
