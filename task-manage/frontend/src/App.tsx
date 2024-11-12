import React, { useState } from 'react';
import ToolbarComponent from './ToolbarComponent';
import DrawerComponent from './DrawerComponent';

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <ToolbarComponent toggleDrawer={toggleDrawer} />
      <DrawerComponent drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default App;
