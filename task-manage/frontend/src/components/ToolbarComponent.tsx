import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import './ToolbarComponent.css';

interface ToolbarComponentProps {
  toggleDrawer: () => void;
}

const ToolbarComponent: React.FC<ToolbarComponentProps> = ({ toggleDrawer }) => {
  return (
    <AppBar position="static" className="toolbar">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          className="menu-button"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="title">
          MyApp
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ToolbarComponent;
