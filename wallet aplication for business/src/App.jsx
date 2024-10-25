import Fotter from "./components/Fotter";
import Overview from "./components/Overview";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import Topbar from "./components/Topbar";
import Transactions from "./components/Transactions";

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 sm:ml-[15rem] p-5">
        {/* Topbar */}
        <div className="border-b border-gray-700 bg-gray-800 mb-8 p-4 rounded-md">
          <Topbar />
        </div>
        
        {/* Overview and other sections */}
        <div className="grid gap-8">
          <Overview />

          <div className="grid gap-6">
            <Transactions />
            <Table />
          </div>

          {/* Footer */}
          <Fotter />
        </div>
      </div>
    </div>
  );
}

export default App;
