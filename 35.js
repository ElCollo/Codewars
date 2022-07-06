function validatePIN(pin) {
   //return true or false
   return /^\d+$/.test(pin) && (pin.length === 4 || pin.length === 6)
}