import "./Topic.css";
import { Link } from "react-router-dom";
import "./Product.css";

const product = {
    id: 1,
    name: "สร้อยคอซีตรองคั่นระย้าดาว",
    image: "/asset/images/t.jpg",
    price: "25,000 บาท",
    description: "สร้อยคอทองคำแท้ 96.5% น้ำหนัก 1 บาท สวยหรู ใส่ออกงานได้ทุกโอกาส",
};

const ProductDetail = () => {
    return (
        <main className="bg-gray-100 min-h-screen p-4">
            {/* รายละเอียดสินค้า */}
            <div className="product-container">
                {/* ปุ่มย้อนกลับ */}
                <Link to="/Topic" className="back-button">&larr; ย้อนกลับ</Link>
                <img src={product.image} alt={product.name} className="product-image" />
                <h2 className="product-title">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
                {/* ปุ่มซื้อสินค้า */}
                <button className="add-to-cart">เพิ่มลงตะกร้า 🛒</button>
            </div>
        </main>
    );
};

export default ProductDetail;
