/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Typography, Box, Grid, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useRunwayVisibilityStore } from '../../store/useStore';

import AppToolbar from "../../components/AppToolbar";
import Header from "../../components/Header";

import '../../index.css';

const TwoBoxesSideBySide = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { isVisible } = useRunwayVisibilityStore();

    return (
            <Box sx={{ height:"65vh", display: 'flex', gap: '16px', my: '10px' }}> {/* Parent Box with flex display and gap */}
                <Grid container spacing={2}> {/* Grid container */}
                    <Grid item xs={12} sm={3}> {/* Child Box 1: 1/3 width on small screens and up */}
                        <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
                            {/* {isVisible?
                                <section>
                                    <div class="runway" />
                                    <img src="plane.png" class="plane"/>
                                </section>:

                                <section>
                                    <div class="runwaypaused" />
                                </section>} */}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4.5}> {/* Child Box 2: 1/2 width on small screens and up */}
                        <Box sx={{ p: 2 }}>
                            <Stack sx={{ spacing: '1', bgcolor: colors.primary[400] }} >
                                <Typography sx={{ display: "block", variant: "h4", color: colors.greenAccent[100] }} >Flight Details</Typography>
                                <Typography sx={{ display: "block", variant: "h6", color: colors.greenAccent[100] }}>Flight Number:</Typography>
                                <Typography sx={{ display: "block", variant: "h6", color: colors.greenAccent[100] }}>Time:</Typography>
                                <Typography sx={{ display: "block", variant: "h6", color: colors.greenAccent[100] }}>Origin/Destination:</Typography>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4.5}> {/* Child Box 3: 1/6 width on small screens and up */}
                        <Box sx={{ p: 2 }}>
                            <Stack sx={{ spacing: '1', bgcolor: colors.primary[400] }} >
                                <Typography sx={{ display: "block", variant: "h4", color: colors.greenAccent[100] }}>Next Flight Details</Typography>
                                <Typography sx={{ display: "block", variant: "h6", color: colors.greenAccent[100] }}>Flight Number:</Typography>
                                <Typography sx={{ display: "block", variant: "h6", color: colors.greenAccent[100] }}>Time:</Typography>
                                <Typography sx={{ display: "block", variant: "h6", color: colors.greenAccent[100] }}>Origin/Destination:</Typography>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
    );
}

const Dashboard = () => {
  
  return (
    <Box m="20px">        
          <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
          <AppToolbar />   
          <TwoBoxesSideBySide />
    </Box>
  );
};

export default Dashboard;