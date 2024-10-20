// pages/orders/[orderId]/OrderDetail.js

import OrderDetailClient from './OrderDetailClient';
import axios from 'axios';

export async function generateStaticParams() {
    const res = await axios.get('http://localhost:8000/orders');
    const orders = res.data;

    return orders.map(order => ({
        orderId: order.id.toString(),
    }));
}

export default async function OrderDetail({ params }) {
    const { orderId } = params;

    const res = await axios.get(`http://localhost:8000/orders/${orderId}`);
    const orderDetail = res.data;

    return <OrderDetailClient orderDetail={orderDetail} />;
}
