function removeSmallest(numbers) {
   const copy = numbers.slice(0)
   let smallestValue = numbers.indexOf(Math.min(...numbers))
   copy.splice(smallestValue, 1);
   return copy
}