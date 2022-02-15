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