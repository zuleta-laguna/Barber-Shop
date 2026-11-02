// src/components/Calendar.jsx
import React, { useState } from "react";
import { format } from "date-fns";
import {
  getMonthDaysMatrix,
  formatMonthTitle,
  formatDBDate,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
} from "../utils/DateHelpers";
import ArrowRigth from "../../public/Svg/Siguiente.svg";
import ArrowLeft from "../../public/Svg/Anterior.svg";
export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Obtener la matriz de días calculada con date-fns
  const daysGrid = getMonthDaysMatrix(currentDate);

  // Funciones para cambiar de mes
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  return (
    <div className="Calendar">
      {/* Cabecera con navegación */}
      <div className="CalendarHeader">
        <h2 className="Monthtitle">{formatMonthTitle(currentDate)}</h2>
        <div className="flexButton">
          <button onClick={prevMonth} className="Button_Month">
            <img src={ArrowLeft} />
          </button>
          <button onClick={nextMonth} className="Button_Month">
            <img src={ArrowRigth} />
          </button>
        </div>
      </div>

      {/* Grilla de días */}
      <div className="DatesDay">
        <span>Lun</span>
        <span>Mar</span>
        <span>Mié</span>
        <span>Jue</span>
        <span>Vie</span>
        <span>Sáb</span>
        <span>Dom</span>
        {daysGrid.map((day, index) => {
          const isCurrentMonth = isSameMonth(day, currentDate);
          const isSelected = isSameDay(day, selectedDate);

          return (
            <button
              key={index}
              onClick={() => {
                setSelectedDate(day);
                console.log("Fecha seleccionada para BD:", formatDBDate(day));
              }}
              id="ButtonDaysCalendar"
              className={`h-10 rounded-lg flex items-center justify-center text-sm transition-all
                ${!isCurrentMonth ? "text-gray-300" : "text-gray-700"}
                ${isSelected ? "ButtonDaysCalendar_color" : "ButtonDaysCalendar"}
              `}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
}
