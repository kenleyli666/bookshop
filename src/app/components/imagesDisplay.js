import React, { useEffect, useState } from 'react'
import image2 from '../../activiesImage/image2.png'
import Image from 'next/image'

const ImageDisplay = () => {
  return (
    <Image src={image2} style={{objectFit:'cover'}} alt='sales-event' />
  )
}

export default ImageDisplay