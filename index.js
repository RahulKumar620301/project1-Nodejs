const Quote = require('inspirational-quotes')
var convert = require('color-convert')


//console.log(Quote.getRandomQuote());

console.log(Quote.getQuote());

let color="teal";
let r=convert.keyword.rgb(color);
let h=convert.keyword.hex(color);
let s=convert.keyword.hsl(color);

console.log(`color : ${color} rgb(${r}) hsl(${s}) hex #${h}`)
