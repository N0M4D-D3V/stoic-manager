export const getTomorrowDate = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // Comprueba si es el último día del mes
  if (tomorrow.getDate() === 1) {
    // Si es el último día del mes, avanza al próximo mes
    tomorrow.setMonth(today.getMonth() + 1);
  }

  const month = String(tomorrow.getMonth() + 1).padStart(2, '0'); // Agrega un 0 si es necesario
  const day = String(tomorrow.getDate()).padStart(2, '0');
  const year = tomorrow.getFullYear();

  return `${year}-${month}-${day}`;
};
