const months = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Decembre',
];
const weekdays = [
  'Dimanche',
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2024, 6, 21, 6, 30, 0);
let year = futureDate.getFullYear();
let month = months[futureDate.getMonth()];
let day = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();

// const localeDate = new Intl.DateTimeFormat('fr-FR', {
//   dateStyle: 'medium',
//   timeStyle: 'short',
// }).format(futureDate);

// console.log(localeDate);

giveaway.textContent = `Fin du concours le ${weekday} ${day} ${month} ${year} ${hour}:${minutes}`;

let futureTime = futureDate.getTime();
// console.log(futureTime);

// const remainingTime = futureDate - today;
// console.log(remainingTime);

//future time in ms
const getRemainingTime = () => {
  let today = new Date().getTime();
  // console.log(today);
  const remainingTime = futureDate - today;
  // console.log(remainingTime);
  // 1s = 1000 ms
  // 1m = 60s
  // 1h = 60m
  // 1day = 24h

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate values
  let days = remainingTime / oneDay;
  // console.log(days);
  days = Math.floor(days);
  // console.log(days);
  let hours = Math.floor((remainingTime % oneDay) / oneHour);
  // console.log(hours);
  let minutes = Math.floor((remainingTime % oneHour) / oneMinute);
  let seconds = Math.floor((remainingTime % oneMinute) / 1000);

  if (remainingTime < 0) {
    clearInterval(count);
    deadline.innerHTML = `<h3>Le concours est terminé</h3>`;
    return;
  }

  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.textContent = format(values[index]);
  });
};

let count = setInterval(getRemainingTime, 1000);
getRemainingTime();
