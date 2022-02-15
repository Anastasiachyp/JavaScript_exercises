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

// TYPE COERCION

const nome = 'anastasia';
const cognome = 'chypyha';
const eta = 25
const efemmina = true

console.log(nome + ' ' + cognome + ' ' + eta + efemmina);
// unione di varie stringhe, boolean, numeri

/ NUMERI

const num1 = 24;
const num2 = 6;

let risultato;

risultato = num1 + num2
risultato = num1 - num2
risultato = num1 * num2
risultato = num1 / num2

// Modulo
risultato = num1 % num2;
// '%' si chiama modulo e da come risultato il resto della divisione.
// in questo esempio da 0, perchè 24/6 fa 4 e non c'è resto.

// OGGETTO MATH

// Math.PI()
risultato = Math.PI
// è il pi-greco
// Math.round()
risultato = Math.round(42.53)
// arrotonda per eccesso e per difetto
// Math.ceil()
risultato = Math.ceil(42.2)
// approssima sempre al numero più alto
// Math.floor()
risultato = Math.floor(5.9)
// approssima sempre al numero più basso
// Math.sqrt()
risultato = Math.sqrt(25)
// la radice quadrata del numero
// Math.abs()
risultato = Math.abs(-24)
// rende il numero sempre positivo
// Math.pow()
risultato = Math.pow(3, 2)
// il secondo numero è la potenza del primo
// Math.min()
risultato = Math.min(2, 4, 567, 876, -45)
// ci restituisce il numero più bassso di una lista tra parentesi tonde.
// Math.max()
risultato = Math.max(2, 4, 567, 876, -45)
// ci restituisce il numero più alto di una lista tra parentesi tonde.
// Math.random()
risultato = Math.random()
// da un numero random tra lo 0 e l'1, decimale.

// se si vuole un numero random tra lo 0 e 100, ma intero
risultato = Math.floor(Math.random() * 100)


console.log(risultato);

// STRINGHE

const nome = 'Luke';
let risultato;

// lenght - conta quanti caratteri ci sono dentro la stringa
risultato = nome.length
// toUpperCase() - trasforma la stringa in maiuscolo
risultato = nome.toUpperCase();
// toLowerCase()- trasforma la stringa in minuscolo
risultato = nome.toLowerCase();
// [] - permette di vedere che lettera c'è nella posizione tra le parentesi quadre.
risultato = nome[2];
// indexOf() - permette di vedere la posizione della lettera nella stringa
risultato = nome.indexOf('e')
// charAt() - fa la stessa cosa delle parentesi quadre
risultato = nome.charAt(3)
// substring() - in base ai numeri posti tra parentesi ci indica le lettere o gli elementi che sono presenti che sono posizionati in quella fascia di numeri.
// L'ultimo numero non viene considerato come posizione compresa.
risultato = nome.substring(0, 3) 
—> Luk

console.log(risultato);
