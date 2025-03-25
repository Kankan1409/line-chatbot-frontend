import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./Order.css";
import Navbar from "./Navbar";
// ประกาศ Type สำหรับข้อมูลสินค้า
type Product = {
  id: number;
  name: string;
  description: string;
  details: string;
  weight: string;
  image: string;
  price: number;
  quantity: number;
};

// ประกาศ Type สำหรับวิธีการจัดส่ง
type ShippingMethod = "pickup" | "ems";

function Order() {
  const [shippingMethod, setShippingMethod] =
    useState<ShippingMethod>("pickup");
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [charCount, setCharCount] = useState<number>(0);
  const [showPaymentDialog, setShowPaymentDialog] = useState<boolean>(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");
  const [showCouponDialog, setShowCouponDialog] = useState<boolean>(false);
  const [couponType, setCouponType] = useState<string>("ไม่เลือกคูปอง");
  const [selectedCoupon, setSelectedCoupon] = useState<string>("");
  const [couponCode, setCouponCode] = useState<string>("");

  // ข้อมูล Mock up สำหรับสินค้า
  const products: Product[] = [
    {
      id: 1,
      name: "เครื่องยกอาหารจุดในน้ำ",
      description: "นน.2สลิง มีบัตรรับประกัน",
      details: "เป็นชุดกันน้ำ",
      weight: "0.008 kg.",
      image: "https://www.diarjewelry.com/wp-content/uploads/2023/02/gold-plated-diarjewelry-main-2023.webp",
      price: 500, // ราคาต่อชิ้น
      quantity: 1,
    },
    {
      id: 2,
      name: "เครื่องกรองน้ำแบบพกพา",
      description: "ขนาดเล็ก น้ำหนักเบา",
      details: "กรองได้ 500 ลิตร",
      weight: "0.5 kg.",
      image: "https://down-th.img.susercontent.com/file/th-11134207-7qukx-lgn3ghid34z89b",
      price: 300, // ราคาต่อชิ้น
      quantity: 1,
    },
  ];

  const [productList, setProductList] = useState<Product[]>(products);

  useEffect(() => {
    liff
      .init({ liffId: "2006855854-XW4Ymb1w" })
      .then(() => {
        console.log("✅ LIFF initialized successfully");
        if (!liff.isInClient()) {
          console.log("⚠️ Running outside LINE environment");
        }
      })
      .catch((err) => {
        console.error("❌ LIFF init failed:", err);
      });
  }, []);

  const handleShippingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const method = event.target.value as ShippingMethod;
    setShippingMethod(method);
    setShippingCost(method === "ems" ? 100 : 0);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newMessage = event.target.value;
    if (newMessage.length <= 200) {
      setMessage(newMessage);
      setCharCount(newMessage.length);
    }
  };

  const handlePaymentClick = () => {
    setShowPaymentDialog(true); // แสดง Dialog เลือกช่องทางการชำระเงิน
  };

  const handlePaymentMethodSelect = (method: string) => {
    setSelectedPaymentMethod(method);
  };

  const handleConfirmPayment = () => {
    setShowPaymentDialog(false); // ปิด Dialog หลังจากยืนยัน
  };

  const handleIncreaseQuantity = (id: number) => {
    setProductList((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecreaseQuantity = (id: number) => {
    setProductList((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleCouponClick = () => {
    setShowCouponDialog(true);
  };

  const handleCouponTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const type = event.target.value;
    setCouponType(type);
    if (type === "ไม่เลือกคูปอง") {
      setSelectedCoupon("");
      setCouponCode("");
    }
  };

  const handleCouponSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCoupon(event.target.value);
  };

  const handleCouponCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCouponCode(event.target.value);
  };

  const handleConfirmCoupon = () => {
    setShowCouponDialog(false);
  };

  // คำนวณราคารวมของสินค้าทั้งหมด
  const totalProductPrice = productList.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  // คำนวณราคาสุทธิที่ต้องชำระ
  const totalPrice = totalProductPrice + shippingCost;

  // ฟังก์ชันจัดรูปแบบจำนวนเงินให้มีลูกน้ำ
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString();
  };

  return (
    <main>
      <Navbar/>
 <div className="topic-card">
      <h1 className="payment-title">จ่ายเงิน</h1>

      <div className="section order-details">
        <h2>ออเดอร์</h2>
        {productList.map((product) => (
          <div key={product.id} className="product-container">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.details}</p>
              <p>{product.weight}</p>
              <p className="price">
                ราคา: {formatCurrency(product.price * product.quantity)} บาท
              </p>
              <div className="quantity-control">
                <button onClick={() => handleDecreaseQuantity(product.id)}>
                  -
                </button>
                <span>{product.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(product.id)}>
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section shipping-options">
        <div className="address-header">
          <h3>ที่อยู่จัดส่งสินค้า</h3>
          <span className="manage-address">จัดการที่อยู่</span>
        </div>
        <div className="address-details">
          <p>ห้างทองโอ้วซุนเซ้ง 533 ถนน ประจันตเขต ตำบล นางรอง</p>
          <p>อำเภอนางรอง จ.บุรีรัมย์ 31110</p>
          <p>044-631-278</p>
        </div>
      </div>

      <div className="section store-message">
        <h3>ตัวเลือกการจัดส่ง</h3>
        <div className="shipping-method">
          <label className={shippingMethod === "pickup" ? "selected" : ""}>
            <input
              type="radio"
              value="pickup"
              checked={shippingMethod === "pickup"}
              onChange={handleShippingChange}
            />
            รับที่ร้านค้า <span className="price">0 บาท</span>
          </label>
          <label className={shippingMethod === "ems" ? "selected" : ""}>
            <input
              type="radio"
              value="ems"
              checked={shippingMethod === "ems"}
              onChange={handleShippingChange}
            />
            EMS ขนส่งไปรษณีย์ไทย <span className="price">100 บาท</span>
          </label>
          {shippingMethod === "ems" && (
            <p className="no-insurance">ไม่มีประกันสินค้า</p>
          )}
        </div>
      </div>

      <div className="section message-to-store">
        <h3>ข้อความถึงร้านค้า</h3>
        <textarea
          className="message-input"
          value={message}
          onChange={handleMessageChange}
          maxLength={200}
          placeholder="กรุณากรอกข้อความถึงร้านค้า"
        />
        <div className="char-count">{charCount}/200</div>
      </div>

      <div className="section payment-info">
        <div className="payment-button" onClick={handlePaymentClick}>
          <div className="payment-label">
            {selectedPaymentMethod ? selectedPaymentMethod : "ช่องทางชำระเงิน"}
          </div>
          <div className="payment-arrow">&#8250;</div>
        </div>
        {/* แสดงข้อมูลบัญชีธนาคารเมื่อเลือกชำระด้วยธนาคาร */}
        {selectedPaymentMethod === "ชำระด้วยธนาคาร" && (
          <div className="bank-details">
            <p>ชื่อบัญชี: บริษัท Example Co., Ltd.</p>
            <p>เลขที่บัญชี: 123-456-7890</p>
            <p>ธนาคาร: Example Bank</p>
          </div>
        )}
      </div>

      {showPaymentDialog && (
        <div className="payment-dialog-overlay">
          <div className="payment-dialog">
            <h3>เลือกช่องทางการชำระเงิน</h3>
            {/* ตัวเลือกเงินสด */}
            <div
              className="payment-option"
              onClick={() => handlePaymentMethodSelect("เงินสด")}
            >
              <span>เงินสด</span>
              <span>💵</span> {/* ไอคอนเงินสด */}
            </div>
            {/* ตัวเลือกชำระด้วยธนาคาร */}
            <div
              className="payment-option"
              onClick={() => handlePaymentMethodSelect("ชำระด้วยธนาคาร")}
            >
              <span>ชำระด้วยธนาคาร</span>
              <span>🏦</span> {/* ไอคอนธนาคาร */}
            </div>
            {/* ปุ่มยกเลิกและยืนยัน */}
            <div className="dialog-buttons">
              <button onClick={() => setShowPaymentDialog(false)}>
                ยกเลิก
              </button>
              <button onClick={handleConfirmPayment}>ยืนยัน</button>
            </div>
          </div>
        </div>
      )}

      <div className="section payment-summary">
        <h3>สรุปชำระเงิน</h3>
        <div className="summary-item">
          <span>ราคาสินค้า</span>
          <span className="price">{formatCurrency(totalProductPrice)} บาท</span>
        </div>
        <div className="summary-item">
          <span>ค่าจัดส่ง</span>
          <span className="price">{formatCurrency(shippingCost)} บาท</span>
        </div>
        <div className="summary-item" onClick={handleCouponClick}>
          <span>รหัสคูปอง</span>
          <span>ใส่รหัสคูปอง</span>
        </div>
        <div className="summary-item">
          <span>ส่วนลดรหัสคูปอง</span>
          <span className="price">0</span>
        </div>
        <div className="summary-total">
          <span>ราคาสุทธิที่ต้องชำระ</span>
          <span className="price">{formatCurrency(totalPrice)} บาท</span>
        </div>
      </div>

      {showCouponDialog && (
        <div className="coupon-dialog-overlay">
          <div className="coupon-dialog">
            <h3>เลือกคูปอง</h3>
            <div className="coupon-type">
              <label>ประเภทคูปอง:</label>
              <select value={couponType} onChange={handleCouponTypeChange}>
                <option value="ไม่เลือกคูปอง">ไม่เลือกคูปอง</option>
                <option value="เลือกคูปอง">เลือกคูปอง</option>
                <option value="ใส่รหัส">ใส่รหัส</option>
              </select>
            </div>

            {/* ช่องรหัสคูปองสำหรับ "เลือกคูปอง" */}
            {couponType === "เลือกคูปอง" && (
              <div className="coupon-selection">
                <label>ชื่อคูปอง:</label>
                <select value={selectedCoupon} onChange={handleCouponSelect}>
                  <option value="">เลือกคูปอง</option>
                  <option value="คูปอง 1">คูปอง 1</option>
                  <option value="คูปอง 2">คูปอง 2</option>
                  <option value="คูปอง 3">คูปอง 3</option>
                </select>
                <label>รหัสคูปอง:</label>
                <div  className="coupon-code">
                <input
                  type="text"
                  value={couponCode}
                  onChange={handleCouponCodeChange}
                  placeholder="กรอกรหัสคูปอง (ถ้ามี)"
                />
                </div>
                
              </div>
            )}

            {/* ช่องรหัสคูปองสำหรับ "ใส่รหัส" */}
            {couponType === "ใส่รหัส" && (
              <div className="coupon-code">
                <label>รหัสคูปอง:</label>
                <input
                  type="text"
                  value={couponCode}
                  onChange={handleCouponCodeChange}
                  placeholder="กรอกรหัสคูปอง"
                />
              </div>
            )}

            <div className="dialog-buttons">
              <button onClick={() => setShowCouponDialog(false)}>ยกเลิก</button>
              <button onClick={handleConfirmCoupon}>ยืนยัน</button>
            </div>
          </div>
        </div>
      )}

      <div className="action-buttons">
        <button>ย้อนกลับ</button>
        <button>ยืนยัน</button>
      </div>
    </div>
    </main>
  
  );
}

export default Order;
