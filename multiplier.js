const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const symbolsPath = path.join(buildOutputPath, 'symbols');