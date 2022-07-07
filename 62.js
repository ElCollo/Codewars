function descendingOrder(n) {
   var digits = ("" + n).split("").sort(function (a, b) { return b - a });
   digits = digits.join("");
   return Number(digits);
}
