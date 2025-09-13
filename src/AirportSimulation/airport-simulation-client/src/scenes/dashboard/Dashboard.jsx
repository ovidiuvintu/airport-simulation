/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Typography, Box, useTheme } from "@mui/material";
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
                <Box sx={{flex: 3, bgcolor: colors.primary[400], display: 'flex', alignItems: 'left', justifyContent: 'left', color: 'white' }}>
                    {/* {isVisible?
                        <section>
                            <div class="runway" />
                            <img src="plane.png" class="plane"/>
                        </section>:

                        <section>
                            <div class="runwaypaused" />
                        </section>} */}
                </Box>
                <Box sx={{ flex: 3, bgcolor: colors.primary[400], display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'left', color: 'white' }}>
                    {/* <Stack sx={{ spacing: '1', bgcolor: colors.primary[400] }} >
                        <Typography sx={{ display: "block", variant: "h4", color: colors.greenAccent[100] }} >Flight Details</Typography>
                        <Typography sx={{ display: "block", variant: "h6", color: colors.greenAccent[100] }}>Flight Number:</Typography>
                        <Typography sx={{ display: "block", variant: "h6", color: colors.greenAccent[100] }}>Time:</Typography>
                        <Typography sx={{ display: "block", variant: "h6", color: colors.greenAccent[100] }}>Origin/Destination:</Typography>
                    </Stack> */}
                </Box>
                <Box sx={{ flex: 3, bgcolor: colors.primary[400], display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'left', color: 'white' }}>
                    {/* <Stack sx={{ spacing: '1', bgcolor: colors.primary[400] }} >
                        <Typography sx={{ display: "block", variant: "h4", color: colors.greenAccent[100] }}>Next Flight Details</Typography>
                        <Typography sx={{ display: "block", variant: "h6", color: colors.greenAccent[100] }}>Flight Number:</Typography>
                        <Typography sx={{ display: "block", variant: "h6", color: colors.greenAccent[100] }}>Time:</Typography>
                        <Typography sx={{ display: "block", variant: "h6", color: colors.greenAccent[100] }}>Origin/Destination:</Typography>
                    </Stack> */}
                </Box>
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