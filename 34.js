const comp = (a, b) => {
   if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) { return false; }
   return a.reduce((x, y) => x + y, 1) === b.reduce((x, y) => x + Math.sqrt(y), 1)
};