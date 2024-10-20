'use client'

import MyContext from "@/app/contextUser";
import { useContext, useEffect, useState } from "react";


export default function OrderDetail({params}) {
    const [orderList,setOrderList] = useState({})
    const {userName,setUserName} = useContext(MyContext)

    const getOrderDetailOfId = async () =>{
        try {
            const res = await fetch(`http://localhost:8000/orders/${params.orderId}`);
            if (!res.ok) {
              throw new Error('Server 404!')
            }
            const data = await res.json()
            setOrderList(data)
            console.log('List will be',data)
          }
          catch(error) {
            console.log(error.message)
          }
    }

    const renderProducts = () => {
        return orderList.product.map((item,index)=>{
            return <div key={index} className="m-auto w-[80%] bg-white mt-5 rounded pl-[8%] hover:invert text-blue-500 p-1" style={{border:'3px solid blue '}}>
            <b>{item.title}</b>
            <p>數量：{item.quantity}</p>
            <p>單價：{item.price}</p>
            </div> 
        })
    }

useEffect(()=>{
    getOrderDetailOfId()
},[])

return (
    <div style={{marginTop:'15vh'}} className="min-h-[75vh]">
        
    {
    orderList.product&&userName===orderList.username ? 
    <>
        <h1 style={{fontSize:'35px', textAlign:'center', textDecoration:'underline'}} >訂單詳情</h1>
        <div className=" bg-white w-[80%] flex m-auto rounded flex-col font-normal hover:invert text-blue-500 p-1" style={{border:'3px solid blue'}}>
            <h3 className="pl-[10%] text-center" >將於訂單確認後的14個工作日內送到。</h3>
            <p className="pl-[10%]">收貨人：{orderList.contact}; </p>
            <p className="pl-[10%]">聯絡電話：{orderList.phone}</p>
            <p className="pl-[10%]">地址：{orderList.address}</p>
        </div>
            {renderProducts()}
        <div className="w-[80%] bg-white rounded flex m-auto mt-5 font-bold text-xl justify-center p-1" style={{border:'3px solid blue'}}>
        <p className="font-bold text-xl">總值：</p>{orderList.total}
        </div>
         {/* orderList.product.map((item,index)=>{
             return  <div>
                 <b>{item.title}</b>
                 <p>數量：{item.quantity}</p>
                 <p>單價：{item.price}</p>
                 </div> 
         }) */}
    </>
        : <>No order / Please login</>
}
    </div>
)
}