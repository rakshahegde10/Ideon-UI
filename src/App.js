import "./App.css";
import NavBar from "./components/navigationBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Dashboard } from "./components/pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
        </div>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
