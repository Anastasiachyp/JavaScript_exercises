// Variabili

// var, let, const


var nome = 'Anastasia';

console.log(nome);


var cognome;

console.log(cognome);

//Var = key word

// DATI PRIMITIVI

// String
const nome = 'anastasia sta scrivendo';
console.log(typeof nome);
// quando scrivi 'typeof' davanti alla variabile, nella console ti dice che tipo di variabile è. 
// ex.stringa in questo caso.

// Number
const eta = 25
console.log(eta);

// Boolean 
const eMaggiorenne = true;
console.log(eMaggiorenne);

// Null
const valore = null;
console.log(typeof valore);
// se scrivo 'typeof' davanti alla variabile di nulla, mi darà come risultato 'object'. è un piccolo bug di JavaScript.

// Undefined
let anonimo = undefined;
console.log(anonimo);

// Symbol
const simbolo = Symbol();
console.log(simbolo);
// non interessa in questo momento.

// Arrays

var nomi = ['Roberto', 'Phil', 'Anastasia'];
console.log(typeof nomi)
// 'typeof' delle Arrays sono sempre object.

// Oggetti

const persona = {
    name: 'Anastasia',
    eta: 25,
}


console.log(persona)

persona.name = 'Claire'

console.log(persona)

// Oggetti
const persona = {
    name: 'Anastasia',
    eta: 25,
}

console.log(persona)

persona = 'prova123'

console.log(persona)

// TYPE CONVERSION

// 1. numero a stringa

let valore;

valore = String(5);
// scrivendo 'String' davanti, diventa da numero a stringa

// 1.2 numero a stringa (2° metodo)
valore = (5).toString();
// toString() è un altro metodo per fare diventare un numero in stringa

// 2. boolean a stringa
valore = String(true)

// 3. Stringa a numero
valore = Number('5')

// 4. boolean a numero
valore = Number(true)
valore = Number(false)
// quando facciamo diventare un boolean 'true' in numero diventa 1, con il 'false' diventa 0.

// 5. Stringa a numero
valore = '100.3'
valore = parseInt('100.3');
// quando usiamo la funzione 'parseInt' il numero all'interno delle parentesi verrà riportato intero e non decimale. è da stringa diventerà numero.
valore = parseFloat('103.5')
// quando usiamo la funzione 'parseFloat' il numero rimane decimale.
