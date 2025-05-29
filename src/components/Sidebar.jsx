import React from 'react'
import FaceboockSVG from "/ICONS/facebook.svg"
import InstagramSVG from "/ICONS/instagram.svg"
import TwitterSVG from "/ICONS/twitter-x.svg"
import ThreadsSVG from "/ICONS/threads.svg"

function Sidebar() {
  return (
    <div className='ContentSidebar'>
      <a href="#" className='icon-white'><img src={FaceboockSVG} alt="" /></a>
      <a href="#" className='icon-white'><img src={InstagramSVG} alt="" /></a>
      <a href="#" className='icon-white'><img src={TwitterSVG} alt="" /></a>
      <a href="#" className='icon-white'><img src={ThreadsSVG} alt="" /></a>
    </div>
  )
}

export default Sidebar
