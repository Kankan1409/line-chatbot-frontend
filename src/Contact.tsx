import { useEffect } from "react";
import liff from "@line/liff";

function Contact() {
  useEffect(() => {
    liff
      .init({ liffId: "2006855854-XW4Ymb1w" }) // ✅ ใช้ LIFF ID สำหรับ /member
      .then(() => {
        console.log("✅ LIFF initialized successfully");
      })
      .catch((err) => {
        console.error("❌ LIFF init failed:", err);
      });
  }, []);

  return (
    <div className="App">
      <h1>สวัสดี</h1>
      <p>🎉 ยินดีต้อนรับสู่หน้าข้อมูลการติดต่อ</p>
    </div>
  );
}

export default Contact;
