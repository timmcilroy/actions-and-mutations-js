const isArray = (arr) => Array.isArray(arr);
const shuffledArray = array.sort(() => Math.random() - 0.5); 
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const isWeekday = (date) => date.getDay() % 6 !== 0;