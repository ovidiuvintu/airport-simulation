import { Box, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import Header from "../../components/Header";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}> 
       <Header title="Airports Simulator" subtitle="Welcome!" />     
      {/* ICONS */}
      <Box display="flex">       
      </Box>
    </Box>
  );
};

export default Dashboard;