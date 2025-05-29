import React from 'react'
import ImageAbout from "/ICONS/nathon-oski-EW_rqoSdDes-unsplash.jpg"
function Contentbarber() {
  return (
    <section id='itemsBarber' className='itemsBarber'>
      <div className='AboutContent'>
        <p className='paragraph-About'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas velit doloremque nam sapiente incidunt sequi, dolor blanditiis ex repudiandae asperiores laboriosam, similique vitae maxime ipsam hic porro fugiat voluptates quae!</p>
        <div className='Image-About'>
            <img src={ImageAbout} alt="" />
        </div>
      </div>
      <button className='ButtonLearnMore'>Learn More</button>
    </section>
  )
}

export default Contentbarber
