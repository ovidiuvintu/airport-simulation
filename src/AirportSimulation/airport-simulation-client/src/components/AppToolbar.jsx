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
          <Button color="inherit">Start</Button>
          <Button color="inherit">Stop</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppToolbar;