function duplicateEncode(word) {
   let w = word.toLowerCase();
   return Array.from(w).map(x => w.replace(new RegExp(`[^${x}]`, 'g'), "").length > 1 ? ')' : '(').join('');
}