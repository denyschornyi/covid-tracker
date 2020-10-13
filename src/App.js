import React from 'react';
import './App.css';

import { FormControl, Select, MenuItem } from '@material-ui/core';


function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 tracker</h1>
        <FormControl className="app__dropdown">
          <Select
            variant='outlined'
            value='abc'
          >
            <MenuItem value='worldwide'>Worldwide</MenuItem>
            <MenuItem value='usa'>USA</MenuItem>
            <MenuItem value="canada">Canada</MenuItem>
            <MenuItem value="poland">Poland</MenuItem>
          </Select>
        </FormControl>
      </div>
      


      {/* Header */}
        {/* Title + Select input dropdown field */}
      
      {/* InfoBoxes */}
      {/* InfoBoxes */}
      {/* InfoBoxes */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}

    </div>
  );
}

export default App;
