import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import MockArrivalData from "../../data/mockArrivalData";
import Header from "../../components/Header";

const Arrivals = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
        { field: "flight", headerName: "Flight", flex: 1, cellClassName: "name-column--cell" },
        { field: "time", headerName: "Time", flex: 1, cellClassName: "name-column--cell" },
        { field: "from", headerName: "From", flex: 1, cellClassName: "name-column--cell" },
        { field: "airline", headerName: "Airline", flex: 1, cellClassName: "name-column--cell" },
        { field: "aircraft", headerName: "Aircraft", flex: 1, cellClassName: "name-column--cell" },
        { field: "status", headerName: "Status", flex: 1, cellClassName: "name-column--cell" },
      ];

  return (
    <Box m="20px">
      <Header title="ARRIVALS" subtitle="List of Arriving Flights" />
      {/* GRID & CHARTS */}
      <Box m="40px 0 0 0" 
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
          }
        }}>
        <DataGrid
              rows={MockArrivalData}
              columns={columns}
              getRowId={(row) => row.flight}
              initialState={{
                pagination: { paginationModel: { pageSize: 10 } },
              }}
              pageSizeOptions={[10, 15, 20, 50, 100]} 
              checkboxSelection
            />
      </Box>
    </Box>
  );
};

export default Arrivals;