import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Member from "./Member";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/member" element={<Member />} />
        <Route path="/" element={<h1>Welcome to LIFF App</h1>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
