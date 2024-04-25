const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const removeDuplicates = (arr) => [...new Set(arr)];
const merge = Object.assign({}, obj1, obj2);
const reversedString = str => str.split('').reverse().join('');
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};