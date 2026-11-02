// src/utils/dateHelpers.js
import { 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  format, 
  isSameMonth, 
  isSameDay, 
  addMonths, 
  subMonths 
} from 'date-fns';
import { es } from 'date-fns/locale'; // Importante para tener los nombres en español

// 1. Obtener los días que se mostrarán en la grilla del mes (incluyendo días de relleno del mes anterior/siguiente)
export const getMonthDaysMatrix = (currentDate) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  
  // Semana empieza en lunes (weekStartsOn: 1) ideal para formato latinoamericano
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  return eachDayOfInterval({ start: startDate, end: endDate });
};

// 2. Formatear el título del mes (Ej: "Julio 2026")
export const formatMonthTitle = (date) => {
  const formatted = format(date, 'MMMM yyyy', { locale: es });
  // Capitalizar la primera letra
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

// 3. Formatear la fecha para enviarla a tu base de datos (Ej: "2026-07-30")
export const formatDBDate = (date) => {
  return format(date, 'yyyy-MM-dd');
};

// 4. Exportar funciones de navegación y comparación para usarlas fácil
export { isSameMonth, isSameDay, addMonths, subMonths };