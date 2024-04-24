const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const appName = getAppName(channel);