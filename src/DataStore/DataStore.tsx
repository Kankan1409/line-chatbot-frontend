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
        <main className="bg-red-100 min-h-screen p-6 flex flex-col items-center">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-2">
                    <h1 className="text-lg font-bold">ห้างทองโอ้วชุนเซ้ง</h1>
                    <Link to="/Topic" className="text-gray-500 hover:underline">&larr; ย้อนกลับ</Link>
                </div>
                
                {/* Product Image */}
                <div className="flex justify-center my-4">
                    <img src={product.image} alt={product.name} className="w-48 h-48 object-cover rounded-lg" />
                </div>
                
                {/* Product Details */}
                <h2 className="text-xl font-semibold text-center text-gray-800">{product.name}</h2>
                <p className="text-gray-600 text-center mt-2">{product.description}</p>
                <p className="text-lg font-bold text-center text-red-500 mt-2">{product.price}</p>
                
                {/* Action Button */}
                <div className="flex justify-center mt-4">
                    <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-600">
                        เพิ่มลงตะกร้า 🛒
                    </button>
                </div>
            </div>
        </main>
    );
};

export default ProductDetail;
