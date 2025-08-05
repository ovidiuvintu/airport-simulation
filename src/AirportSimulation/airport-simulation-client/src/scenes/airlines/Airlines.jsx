import {
    Box,
    useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

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
      <Header title="Airlines" subtitle="List of Airlines serving this airport" />
      {/* GRID & CHARTS */}
      <Box
        m="40px 0 0 0"
        height="75vh"
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
              disableColumnFilter
              checkboxSelection={false}
              disableColumnSorting
              rows={MockAirlinesData}
              columns={columns}
              getRowId={(row) => row.airlineCode}
              initialState={{
                pagination: { paginationModel: { pageSize: 10 } },
              }}
              pageSizeOptions={[10, 15, 20, 50, 100]} 
            />
        </Box>
    </Box>
  );
};

export default Airlines;