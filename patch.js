const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();