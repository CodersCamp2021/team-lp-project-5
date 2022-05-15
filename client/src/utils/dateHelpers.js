export const checkIfTheSameDay = (firstDate, secondDate) => {
  return firstDate.toDateString() === secondDate.toDateString();
};

export const getTomorrow = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
};
