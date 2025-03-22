import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Member from "./Member";
import Register from "./Register";
import './Login.css';
import Topic from "./Topic";
import Product from "./Product";
// import Shop from "./pages/Shop"; // ตัวอย่างหน้าที่ต้องสร้าง
// import Promo from "./pages/Promo";
// import Store from "./pages/Store";
import Contact from "./Contact";
import History from "./History/HistoryRes";
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/member" element={<Member />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Topic" element={<Topic />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/shop" element={<Shop />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/history" element={<History />} /> 
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
      </Routes>
    </Router>
  );
}

export default App;
