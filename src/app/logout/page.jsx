'use client'

import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import MyContext from '../contextUser'
import IconContext from '../contextUserIcon'
import '../globals.css'


const Logout = () => {
  const {userName,setUserName} = useContext(MyContext);
  const [userIcon, setUserIcon] = useContext(IconContext);
  const router = useRouter()
  useEffect(()=>{
    setUserName(null)
    setUserIcon(null)
    setTimeout(()=>{
      router.push('/')
    },4000)
  },[])
  return (
    <div style={{marginTop:'15vh'}}>You have already log out. You will be transfer back to mainpage within 5seconds.</div>
  )
}

export default Logout