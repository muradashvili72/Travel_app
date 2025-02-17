"use client";
import React, { useState } from 'react'
import Nav from './Nav'

const ResponsiveNav = () => {
  const [_showNav, setShowNav] = useState(false);
  const handNavShow = () => setShowNav(true);
  // const handleCloseNav = () => setShowNav(false);
  return (
    <div>
        <Nav  openNav={handNavShow}/>
    </div>
  )
}

export default ResponsiveNav