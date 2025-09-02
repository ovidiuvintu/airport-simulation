import { Box, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

import { tokens } from "../../theme";
import Header from "../../components/Header";
import MockAirlinesData from "../../data/MockAirlinesData";

const columns = [
        { field: "airline", headerName: "Airline", flex: 1 },
        { field: "airlineCode", headerName: "Code", flex: 1 },
        { field: "country", headerName: "Country", flex: 1 }
      ];

const Airlines = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Airlines" subtitle="Managing the Airlines" />
      <Box
        m="40px 0 0 0"
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid 
          showToolbar
          rows={MockAirlinesData} 
          columns={columns} 
          getRowId={(row) => row.airlineCode}/>
      </Box>
    </Box>
  );
};

export default Airlines;