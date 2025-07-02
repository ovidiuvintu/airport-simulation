
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sidebar">
        <Sidebar />
      </div>
      <main className="content">
        {/* Main content goes here */}
        <h1>Welcome to the Airport Simulation</h1>
        <p>This is the main content area.</p>
      </main>
    </div>
  );
}

export default App;
