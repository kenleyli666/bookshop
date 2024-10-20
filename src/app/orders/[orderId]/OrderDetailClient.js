// pages/orders/[orderId]/OrderDetailClient.js

'use client';

import MyContext from "@/app/contextUser";
import { useContext } from "react";

export default function OrderDetailClient({ orderDetail }) {
    const { userName } = useContext(MyContext);

    if (!orderDetail.product || userName !== orderDetail.username) {
        return <div>No order / Please login</div>;
    }

    const renderProducts = () => {
        return orderDetail.product.map((item, index) => (
            <div key={index} className="m-auto w-[80%] bg-white mt-5 rounded pl-[8%] hover:invert text-blue-500 p-1" style={{ border: '3px solid blue' }}>
                <b>{item.title}</b>
                <p>數量：{item.quantity}</p>
                <p>單價：{item.price}</p>
            </div>
        ));
    };

    return (
        <div style={{ marginTop: '15vh' }} className="min-h-[75vh]">
            <h1 style={{ fontSize: '35px', textAlign: 'center', textDecoration: 'underline' }}>訂單詳情</h1>
            <div className="bg-white w-[80%] flex m-auto rounded flex-col font-normal hover:invert text-blue-500 p-1" style={{ border: '3px solid blue' }}>
                <h3 className="pl-[10%] text-center">將於訂單確認後的14個工作日內送到。</h3>
                <p className="pl-[10%]">收貨人：{orderDetail.contact}; </p>
                <p className="pl-[10%]">聯絡電話：{orderDetail.phone}</p>
                <p className="pl-[10%]">地址：{orderDetail.address}</p>
            </div>
            {renderProducts()}
            <div className="w-[80%] bg-white rounded flex m-auto mt-5 font-bold text-xl justify-center p-1" style={{ border: '3px solid blue' }}>
                <p className="font-bold text-xl">總值：</p>{orderDetail.total}
            </div>
        </div>
    );
}
