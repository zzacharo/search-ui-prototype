import React, { Component } from 'react';
import { List, Icon, Button, ListItem } from '@material-ui/core';

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    title: `Record #${i}: Lorem ipsum dolor sit amet`,
    authors: ['John Doe', 'Mario Rossi'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tags: ['Software', 'Open Access']
  });
}

const IconText = ({ type, text }) => (
  <span style={{paddingRight: '10px'}}>
    <Icon name={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const RenderListItem = ({ href, title, authors, description, tags }) => (
  <div>
    <div className="mt-20 clearfix">
      <a href="{href}">{title}</a>
      <div className="pull-right">
        <Button color="primary">View</Button>
      </div>
      {/* <div className="pull-right" style={{ 'marginRight': '20px' }}> */}
        {/* {tags.map((tag, index) => <Label key={index} color="blue">{tag}</Label>)} */}
      {/* </div> */}
    </div>

    <div>
      {authors.map((author, index) => <span key={index} style={{ marginRight: 8 }}><IconText type="user" text={author} /></span>)}
    </div>

    <div className="mb-20">
      {description}
    </div>
  </div>
);

const ListItems = ({data}) => (
  data.map(item =>
    <ListItem
      key={item.title}
    >
      <RenderListItem href={item.href} title={item.title} authors={item.authors} description={item.description} tags={item.tags}/>
      <div className="mb-20">
        <IconText type="upload" text="Uploaded on July 30, 2018"/>
        <IconText type="calendar alternate outline" text="Published on July 31, 2018" />
      </div>
    </ListItem>
  )
);

class ResultsList extends Component {
  render() {
    return (
      <List divided="true">
        <ListItems data={listData}/>
      </List>
    );
  }
}

export default ResultsList;
