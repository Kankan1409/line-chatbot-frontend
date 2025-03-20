import { useEffect, useState } from "react";
import liff from "@line/liff";
import './Register.css'; // ปรับตามชื่อไฟล์ CSS ของคุณ
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [referrername, setReferrerName] = useState("");
  const [refphone, setRefPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    liff
      .init({ liffId: "2006855854-BLrv84DY" }) // ✅ ใช้ LIFF ID สำหรับ /register
      .then(() => {
        console.log("✅ LIFF initialized successfully");
        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          liff.getProfile().then(profile => {
            console.log(profile);
            setName(profile.displayName); // ถ้าต้องการให้แสดงชื่อของผู้ใช้ในฟอร์ม
          });
        }
      })
      .catch((err) => {
        console.error("❌ LIFF init failed:", err);
      });
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (!agree) {
      setError("❌ กรุณายอมรับเงื่อนไขและนโยบายข้อมูล");
      return;
    }
    // ตัวอย่างการบันทึกข้อมูลลงฐานข้อมูล
    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("✅ Registration successful:", data);
      // อาจ redirect หรือทำอย่างอื่นได้ที่นี่
    } catch (error) {
      setError("❌ Registration failed: " + error);
    } finally {
      setLoading(false);
    }
  };
  const [agree, setAgree] = useState(false);
  return (
    <div className="App">
      <div className="content">
        <img src="asset/images/aom.png" alt="" width={140} />
        <div className="header">
          <p>ห้างทองโอ้วซุนเซ้ง</p>
        </div>
        <div className="body">
          <form onSubmit={handleSubmit}>
            <div className="text-contant">
              <p>สมัคร</p>
              <p className="detail">กรอกรายละเอียดเพื่อสมัคร</p>
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="name">ชื่อ:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">นามสกุล:</label>
                <input
                  type="text"
                  id="lastname"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Gender">เพศ:</label>
                <input
                  type="text"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">เบอร์โทรศัพท์มือถือ:</label>
                <input
                  type="number"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="referrername">ผู้แนะนำ:</label>
                <input
                  type="text"
                  id="referrername"
                  value={referrername}
                  onChange={(e) => setReferrerName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="refphone">เบอร์โทรศัพท์ผู้แนะนำ:</label>
                <input
                  type="number"
                  id="refphone"
                  value={refphone}
                  onChange={(e) => setRefPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  required
                />
                <label className="check">
                  ยินยอมให้ข้อมูลส่วนตัวและเงื่อนไขการใช้งาน
                </label>
              </div>
            </div>
            <div className="button">
              <button type="submit" disabled={loading} className="cancel">
                {loading ? "กำลังยกเลิก..." : "ยกเลิก"}
              </button>
              <button type="submit" disabled={loading} className="submit">
                {loading ? "กำลังยืนยัน..." : "ยืนยัน"}
              </button>
            </div>
            {error && <p className="error">{error}</p>}
          </form>
          <Link className="back" to={"/"}>
            กลับสู่หน้าหลัก
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;