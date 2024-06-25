const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const stringReverse = str => str.split("").reverse().join("");
const isTabInView = () => !document.hidden;