import React, { Component } from 'react'
import StyledSearch from "./searchbar.style";
import { Input, Select } from 'antd';
import countries from "../assets/countries.json"

const { Option } = Select;
const { Search } = Input;

export default class SearchInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: false,
      country: false
    };
  }

  onSearch = (value) => {
    this.setState({search: value.length > 0 && value})
    this.props.searchNews(value.length > 0 && value, this.state.country || undefined);
  }

  onSelect = (value) => {
    this.setState({country: value && value.toLowerCase()});
    this.props.searchNews(this.state.search, value ? value.toLowerCase() : undefined);
  }

  onChange = (value) => {
    if (value === undefined) {
      this.setState({country: false});
      this.props.searchNews(this.state.search, false);
    }
  }

  render() {
    return (
      <StyledSearch>
        <div className="search">
          <Search placeholder="Search" onSearch={this.onSearch} enterButton size={"large"} />
          <Select
            size={"large"}
            allowClear
            showSearch
            style={{ width: 200 }}
            placeholder="Select a country"
            onSelect={this.onSelect}
            onChange={this.onChange}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {
              countries.map((country, index) => (
                <Option key={`${index}-${country.code}`} value={country.code}>{country.name}</Option>
              ))
            }
          </Select>
        </div>
      </StyledSearch>
    );
  }
}
