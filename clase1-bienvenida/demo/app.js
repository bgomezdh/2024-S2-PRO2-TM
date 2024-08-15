/* modulo nativo */

const os = require('os');

/* console.log(os.version()); */

/* modulo de terceros */
const moment = require('moment');
 

/* console.log(moment().format("MMM Do YY")); */

/* modulo propio */

const calculadora = require('./my_modules/calculadora');
let resultado = calculadora.multiplicar(40, 2);
console.log(resultado);


