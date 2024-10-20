"use client";

import React, { createContext } from "react";

const FavouriteContext = createContext({
  favouriteItems: [],
  setFavouriteItems: () => {},
});

export default FavouriteContext;
