'use client'

import MyContext from '@/app/contextUser';
import IconContext from '../contextUserIcon';
import { Button, Container, Snackbar, TextField, Typography } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { useContext, useState } from 'react'
import CheckLogin from '../functions/login/login';
import { useRouter } from 'next/navigation';
import '../globals.css';

// import CheckLogin from '../functions/login/login'
// import { useRouter } from 'next/router';


const Login = () => {
    const {userName,setUserName} = useContext(MyContext);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [userIcon, setUserIcon] = useContext(IconContext);

    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSnackbarClose = () => {
        setSnackbarOpen(!snackbarOpen)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userName) {
            return console.log(`You've logged in!!`)
        }
        //Call api
        const userList = await axios.get("http://localhost:8000/users")
        .then(res=>res.data)
        .catch(err=>console.log(err))

        // // Check data
        let userPass = await CheckLogin(formData,userList)

        // // Return result if error
        if (!userPass) {
            console.log('Wrong data, please try again')
            return 
        }
        // // Return user when login
        console.log('Logged in!')
        setSnackbarOpen(true);

        setUserName(userPass.username); 
        setUserIcon(userPass.icon_image);
        setTimeout(() => {
            router.push('/');
        }, 1500);
    };

    return (
    <>
        <h1>{userName ? userName : 'No user now'}</h1> 
        {userIcon && <img src={userIcon} alt="User Icon" className='absolute h-20 w-28 top-28 left-[48%] !important'/>}
        <Container maxWidth="sm" className="my-8 relative" style={{ top:'10vh' , height:'72vh'}}>
            <Typography variant="h4" component="h1" gutterBottom>
                用戶登錄
            </Typography>
            <form onSubmit={handleSubmit}>
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
                    margin='normal'
                    name="password"
                    label="密碼"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className='bg-white'
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="mt-4"
                >
                    登錄
                </Button>
            </form>
            <Typography className="mt-4 text-center">
                還沒有帳戶？ <Link href="/register">立即註冊</Link>
            </Typography>
        </Container>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message={`You have logged in!`}
        />
        </>
    );
}

export default Login