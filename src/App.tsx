import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CareerPage } from "./pages/Career";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/career" element={<CareerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
