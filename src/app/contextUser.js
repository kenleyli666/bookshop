'use client'

import React, { createContext } from "react";

const MyContext = createContext({
    userName: '',
    setUserName: ()=>{}
})

export default MyContext