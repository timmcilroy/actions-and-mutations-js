const isEmptyArray = arr => !arr.length;
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};