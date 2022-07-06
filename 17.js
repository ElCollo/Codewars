var isSquare = function (n) {
   const square_n = Math.sqrt(n);
   if (isNaN(square_n)) {
      return false;
   }
   for (i = 0; i <= Math.floor(square_n); i++) {
      if (Math.pow(i, 2) == n) {
         return true;
      }
   }
   return false;
}