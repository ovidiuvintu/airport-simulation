import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard/Dashboard";
import Arrivals from "./scenes/arrivals/Arrivals";
import Departures from "./scenes/departures/Departures";
import Airlines from "./scenes/airlines/Airlines";
import Airports from "./scenes/airports/Airports";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/airports" element={<Airports />} />
              <Route path="/arrivals" element={<Arrivals />} />
              <Route path="/departures" element={<Departures />} />
              <Route path="/airlines" element={<Airlines />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
