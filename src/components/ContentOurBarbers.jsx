import React from 'react'
import kaweImage from "/ICONS/kawe.jpg"
import AndresImage from "/ICONS/andres.jpg"
import JhonImage from "/ICONS/Jhon.jpg"

function ContentOurBarbers() {
  return (
    <section id='ContentOurBarbers' className='ContentOurBarbers'>
      <h2>Our Barbers</h2>
      <div className='Barbers-Cards'>
        <div className='cardBarbers'>
          <img src={kaweImage} alt="" />
          <h2>Kawe</h2>
          <button className='ButtonChoosebarber'>Choose</button>
        </div>
        <div className='cardBarbers'>
          <img src={AndresImage} alt="" />
          <h2>Andres</h2>
           <button className='ButtonChoosebarber'>Choose</button>
        </div>
        <div className='cardBarbers'>
          <img src={JhonImage} alt="" />
          <h2>Jhon</h2>
           <button className='ButtonChoosebarber'>Choose</button>
        </div>
      </div>
    </section>
  )
}

export default ContentOurBarbers
