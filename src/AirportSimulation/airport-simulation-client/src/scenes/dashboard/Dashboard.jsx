import { Box, Paper, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import AppToolbar from "../../components/AppToolbar";
import Image from 'mui-image';

import '../../index.css';


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box m="20px">
      <AppToolbar />    
      <Box
        m="40px 0 0 0">
          <section>
            <div class="runway">
            </div>
            <img src="plane.png" class="plane"/>
          </section>
      </Box>
    </Box>
  );
};

export default Dashboard;