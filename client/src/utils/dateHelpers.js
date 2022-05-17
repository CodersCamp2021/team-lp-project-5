import dayjs from "dayjs";

export const checkIfTheSameDay = (firstDate, secondDate) => {
  let firstDateObject;
  if (!(typeof firstDate.getMonth === "function")) {
    firstDateObject = new Date(firstDate);
  } else {
    firstDateObject = firstDate;
  }
  return dayjs(firstDateObject).isSame(dayjs(secondDate), "day");
};

export const getTomorrow = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
};
