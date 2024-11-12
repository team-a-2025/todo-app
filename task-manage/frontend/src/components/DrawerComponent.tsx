import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import './DrawerComponent.css';

interface DrawerComponentProps {
  drawerOpen: boolean;
  toggleDrawer: () => void;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({ drawerOpen, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
      <Box className="drawer" role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
        <List>
          {['Home', 'Profile', 'Settings', 'Logout'].map((text) => (
            <ListItem button key={text} className="drawer-item">
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
