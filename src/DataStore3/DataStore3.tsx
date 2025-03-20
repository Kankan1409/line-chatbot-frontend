import "./Topic.css";
import { Link } from "react-router-dom";
import "./Profile.css";

const userProfile = {
    group: "ไม่มีกลุ่ม",
    name: "สุนิสา",
    surname: "สุโชพันธ์",
    gender: "หญิง",
    phone: "0837740923",
    points: 50,
    wallet: 0,
};

const ProfilePage = () => {
    return (
        <main className="bg-gray-900 min-h-screen p-6 flex flex-col items-center text-white">
            <div className="w-full max-w-md bg-gray-800 shadow-md rounded-lg p-4">
                {/* Header */}
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <h1 className="text-lg font-bold">ห้างทองโอ้วชุนเซ้ง</h1>
                    <button className="text-gray-400 hover:text-gray-200">✖</button>
                </div>
                
                {/* Profile Details */}
                <div className="mt-4">
                    <p><span className="font-semibold">กลุ่มลูกค้า:</span> {userProfile.group}</p>
                    <p><span className="font-semibold">ชื่อจริง:</span> {userProfile.name}</p>
                    <p><span className="font-semibold">นามสกุล:</span> {userProfile.surname}</p>
                    <p><span className="font-semibold">เพศ:</span> {userProfile.gender}</p>
                    <p><span className="font-semibold">เบอร์โทรศัพท์:</span> {userProfile.phone}</p>
                    <p><span className="font-semibold">คะแนน:</span> {userProfile.points}</p>
                    <p><span className="font-semibold">วอลเล็ท:</span> {userProfile.wallet}</p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex justify-between mt-6">
                    <button className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-500">
                        ล้างข้อมูลเว็บไซต์
                    </button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                        ออกจากระบบ
                    </button>
                </div>
            </div>
        </main>
    );
};

export default ProfilePage;
