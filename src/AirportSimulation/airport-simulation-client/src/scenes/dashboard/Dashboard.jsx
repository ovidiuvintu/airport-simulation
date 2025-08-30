/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/material";
import AppToolbar from "../../components/AppToolbar";

import '../../index.css';


const Dashboard = () => {
  return (
    <Box m="20px">
      <AppToolbar />    
      <Box
        m="20px 0 0 0">
          <section>
            <div class="runway" />
            <img src="plane.png" class="plane"/>
          </section>
      </Box>
    </Box>
  );
};

export default Dashboard;