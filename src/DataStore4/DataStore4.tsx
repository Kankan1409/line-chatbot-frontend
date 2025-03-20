import "./Topic.css";
import { Link } from "react-router-dom";
import "./Product.css";

const products = [
    {
        id: 1,
        name: "สร้อยข้อมือไหมไทย",
        image: "/asset/images/bracelet.jpg",
        description: "สร้อยข้อมือไหมไทย ระย้าทำใจ งานสวยละเอียด",
    },
    {
        id: 2,
        name: "แหวนดอกโคลเวอร์",
        image: "/asset/images/ring.jpg",
        description: "แหวนดอกโคลเวอร์ สวยสุดจี๊ดแน่นอน สีสันสวยยังไงแน่นอน",
    },
    {
        id: 3,
        name: "มือโซ่เบบี้",
        image: "/asset/images/necklace.jpg",
        description: "มือโซ่เบบี้ สลึงงานละเอียดใหม่ล่าสุดเป็นที่สุดต้องมี!",
    },
];

const PublicRelations = () => {
    return (
        <main className="bg-red-100 min-h-screen p-6 flex flex-col items-center">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-2">
                    <h1 className="text-lg font-bold">ห้างทองโอ้วชุนเซ้ง</h1>
                    <Link to="/Topic" className="text-gray-500 hover:underline">&larr; ย้อนกลับ</Link>
                </div>
                
                {/* Product List */}
                <div className="mt-4 space-y-4">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                            <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded-md" />
                            <h2 className="text-md font-semibold mt-2">{product.name}</h2>
                            <p className="text-gray-600 text-center text-sm mt-1">{product.description}</p>
                            <button className="mt-2 bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800">
                                ดูเพิ่มเติม
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default PublicRelations;
