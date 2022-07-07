function fakeBin(x) {

   x = x.split('');

   let toBin = x => {
      if (x < 5)
         return 0;
      else return 1
   }

   return x.map(toBin).join('');
}
