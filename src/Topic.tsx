import "./Topic.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "สร้อยคอทองคำ",
    image: "/asset/images/gold-necklace.jpg",
    price: "25,000 บาท",
  },
  {
    id: 2,
    name: "แหวนทองคำ",
    image: "/asset/images/gold-ring.jpg",
    price: "12,000 บาท",
  },
  {
    id: 3,
    name: "กำไลทองคำ",
    image: "/asset/images/gold-bracelet.jpg",
    price: "18,500 บาท",
  },
];

const menuItems = [
  { id: 1, name: "ร้านค้าและสิทธิพิเศษ", icon: "/asset/icons/shop.png", to: "/shop" },
  { id: 2, name: "สิทธิพิเศษโปรโมชั่น", icon: "/asset/icons/promo.png", to: "/promo" },
  { id: 3, name: "ร้านค้า", icon: "/asset/icons/store.png", to: "/store" },
  { id: 4, name: "แพ็กเกจพิเศษ", icon: "/asset/icons/package.png", to: "/package" },
  { id: 5, name: "คูปอง", icon: "/asset/icons/coupon.png", to: "/coupon" },
  { id: 6, name: "ติดต่อเรา", icon: "/asset/icons/contact.png", to: "/Contact" },
  { id: 7, name: "ประวัติการแลกคะแนน", icon: "/asset/icons/package.png", to: "/history-points" },
  { id: 8, name: "รายการฝาก", icon: "/asset/icons/coupon.png", to: "/deposit" },
  { id: 9, name: "ประวัติการสั่งซื้อ", icon: "/asset/icons/contact.png", to: "/order-history" },
];

const Topic = () => {
  return (
    <main>
      <div className="topic">
        <div className="topic-card">
          {/* รูปภาพ */}
          <div className="topic-image">
            <img src="/asset/images/Topic.jpg" alt="ร้านทองโอ้วซุนเซ้ง" />
          </div>
          <div className="topic-info">
            {/* รูปภาพร้านทอง */}
            <div className="topic-aom">
              <img src="/asset/images/aom.png" width={150} alt="ร้านทองโอ้วซุนเซ้ง" />
            </div>
            {/* ข้อมูลร้านค้า */}
            <div className="topic-text">
              <p>คะแนน: <span className="score">42</span></p>
              <hr />
              <p>วอลเล็ท: <span className="wallet">29,000</span></p>
            </div>
          </div>
        </div>

        {/* แสดงสินค้าแบบเลื่อนดูได้ */}
        <div className="topic-product">
          <Swiper spaceBetween={10} slidesPerView={1.2}>
            {products.map((product) => (
              <SwiperSlide key={product.id} className="topic-cardProduct ">
                <div className="p-4 bg-white shadow-lg rounded-lg text-center ">
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
                  <h3 className="mt-2">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* เมนูหลักแบบ Grid */}
        <div className="menu-grid">
          {menuItems.map((item) => (
            <Link key={item.id} to={item.to} className="menu-item">
              <img src={item.icon} />
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Topic;
