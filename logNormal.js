const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;