const shuffledArray = array.sort(() => Math.random() - 0.5); 
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const minNumber = arr => Math.min(...arr);