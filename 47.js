function twoSum(numbers, target) {
   for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
         let res = numbers[i] + numbers[j]
         if (res == target) return [i, j]
      }
   }
}