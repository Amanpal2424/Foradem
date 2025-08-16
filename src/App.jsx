import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "/src/components/Auth/Login";
import Register from "/src/components/Auth/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
