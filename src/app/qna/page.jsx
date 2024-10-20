'use client'

import MyContext from '@/app/contextUser'
import { useContext } from 'react'

const Qna = () => {
    const {language,setLanguage} = useContext(MyContext)

  return (
    <div>{language}</div>
  )
}

export default Qna