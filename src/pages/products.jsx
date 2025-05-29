import { Link } from 'react-router-dom'
import navajaImg from "/ICONS/navaja.jpg"
import OilImg from "/ICONS/manos-de-primer-plano-sosteniendo-suero.jpg"
import AtomizadorImg from "/ICONS/ATOMIZADOR-BARBER-POLE-2-copia.jpg"
import CeraImg from "/ICONS/CERA-BLACK1.jpg"
import ListSVG from "/ICONS/list.svg"
import  { useState } from 'react'

function products() {
  const [IsListOpen, setIsListOpen] = useState(false);
    console.log(IsListOpen)
    const HandleChangeClickNavbar = ()=> {
      setIsListOpen(!IsListOpen ? true:false);
    }
  return (
    <>
    <div className='ContentBarber-Market'>
      <header className='Header-Products'>
        <div className='Logo-Txt'>
          <h2>Barber Shop</h2>
        </div>
       <button onClick={HandleChangeClickNavbar}><img src={ListSVG} alt="" /></button>
        <nav className={!IsListOpen ? "Navigator":"Navigator-Open"}>
          <Link to="/">Come Back</Link>
          <Link to="#">accessories</Link>
          <Link to="#">Face</Link>
          <Link to="#">Beard</Link>
        </nav>
       
      </header>
    </div>
    <section className='contentShop'>
     <h2>Shop</h2>
     <div className='items-Products'>
        <div className='cardProducts'>
          <div className='image-products'>
            <img src={navajaImg} alt="" />
          </div>
          <h2>Razor</h2>
          <p>Lorem ipsum dolor sit</p>
          <p>20.99 USD</p>
          <button>Buy</button>
        </div>
        <div className='cardProducts'>
          <div className='image-products'>
            <img src={OilImg} alt="" />
          </div>
           <h2>Oil Beard</h2>
          <p>Lorem ipsum dolor sit</p>
          <p>30 USD</p>
          <button>Buy</button>
        </div>
        <div className='cardProducts'>
          <div className='image-products'>
            <img src={AtomizadorImg} alt="" />
          </div>
           <h2>atomizer</h2>
          <p>Lorem ipsum dolor sit</p>
          <p>5 USD</p>
          <button>Buy</button>
        </div>
        <div className='cardProducts'>
          <div className='image-products'>
            <img src={CeraImg} alt="" />
          </div>
           <h2>Wax</h2>
          <p>Lorem ipsum dolor sit</p>
          <p>25 USD</p>
          <button>Buy</button>
        </div>
          
        
     </div>
    </section>
    </>
    
  )
}

export default products
