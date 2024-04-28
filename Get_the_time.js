var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const stringReverse = str => str.split("").reverse().join("");
const isWeekday = (date) => date.getDay() % 6 !== 0;
const flattenedArray = arr => [].concat(...arr);