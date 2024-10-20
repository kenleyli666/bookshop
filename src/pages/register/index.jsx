'use client'

import { useState } from 'react';
import { Typography, Container, TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import CheckValid from '../../app/functions/register/CheckValid';
import axios from 'axios';
import '../../app/globals.css'

export default function Register() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const handleChange = (e) => {
        console.log(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        let pass = await CheckValid(formData)
        console.log('ValidationTest: ',pass)
        if (pass) {
            delete formData.confirmPassword
            let JedData = JSON.stringify(formData)
            axios.post("http://localhost:8000/users", JedData)
            .then(data=>'')
            .catch(err=>console.log(err))
            setFormData({
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
            // console.log("You'll be transfered to the LoginPage after 3seconds!")
            // setTimeout(()=>router.push('/login'),3000)
        }
    };


    return (
        <Container maxWidth="sm" className="my-8" style={{top:'10vh', height:'75vh'}}>
            <Typography variant="h4" component="h1" gutterBottom>
                用戶註冊
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    name="username"
                    label="用戶名"
                    value={formData.username}
                    onChange={handleChange}
                    min={6}
                    maxLength={25}
                    required
                    className='bg-white'
                />
                <TextField
                    fullWidth
                    margin="normal"
                    name="email"
                    label="電子郵件"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='bg-white'
                />
                <TextField
                    fullWidth
                    margin="normal"
                    name="password"
                    label="密碼"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    minLength={8}
                    maxLength={20}
                    required
                    className='bg-white'
                />
                <TextField
                    fullWidth
                    margin="normal"
                    name="confirmPassword"
                    label="確認密碼"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    minLength={8}
                    maxLength={20}
                    required
                    className='bg-white'
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="mt-4 "
                >
                    註冊
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="mt-4"
                    style={{marginTop:'10px'}}
                    onClick={()=>{router.push('/')}}
                >
                    Home
                </Button>
            </form>
        </Container>    
    );
}