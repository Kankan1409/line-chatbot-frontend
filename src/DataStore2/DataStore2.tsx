import "./Topic.css";
import { Link } from "react-router-dom";
import "./Product.css";

const shopInfo = {
    name: "ห้างทองโอ้วชุนเซ้ง",
    address: "533 ถนน ประจันตเขต",
    phone: "044-631-278",
    hours: "จันทร์ - เสาร์ 08:00-17:00 น.\nเปิดทุกวันอาทิตย์ต้นเดือน 08:00-13:00 น.",
    facebook: "https://www.facebook.com/a2aew",
    line: "https://lin.ee/4EV5kI9",
    image: "/asset/images/logo.jpg",
};

const ContactPage = () => {
    return (
        <main className="bg-red-100 min-h-screen p-6 flex flex-col items-center">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-2">
                    <h1 className="text-lg font-bold">{shopInfo.name}</h1>
                    <Link to="/Topic" className="text-gray-500 hover:underline">&larr; ย้อนกลับ</Link>
                </div>
                
                {/* Shop Image */}
                <div className="flex justify-center my-4">
                    <img src={shopInfo.image} alt="Shop Logo" className="w-48 h-48 object-cover rounded-lg" />
                </div>
                
                {/* Contact Details */}
                <div className="bg-blue-100 p-4 rounded-lg shadow">
                    <p className="text-lg font-semibold">{shopInfo.name}</p>
                    <p className="text-gray-700 flex items-center"><span className="mr-2">📍</span>{shopInfo.address}</p>
                    <p className="text-gray-700 flex items-center"><span className="mr-2">📞</span> เบอร์โทรศัพท์: {shopInfo.phone}</p>
                    <p className="text-gray-700 flex items-center"><span className="mr-2">⏰</span> {shopInfo.hours}</p>
                    <p className="text-gray-700 flex items-center"><span className="mr-2">🔗</span> <a href={shopInfo.facebook} className="text-blue-600 hover:underline">Facebook</a></p>
                    <p className="text-gray-700 flex items-center"><span className="mr-2">🔗</span> <a href={shopInfo.line} className="text-blue-600 hover:underline">Line</a></p>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
