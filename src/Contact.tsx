import { useEffect } from "react";
import liff from "@line/liff";
import { FaPhone, FaClock, FaFacebook, FaLink } from "react-icons/fa";
import './Contact.css';

function Contact() {
  useEffect(() => {
    liff
      .init({ liffId: "2006855854-XW4Ymb1w" })
      .then(() => {
        console.log("✅ LIFF initialized successfully");
      })
      .catch((err) => {
        console.error("❌ LIFF init failed:", err);
      });
  }, []);

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-header">
          <h1>ติดต่อเรา</h1>
        </div>
        <img src="/asset/images/aom.png" alt="Aom" className="contact-image" />
        <div className="contact-content">
          <h2>ห้างทองโอ้วซุนเซ้ง</h2>
          <p className="contact-address">
            📍 533 ถนน ประจันตเขต ตำบล นางรอง อำเภอนางรอง บุรีรัมย์ 31110
          </p>
          <p className="contact-phone">
            <FaPhone /> 044-631-278
          </p>
          <p className="contact-hours">
            <FaClock /> เปิดจันทร์ - เสาร์: 08.00 - 17.00 น.
          </p>
          <p className="contact-hours">
            <FaClock /> เปิดทุกวันอาทิตย์ต้นเดือน: 08.00 - 13.00 น.
          </p>
          <div className="contact-links">
            <a href="https://www.facebook.com/a2aew" target="_blank" rel="noopener noreferrer">
              <FaFacebook /> Facebook
            </a>
            <a href="https://lin.ee/4EV5kI9" target="_blank" rel="noopener noreferrer">
              <FaLink /> สมาชิกร้านค้า
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
