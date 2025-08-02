import {
    Box,
    Typography,
    useTheme,
} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import Header from "../../components/Header";

const Airlines = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
      <Box m="20px">
          <Header title="Airlines" subtitle="Airlines Interactive Page" />
          <Box display="flex" justifyContent="space-between">
              {/* AIRLINES SIDEBAR */}
              <Box
                  flex="1 1 20%"
                  backgroundColor={colors.primary[400]}
                  p="15px"
                  borderRadius="4px"
              >
                  <Typography variant="h5">Events</Typography>
              </Box>
          </Box>
       </Box>
  );
};

export default Airlines;