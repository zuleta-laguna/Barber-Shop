import RazorI from "../../public/Svg/Razor_I.png";
import RazorII from "../../public/Svg/Razor_II.png";
import BarberI from "../../public/Barber's_Image/Barber1.png";
import BarberII from "../../public/Barber's_Image/Barber2.png";
import BarberIII from "../../public/Barber's_Image/Barber3.png";
import Calendar from "./Calendar.jsx";

function BookingForm() {
  return (
    <section className="BookingSection" id="booking">
      <h2>
        Agendar <span>cita</span>
      </h2>
      <div className="ContentListOfServiceBooking">
        <div className="CardServiceChoose">
          <img src={RazorI} />
          <div className="InfoService">
            <p>$15,000</p>
            <p>Corte</p>
          </div>
        </div>
        <div className="CardServiceChoose">
          <img src={RazorII} />
          <div className="InfoService">
            <p>$15,000</p>
            <p>Barba</p>
          </div>
        </div>
        <div className="CardServiceChoose">
          <img src={RazorI} />
          <div className="InfoService">
            <p>$15,000</p>
            <p>Corte & Barba</p>
          </div>
        </div>
      </div>
      <section className="BarbersSection_Booking">
        <div className="BabersList_Booking">
          <div className="BarberCard_booking">
            <img src={BarberI} />
            <p>Alberth</p>
          </div>
          <div className="BarberCard_booking">
            <img src={BarberII} />
            <p>Ronald</p>
          </div>
          <div className="BarberCard_booking">
            <img src={BarberIII} />
            <p>Peter</p>
          </div>
        </div>
      </section>
      <div className="Input_Section">
        <input placeholder="Nombre" type="text" className="Input_Form" />
        <input placeholder="Numero" type="text" className="Input_Form" />
      </div>
      <Calendar />
    </section>
  );
}

export default BookingForm;
