import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import ButtonGroup from '@mui/material/ButtonGroup';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Stop from '@mui/icons-material/Stop';


const AppToolbar = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: colors.blueAccent[700] }} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simulations
          </Typography>
          <IconButton aria-label="play" onClick={() => console.log('Play button clicked!')}>
              <PlayArrowIcon />
          </IconButton>
          <IconButton aria-label="play" onClick={() => console.log('Play button clicked!')}>
              <Stop />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppToolbar;