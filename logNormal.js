function myAPITS(someString: string, someNum: number) { ... };
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');