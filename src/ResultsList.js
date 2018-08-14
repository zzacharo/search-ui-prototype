import React, { Component } from 'react';
import { List, Icon, Button, Tag } from 'antd';

const listData = [];
for (let i = 0; i < 20; i++) {
  listData.push({
    title: `Record #${i}: Lorem ipsum dolor sit amet`,
    authors: ['John Doe', 'Mario Rossi'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tags: ['Software', 'Open Access']
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const ListItem = ({ href, title, authors, description, tags }) => (
  <div>
    <div className="clearfix">
      <a href="{href}">{title}</a>
      <div className="pull-right">
        <Button>View</Button>
      </div>
      <div className="pull-right" style={{ 'margin-right': '20px' }}>
        {tags.map(tag => <Tag color="geekblue">{tag}</Tag>)}
      </div>
    </div>

    <div>
      {authors.map(author => <span style={{ marginRight: 8 }}><IconText type="user" text={author} /></span>)}
    </div>

    <div>
      {description}
    </div>
  </div>
);

class ResultsList extends Component {
  render() {
    return (
      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[<IconText type="upload" text="Uploaded on July 30, 2018" />, <IconText type="calendar" text="Published on July 31, 2018" />]}
          >
            <ListItem href={item.href} title={item.title} authors={item.authors} description={item.description} tags={item.tags}/>
          </List.Item>
        )}
      />
    );
  }
}

export default ResultsList;
