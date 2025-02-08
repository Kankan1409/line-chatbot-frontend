import { useEffect } from "react";
import liff from "@line/liff";

function Member() {
  useEffect(() => {
    liff
      .init({ liffId: "2006855854-BLrv84DY" }) // ✅ ใช้ LIFF ID สำหรับ /member
      .then(() => {
        console.log("✅ LIFF initialized successfully");
      })
      .catch((err) => {
        console.error("❌ LIFF init failed:", err);
      });
  }, []);

  return (
    <div className="App">
      <h1>สวัสดี สมาชิก</h1>
      <p>🎉 ยินดีต้อนรับสู่หน้าสมาชิก</p>
    </div>
  );
}

export default Member;
