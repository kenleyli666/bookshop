"use client";

import React, { createContext } from "react";

const ShoppingCartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
});

export default ShoppingCartContext;
