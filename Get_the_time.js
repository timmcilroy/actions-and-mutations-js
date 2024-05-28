const lastElement = arr => arr[arr.length - 1];
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
console.log("0 && 1 = "+(0 && 1));