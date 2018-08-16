import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';

class Searchbar extends Component {
  render() {
    return (
      <div className="Searchbar">
        <Input
          id="search"
          label="Search field"
          type="search"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
              >
                {<Search />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Button variant="contained" color="primary">Search</Button>
      </div>
    );
  }
}

export default Searchbar;
