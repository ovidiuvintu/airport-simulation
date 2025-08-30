/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


import AppToolbar from "../../components/AppToolbar";

import '../../index.css';

const TwoBoxesSideBySide = () => {
    return (
        <Box sx={{ display: 'flex', gap: '16px', my: '10px' }}> {/* Parent Box with flex display and gap */}
            <Box sx={{ flex: 1, bgcolor: 'primary.main', display: 'flex', alignItems: 'left', justifyContent: 'left', color: 'white' }}>
                <section>
                    <div class="runway" />
                    <img src="plane.png" class="plane"/>
                </section>
            </Box>
            <Box sx={{ flex: 3, bgcolor: 'primary.main', display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'left', color: 'white' }}>
                <Stack sx={{ spacing: '1', bgcolor: 'primary.main' }} >
                    <Typography display="block" variant="h4">Flight Details</Typography>
                    <Typography display="block" variant="h6">Flight Number:</Typography>
                    <Typography display="block" variant="h6">Time:</Typography>
                    <Typography display="block" variant="h6">Origin/Destination:</Typography>
                </Stack>
            </Box>
            <Box sx={{ flex: 3, bgcolor: 'primary.main', display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'left', color: 'white' }}>
                <Stack sx={{ spacing: '1', bgcolor: 'primary.main' }} >
                    <Typography display="block" variant="h4">Next Flight Details</Typography>
                    <Typography display="block" variant="h6">Flight Number:</Typography>
                    <Typography display="block" variant="h6">Time:</Typography>
                    <Typography display="block" variant="h6">Origin/Destination:</Typography>
                </Stack>
            </Box>
        </Box>
    );
}

const Dashboard = () => {
  return (
    <Box m="20px">
          <AppToolbar />   
          <TwoBoxesSideBySide />
    </Box>
  );
};

export default Dashboard;