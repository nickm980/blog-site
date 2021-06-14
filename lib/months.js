const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function getTimeFromLong(long) {
  const date = new Date(long);
  return (
    monthNames[date.getMonth()] +
    " " +
    date.getDay() +
    ", " +
    (date.getFullYear() + " ").slice(-3)
  );
}
