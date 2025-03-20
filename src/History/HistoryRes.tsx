import React, { useState } from "react";
import "./HistoryRes.css";

const Booking: React.FC = () => {
    const [status, setStatus] = useState<string>("ทั้งหมด");
    const [date, setDate] = useState<string>("");

    return (
        <main className="booking-container">
            <div className="booking">
                <h2 className="title">การจอง</h2>

                {/* ส่วนกรองข้อมูล */}
                <div className="filter-container">
                    <label htmlFor="status">กรองตามสถานะ</label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="ทั้งหมด">ทั้งหมด</option>
                        <option value="รอดำเนินการ">รอยืนยันการจอง</option>
                        <option value="สำเร็จ">ยืนยันการจอง</option>
                        <option value="ยกเลิก">ยกเลิกการจอง</option>
                    </select>

                    <label htmlFor="date">เลือกวันที่</label>
                    <input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                {/* ตารางแสดงข้อมูล */}
                <table className="booking-table">
                    <thead>
                        <tr>
                            <th>สถานะ</th>
                            <th>ทำรายการ</th>
                            <th>วันที่</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={3} className="no-records">
                                No records to display
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="pagination">
                    <span>Rows per page</span>
                    <select>
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                    </select>
                    <span>0-0 of 0</span>
                    <button disabled>&lt;</button>
                    <button disabled>&gt;</button>
                </div>
            </div>
        </main>
    );
};

export default Booking;
