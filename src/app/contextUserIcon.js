'use client'

import React, { createContext } from "react";

// const IconContext = createContext({
//     userIcon: '',
//     setUserIcon: ()=>{}
// })

const IconContext = createContext(['', () => {}]);

export default IconContext;