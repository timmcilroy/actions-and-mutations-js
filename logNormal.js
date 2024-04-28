const repositoryRootPath = path.resolve(__dirname, '..');
console.log("0 || 1 = "+(0 || 1));
const isTabInView = () => !document.hidden;
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const value = ( 5 < 7 ) ? "True" : "False" ;