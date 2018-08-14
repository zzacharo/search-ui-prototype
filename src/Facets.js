import React, { Component } from 'react';
import { Card, Checkbox, AutoComplete, Input, Icon } from 'antd';

function onChange(e) {
  console.log(`${e.target.value}`);
}

const dataSource = ['Mario Rossi', 'John Doe'];

class Facets extends Component {
  render() {
    return (
      <div>
        <Card title="Filter by type" headStyle={{ 'background-color': '#EEE' }}>
          <div><Checkbox onChange={onChange} value="literature">Literature (389785)</Checkbox></div>
          <div style={{ 'margin-left': '10px'}}>
            <div><Checkbox onChange={onChange} value="article">Article (3242)</Checkbox></div>
            <div><Checkbox onChange={onChange} value="report">Report (12121)</Checkbox></div>
          </div>
          <div><Checkbox onChange={onChange} value="dataset">Data Set (324324)</Checkbox></div>
        </Card>

        <div style={{ 'margin-top': '20px' }}></div>

        <Card title="Filter by author" headStyle={{ 'background-color': '#EEE' }}>
          <div className="certain-category-search-wrapper" style={{ width: 250 }}>
            <AutoComplete
              size="large"
              dataSource={dataSource}
              placeholder="Type an author..."
              optionLabelProp="value"
            >
              <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
          </div>
          <div><Checkbox onChange={onChange} value="dsfdsfds">John Doe (1)</Checkbox></div>
          <div><Checkbox onChange={onChange} value="sdfs">Mario Rossi (3)</Checkbox></div>
        </Card>
      </div>
    );
  }
}

export default Facets;
