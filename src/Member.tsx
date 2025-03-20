import { useEffect } from "react";
import liff from "@line/liff";
import './Member.css';
import { Link } from "react-router-dom";

function Member() {
  useEffect(() => {
    liff
      .init({ liffId: "2006855854-BLrv84DY" }) // ✅ ใช้ LIFF ID สำหรับ /member
      .then(() => {
        console.log("✅ LIFF initialized successfully");
        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          const profile = liff.getProfile();
          console.log(profile);
        }
      })
      .catch((err) => {
        console.error("❌ LIFF init failed:", err);
      });
  }, []);

  return (
    <div className="App">
      <div className="content">
        <img src="asset/images/aom.png" alt="" width={150} />
        <div className="header">
          <p>
            ยินดีต้อนรับสู่หน้าสมัครสมาชิกออมทอง
          </p>
        </div>
        <div className="body">
          <Link className="register" to={"/Register"}>
            สมัครสมาชิกเพื่อออมทอง
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Member;
