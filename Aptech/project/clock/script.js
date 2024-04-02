function clock() {
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = [
    "sunday",
    "monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "friday",
    "saturday",
  ];
  let dates = new Date();
  document.querySelector(".date").innerHTML =
    day[dates.getDay()] +
    " " +
    dates.getDate() +
    " " +
    month[dates.getMonth()] +
    " " +
    dates.getFullYear();

  let hours = dates.getHours();
  let minutes = dates.getMinutes();
  let second = dates.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  second = second < 10 ? "0" + second : second;

  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".min").innerHTML = minutes;
  document.querySelector(".sec").innerHTML = second;
}
let time = setInterval(clock, 1000);
