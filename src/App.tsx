import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Member from "./Member";
import Contact from "./Contact";
import Register from "./Register";
import './Login.css';
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/member" element={<Member />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={
          <div className="App">
            <div className="content">
              <img src="asset/images/aom.png" alt="" width={200} />
              <div className="header-login">
                <p>ร้านทองโอ้วซุนเซ้ง</p>
              </div>
              <div className="body">
                <Link className="login" to="/Member">
                  เข้าสู่ระบบ
                </Link>
              </div>
            </div>
          </div>
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
