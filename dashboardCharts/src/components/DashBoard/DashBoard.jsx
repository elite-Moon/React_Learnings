import { Component, useState } from 'react';
import './DashBoard.css';
import DateFilter from './DateFilter';
import CSPM from '../Categories/CSPM/CSPM';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
// import Checkbox from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';

const DrawerContent = styled('div')(({ theme }) => ({
  flexShrink: 0,
  width: 660,
  '& .MuiDrawer-paper': {
    width: 240,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.default,
  },
}));

const dashboardData = [
  {
    title: 'CSPM Executive Dashboard',
    cards: [
      { title: 'Cloud Accounts' },
      { title: 'Cloud Account Risk Assessment' },
      { title: 'Another CSPM Card' },
    ],
  },
  // Add other categories here
];

const widgetOptions = [
  { title: 'Widget 1', Component: CSPM },
  { title: 'Widget 2', Component: CSPM },
  // Add more widget options here
];

const DashBoard = () => {
  const [open, setOpen] = useState(false);
  const [selectedWidgets, setSelectedWidgets] = useState([]); // Store selected widgets

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const handleWidgetSelect = (widget) => {
  //   setSelectedWidgets([...selectedWidgets, widget]);
  // };

  const handleAddWidgets = () => {
    // Add selected widgets to dashboard data (implement logic here)
    setOpen(false);
  };

  return (
    <div className='dash-main'>
      <Drawer anchor='right' open={open} onClose={handleDrawerClose}>
        <DrawerContent>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
          <Divider />
          <List>
            {/* Add widget options here */}
            <ListItem onClick={handleDrawerClose}>
              <ListItemIcon>{/* Add icon here */}</ListItemIcon>
              <ListItemText primary='CSPM' />
              <ListItemText primary='CWPP' />
              <ListItemText primary='Image' />
              <ListItemText primary='Text' />
            </ListItem>
            {widgetOptions.map((option, index) => (
              <ListItem button key={index} onClick={handleDrawerClose}>
                <ListItemIcon>{/* Add icon here */}</ListItemIcon>
                Helo
                <ListItemText primaryTypographyProps={'as'} />
              </ListItem>
            ))}
            {dashboardData.map((category, index) => (
              <ListItem button key={index} onClick={handleDrawerClose}>
                <ListItemIcon>{/* Add icon here */}</ListItemIcon>
                <ListItemText primary={category.title} />
              </ListItem>
            ))}

            {widgetOptions.map((option, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  {/* <Checkbox
                    checked={selectedWidgets.includes(option)}
                    onChange={() => handleWidgetSelect(option)}
                  /> */}
                </ListItemIcon>
                <ListItemText primary={option.title} />
              </ListItem>
            ))}
            <ListItem>
              {/* <Button
                variant='contained'
                color='primary'
                onClick={handleAddWidgets}
              >
                Add
              </Button> */}
            </ListItem>

            {/* Submit buttons (adjust placement as needed) */}
            <ListItem>
              <Button variant='outlined' color='error'>
                Submit
              </Button>
              <Button variant='outlined'>Cancel</Button>
            </ListItem>
          </List>
        </DrawerContent>
      </Drawer>
      <div className='dash-content'>
        <h2>CNAP DASHBOARD</h2>
        <div className='dash-buttons'>
          <button onClick={handleDrawerOpen}>Add Widget +</button>
          <DateFilter />
        </div>
        <div>
          {dashboardData.map((category, index, data) => (
            <CSPM key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
