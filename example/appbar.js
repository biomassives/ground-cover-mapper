import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from './drawer';



export default function DenseAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <Drawer />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Ground Cover Mapper
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  