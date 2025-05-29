import {Link } from 'react-router-dom'
import ListSVG from "/ICONS/list.svg"
import React, { useState } from 'react'

function Header() {
  const [IsListOpen, setIsListOpen] = useState(false);
  console.log(IsListOpen)
  const HandleChangeClickNavbar = ()=> {
    setIsListOpen(!IsListOpen ? true:false);
  }
  return (
    <header className='contentHeader'>
      <button onClick={HandleChangeClickNavbar}><img src={ListSVG} alt="" /></button>
      <nav className={!IsListOpen ? "Navigator":"Navigator-Open"} >
        <a onClick={()=> setIsListOpen(false)} href="#itemsBarber">Our service</a>
        <a onClick={()=> setIsListOpen(false)} href="#ContentOurBarbers">Barbers</a>
        <a onClick={()=> setIsListOpen(false)} href="#PriceTableServices">Price</a>
        <Link to="/products">Products</Link>
      </nav>
    
    </header>
  )
}

export default Header
