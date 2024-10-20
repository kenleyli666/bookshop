'use client'

import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../contextUser';
import { Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import Link from 'next/link';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { userName, setUserName } = useContext(MyContext);

  async function getUserOrderApi() {
    try {
      const res = await fetch('http://localhost:8000/orders');
      if (!res.ok) {
        throw new Error('Server 404!')
      }
      const data = await res.json()
      setOrders(data.filter(item=>item.username === userName))
    }
    catch(error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getUserOrderApi()
  }, []);

  return (
    <>
      {!userName ? 
          <p>No such user.</p> : 
 <Container maxWidth="md" className="mt-8 min-h-[75vh]">
             <Typography variant="h4" component="h1" className='mt-[15vh]' gutterBottom>
               我的訂單
             </Typography>
             <TableContainer component={Paper}>
               <Table>
                 <TableHead>
                   <TableRow>
                     <TableCell>訂單編號</TableCell>
                     <TableCell>日期(DD-MM-YYYY)</TableCell>
                     <TableCell>總額</TableCell>
                     <TableCell>狀態</TableCell>
                     <TableCell></TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {orders.map((order) => (
                     <TableRow key={order.id}>
                       <TableCell>INV-{order.id}</TableCell>
                       <TableCell>{order.date}</TableCell>
                       <TableCell>${order.total}</TableCell>
                       <TableCell>{order.status}</TableCell>
                       <TableCell>
                         <Link href={`/orders/${order.id}`} passHref>
                           <Button variant="outlined" size="small">
                             查看詳情
                           </Button>
                         </Link>
                       </TableCell>
                     </TableRow>
                   ))}
                 </TableBody>
               </Table>
             </TableContainer>
           </Container>
          // })
          
      }
      
    </>
  );
};

export default Orders;
