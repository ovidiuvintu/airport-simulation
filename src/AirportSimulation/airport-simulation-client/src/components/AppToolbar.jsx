import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Stop from '@mui/icons-material/Stop';
import { useVisibilityStore } from '../store/useStore';


const AppToolbar = () => {
  
  const { isVisible, toggleVisibility } = useVisibilityStore();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: colors.blueAccent[700] }} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: colors.primary[100] }}>
            Simulations
          </Typography>

          <Button sx={{ marginLeft: '16px', color: colors.primary[100] }} 
                  variant="outlined" 
                  onClick={() => {
                    toggleVisibility();
                    alert(isVisible)
                  }}
                  startIcon={<PlayArrowIcon />}>
            Start
          </Button>

          <Button sx={{ marginLeft: '16px', color: colors.primary[100] }} 
                  variant="outlined" 
                  onClick={() => {
                    toggleVisibility();
                    alert(isVisible)
                  }}
                  startIcon={<Stop />}>
            Stop
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppToolbar;