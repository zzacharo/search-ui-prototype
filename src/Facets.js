import React, { Component } from 'react';
import { Card, Checkbox, Dropdown } from 'semantic-ui-react';
import SearchBar from './SearchBar';

function onClick(e) {
  console.log(`${e.target.value}`);
}
const options = [
  { key: 'literature', text: 'literature', value: 'literature' },
  { key: 'authors', text: 'authors', value: 'authors' },
  { key: 'article', text: 'article', value: 'article' },
]

class Facets extends Component {
  render() {
    return (
      <Card.Group itemsPerRow={1}>
        <Card>
          <Card.Content>
            <Card.Header><b>Active filters</b></Card.Header>
          </Card.Content>
          <Card.Content>
            <Dropdown placeholder='Filters' search fluid multiple selection options={options} closeOnChange icon={null}/>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content  style={{ 'backgroundColor': '#EEE' }}>
            <Card.Header>Filter by type</Card.Header>
          </Card.Content>
          <Card.Content>
            <div><Checkbox onClick={onClick} label="Literature (389785)"/></div>
            <div style={{ 'marginLeft': '10px'}}>
              <div><Checkbox onClick={onClick} label="Article (3242)"/></div>
              <div><Checkbox onClick={onClick} label="Report (12121)"/></div>
            </div>
            <div><Checkbox onClick={onClick} label="Data Set (324324)"/></div>
          </Card.Content>
        </Card>

        <div style={{ 'marginTop': '20px' }}></div>

        <Card>
          <Card.Content  style={{ 'backgroundColor': '#EEE' }}>
            <Card.Header>Filter by author</Card.Header>
          </Card.Content>
          <Card.Content>
            <SearchBar width={350} placeholder='Type an author'/>
          </Card.Content>
          <Card.Content>
            <div><Checkbox onClick={onClick} label="John Doe (1)"/></div>
            <div><Checkbox onClick={onClick} label="Mario Rossi (3)"/></div>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

export default Facets;