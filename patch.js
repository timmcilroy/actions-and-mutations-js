const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const flattenedArray = arr => [].concat(...arr);
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;