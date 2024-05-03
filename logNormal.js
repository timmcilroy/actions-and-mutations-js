const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const merge = (a, b) => a.concat(b);
console.log("0 || 1 = "+(0 || 1));