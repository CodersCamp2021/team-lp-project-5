export const checkIfTheSameDay = (firstDate, secondDate) => {
  return (
    firstDate.getDate() === secondDate.getDate() &&
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth()
  );
};
