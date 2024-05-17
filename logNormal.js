console.log(1 +  "2" + "2");
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const maxNumber = arr => Math.max(...arr);