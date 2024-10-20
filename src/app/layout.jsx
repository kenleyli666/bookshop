'use client'

import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import MyContext from '@/app/contextUser';
import ShopingCartContext from './contextCart';
import IconContext from './contextUserIcon';
import React, { useState } from 'react';
import Head from 'next/head';

const RootLayout = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const value = { userName, setUserName };

  const [cartItems, setCartItems] = useState([]);
  const CartValue = { cartItems, setCartItems };

  const [userIcon, setUserIcon] = useState('');

  return (
    <MyContext.Provider value={value}>
      <ShopingCartContext.Provider value={CartValue}>
        <IconContext.Provider value={[userIcon, setUserIcon]}>
          <html lang="en">
            <Head>
              <link rel="manifest" href="manifest.json" />
              <meta name="theme-color" content="#20a7db" />
            </Head>
            <body>
              <Header />
              {children}
              <Footer />
            </body>
          </html>
        </IconContext.Provider>
      </ShopingCartContext.Provider>
    </MyContext.Provider>
  );
};

export default RootLayout;




