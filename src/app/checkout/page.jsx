"use client";

import { Typography, Container, TextField, Button, Grid2 } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import ShoppingCartContext from '../contextCart';
import MyContext from '../contextUser';
import axios from 'axios';
import '../globals.css';
import { WidthFull } from '@mui/icons-material';

export default function Checkout() {
    const router = useRouter();
    const {cartItems,setCartItems} = useContext(ShoppingCartContext)
    const {userName, setUserName} = useContext(MyContext)
    const [formData,setFormData] = useState(
        {
            contactName:'',
            phone:'',
            address:''
        }
    )
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const postDataAction = (dataSet) => {
        axios.post("http://localhost:8000/orders", dataSet)
        .then(data=>'')
        .catch(err=>console.log(err))
    }

    const clickEvent = (e) => {
        e.preventDefault()
        // if user is not login.
        if (!userName) {
            console.log('please login first to continue the checkout.')
            setTimeout(()=>{
                router.push('/login')
            },3000)
            return 
        } 
        const total = cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          ).toFixed(2);
        const day = new Date()
        const todayDate = day.getDate()
        const todayMonth = day.getUTCMonth()+1
        const todayYear = day.getFullYear()
        const dateString = `${todayDate}-${todayMonth}-${todayYear}`
        const dataSet = {
            username:userName,
            date:dateString,
            product: cartItems,
            contact: formData.contactName,
            phone:  formData.phone,
            address: formData.address,
            total:total,
            status:'進行中…'
        }
        postDataAction(dataSet)
    }

    return (
        <Container maxWidth="md" className="my-8 mt-[20vh] min-h-[70vh]">
          <div>
            <p className='text-3xl font-medium'>你的購物車：</p>
            {
              cartItems.map((item,index)=>{
                return <div key={index} className='flex justify-around text-2xl bg-white rounded mb-5' style={{border:'1px gray solid'}}> 
                <p>{item.title} -{item.quantity}本</p> 
                <b>${item.price*item.quantity}</b>
                </div>
              })
            }
              <hr />
          </div>
            <Typography variant="h4" component="h1" gutterBottom>
                結帳
            </Typography>
            <form onSubmit={clickEvent} >
                <Grid2 container spacing={3} className="flex flex-col w-full mt-1" style={{display:'flex' ,flexDirection:'column' ,marginTop:'10vh', width:'100%'}}>
                    <Grid2 >
                        <TextField
                            required
                            fullWidth
                            name="contactName"
                            label="姓名"
                            className='bg-white '
                            onChange={handleChange}
                            value={formData.contactName}
                        />
                    </Grid2>
                    <Grid2 >
                        <TextField
                            required
                            fullWidth
                            name="phone"
                            label="聯絡電話"
                            type="tel"
                            className='bg-white'
                            onChange={handleChange}
                            value={formData.phone}
                        />
                    </Grid2>
                    <Grid2 >
                        <TextField
                            required
                            fullWidth
                            name="address"
                            label="地址"
                            className='bg-white'
                            onChange={handleChange}
                            value={formData.address}
                        />
                    </Grid2>
                </Grid2>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="mt-4"
                    fullWidth
                    style={{marginTop:'10px'}}
                >
                    提交訂單
                </Button>
            </form>
        </Container>
    );
}