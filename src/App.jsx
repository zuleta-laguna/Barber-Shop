import RazorI from "../public/Svg/Razor_I.png";
import RazorII from "../public/Svg/Razor_II.png";
import BarberI from "../public/Barber's_Image/Barber1.png";
import BarberII from "../public/Barber's_Image/Barber2.png";
import BarberIII from "../public/Barber's_Image/Barber3.png";
import barbershopBg from "../public/Backgrounds/BarberShopImage.png";
import BookingForm from "./components/BookingForm.jsx";
import "./index.css";

function App() {
  return (
    <div className="ContentAppFather">
      <main className="FrontPageMobileVersion" id="home">
        <nav id="NavBar">
          <a href="#home">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#barbers">Barberos</a>
        </nav>
        <div className="ContentFrontpage">
          <h2>Texas</h2>
          <p>BarberShop</p>
          <div id="BorderLink">
            <a href="#booking">Agendar Ahora</a>
          </div>
        </div>
      </main>
      <section className="ServiceContainer" id="services">
        <h2>
          Lista de <span>Servicios</span>
        </h2>
        <div className="ContentListOfService">
          <div className="CardService">
            <img src={RazorI} />
            <div>
              <p>$15,000</p>
              <p>Corte</p>
            </div>
          </div>
          <div className="CardService">
            <img src={RazorII} />
            <div>
              <p>$15,000</p>
              <p>Barba</p>
            </div>
          </div>
          <div className="CardService">
            <img src={RazorI} />
            <div>
              <p>$15,000</p>
              <p>Corte & Barba</p>
            </div>
          </div>
        </div>
      </section>
      <section className="BarbersSection" id="barbers">
        <h2>
          Bar<span>beros</span>
        </h2>
        <div className="BabersList">
          <div className="BarberCard">
            <img src={BarberI} />
            <p>Alberth</p>
          </div>
          <div className="BarberCard">
            <img src={BarberII} />
            <p>Ronald</p>
          </div>
          <div className="BarberCard">
            <img src={BarberIII} />
            <p>Peter</p>
          </div>
        </div>
      </section>
      <section className="InfoSection">
        <div className="InfoBarberShop">
          <img src={barbershopBg} />
          <h2>Tu Propio Estilo</h2>
          <p>
            En Texas, nuestros barberos expertos te ofrecen un servicio de
            calidad en un ambiente cómodo y relajante.
          </p>
          <div id="BorderLinkInfo">
            <a href="#booking">Agendar Cita</a>
          </div>
        </div>
      </section>
      <BookingForm />
    </div>
  );
}

export default App;
