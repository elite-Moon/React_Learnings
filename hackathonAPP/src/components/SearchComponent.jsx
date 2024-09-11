import React, { useState } from 'react';

import '../styles/SearchComponent.css';
import {
  Button,
  Menu,
  MenuItem,
  Checkbox,
  ListItemText,
  ListSubheader,
  Divider,
  Typography,
  Box,
} from '@mui/material';
const SearchComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [checkedItems, setCheckedItems] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className='main-search'>
      <div className='search-inp'>
        <input type='text' name='' id='' placeholder='Search . . . ' />
      </div>
      <div className='filter'>
        <Button variant='' onClick={handleClick}>
          Filter
        </Button>

        <Menu
          sx={{ width: '770px' }}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Box sx={{ padding: '8px 16px' }}>
            <Typography variant='h6' gutterBottom>
              Filter
            </Typography>
          </Box>
          <Divider />

          <ListSubheader>Status</ListSubheader>
          <MenuItem>
            <Checkbox
              checked={checkedItems.option1}
              onChange={handleCheckboxChange}
              name='option1'
            />
            <ListItemText primary='All' />
          </MenuItem>
          <MenuItem>
            <Checkbox
              checked={checkedItems.option2}
              onChange={handleCheckboxChange}
              name='option2'
            />
            <ListItemText primary='Active' />
          </MenuItem>
          <MenuItem>
            <Checkbox
              checked={checkedItems.option3}
              onChange={handleCheckboxChange}
              name='option3'
            />
            <ListItemText primary='Upcoming' />
          </MenuItem>
          <MenuItem>
            <Checkbox
              checked={checkedItems.option4}
              onChange={handleCheckboxChange}
              name='option4'
            />
            <ListItemText primary='Past' />
          </MenuItem>
          <Divider />
          <ListSubheader>Level</ListSubheader>
          <MenuItem>
            <Checkbox
              checked={checkedItems.option5}
              onChange={handleCheckboxChange}
              name='option5'
            />
            <ListItemText primary='Easy' />
          </MenuItem>
          <MenuItem>
            <Checkbox
              checked={checkedItems.option6}
              onChange={handleCheckboxChange}
              name='option6'
            />
            <ListItemText primary='Medium' />
          </MenuItem>
          <MenuItem>
            <Checkbox
              checked={checkedItems.option7}
              onChange={handleCheckboxChange}
              name='option7'
            />
            <ListItemText primary='Hard' />
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default SearchComponent;
