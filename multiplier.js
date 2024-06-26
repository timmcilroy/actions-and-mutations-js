const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';