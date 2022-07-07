function disemvowel(str) {
   let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
   let arr = str.split('')
   let newArr = []
   for (let i = 0; i < arr.length; i++) {
      if (!vowel.includes(arr[i])) {
         newArr.push(arr[i])
      }
   }
   return newArr.join('')
}