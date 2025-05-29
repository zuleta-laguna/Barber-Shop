import React from 'react'

function PriceTable() {
  return (
    <section id='PriceTableServices' className='PriceTableServices'>
      <h2>Price</h2>
      <div className='itemsCardPrices'>
         <div className='cardprices'>
           <h2>BASIC</h2>
           <p>✔️ Hair Cut</p>
           <p>❌ Hair Wash</p>
           <p>❌ define beard</p>
           <p>❌ facial cleansing</p>
           <h3>9.99 USD</h3>
           <div className='centerButton'>
            <button>See More</button>
           </div>
         </div>
         <div className='cardprices'>
           <h2>INTERMEDIATE</h2>
           <p>✔️ Hair Cut</p>
           <p>✔️ Hair Wash</p>
           <p>❌ define beard</p>
           <p>❌ facial cleansing</p>
           <h3>20.99 USD</h3>
            <div className='centerButton'>
            <button>See More</button>
           </div>
         </div>
         <div className='cardprices'>
            <h2>AVANCED</h2>
            <p>✔️ Hair Cut</p>
           <p>✔️ Hair Wash</p>
           <p>✔️ define beard</p>
           <p>✔️ facial cleansing</p>
           <h3>40 USD</h3>
            <div className='centerButton'>
            <button>See More</button>
           </div>
         </div>
      </div>
    </section>
  )
}

export default PriceTable
