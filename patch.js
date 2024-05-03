const isEmptyArray = arr => !arr.length;
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
function myAPITS(someString: string, someNum: number) { ... };