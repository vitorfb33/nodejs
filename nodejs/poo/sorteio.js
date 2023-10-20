/**
 * sorteio
 */
let nipes = ['♥', '♦', '♣', '♠']
let faces = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
let nipe = nipes[Math.floor(Math.random()* 4)]
let face = faces[Math.floor(Math.random()* 13)]

console.clear()
console.log(` _______________`)
console.log(`|${nipe}              |`)
console.log(`|               |`)
console.log(`|               |`)
console.log(`|               |`)
console.log(`|       ${face}       |`)
console.log(`|               |`)
console.log(`|               |`)
console.log(`|             ${nipe} |`)
console.log(`|_______________|`)
