import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import MockDepartureData from "../../data/MockDepartureData";
import Header from "../../components/Header";

const Departures = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
        { field: "flight", headerName: "Flight", flex: 1 },
        { field: "time", headerName: "Time", flex: 1 },
        { field: "to", headerName: "To", flex: 1 },
        { field: "airline", headerName: "Airline", flex: 1 },
        { field: "aircraft", headerName: "Aircraft", flex: 1 },
        { field: "status", headerName: "Status", flex: 1 },
      ];

  return (
    <Box m="20px">
      <Header title="DEPARTURES" subtitle="List of Departing Flights" />
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
            borderBottom: "none"
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
              rows={MockDepartureData}
              columns={columns}
              getRowId={(row) => row.flight}
              initialState={{
                pagination: { paginationModel: { pageSize: 10 } },
              }}
              pageSizeOptions={[10, 15, 20, 50, 100]} 
            />
        </Box>
    </Box>
  );
};

export default Departures;