import '../globals.css';
import { useEffect, useState } from 'react';
import { Typography, Container, Button } from '@mui/material';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                setDeferredPrompt(null);
            });
        }
    };

    return (
        <footer className="relative bg-gray-400 py-10">
            <Container maxWidth="lg">
                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} 品誠書店. 版權所有.
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    <Link href="/aboutus" color="inherit" className='hover:text-white'>
                        關於我們
                    </Link>
                    {' | '}
                    <Link href="/contactus" color="inherit" className='hover:text-white'>
                        聯繫我們
                    </Link>
                    {' | '}
                    <Link href="/policy" color="inherit" className='hover:text-white'>
                        隱私政策
                    </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" className='hover:scale-110 delay-100 ease-in-out'>
                    <Link href="/contactus" color="inherit" className='hover:cursor-pointer m-2 text-blue-800 '>
                        <FacebookIcon />
                    </Link>
                    <Link href="/contactus" color="inherit" className='hover:cursor-pointer m-2 text-pink-600 '>
                        <InstagramIcon />
                    </Link>
                    <Link href="/contactus" color="inherit" className='hover:cursor-pointer m-2 text-red-700 '>
                        <YouTubeIcon />
                    </Link>
                    <Link href="/contactus" color="inherit" className='hover:cursor-pointer m-2 text-black '>
                        <XIcon />
                    </Link>
                </Typography>
                {deferredPrompt && (
                    <Typography variant="body2" color="text.secondary" align="center">
                        <Button variant="contained" color="primary" onClick={handleInstallClick} className='flex flex-col fixed bottom-10 right-10 h-[10vh] rounded-full bg-orange-500 font-bold text-2xl hover:invert'
                        style={{display:"flex",flexDirection:'column',position:'fixed',background:'orange',color:'#fff',borderRadius:'50%',right:'2.5rem',bottom:'2.5rem'}}> 
                        
                        <div>品誠書店</div>
                        <div className='font-extrabold text-sm text-black'>App下載</div>
                        </Button>
                    </Typography>
                )}
            </Container>
        </footer>
    );
}
