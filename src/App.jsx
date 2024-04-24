import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AutoGenInterface from "./pages/AutoGenInterface.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/autogen-interface" element={<AutoGenInterface />} />
      </Routes>
    </Router>
  );
}

export default App;
