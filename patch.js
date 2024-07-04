const isWeekday = (date) => date.getDay() % 6 !== 0;
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;