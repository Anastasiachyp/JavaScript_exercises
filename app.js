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

// ARRAYS - struttura di dati

// anastasia chypyha - 12 amici 

const amico1anastasia = 'Cam';
const amico2anastasia = 'Mitchell';


// Lista di amici di Roberto

const Amici_Roberto = ['Phil', 'Claire', 'Gloria', 'Jay'];

console.log(Amici_Roberto.length);
// risultato sarà 4 

// se volessimo togliere un elemento dalla nostra array
Amici_Roberto[3] = 'Mitchell'
console.log(Amici_Roberto)


// ARRAYS - Metodi

const colori = ['rosso', 'blu', 'verde']

// push -- aggiunge un elemento alla fine della Array.

colori.push(‘rosa');
console.log(colori);


// pop -- toglie l'ultimo elemento della Array.

colori.pop();
console.log(colori);

// unshift -- aggiunge un elemento all'inizio della Array.

colori.unshift(‘rosa');
console.log(colori);


// shift -- rimuove il primo elemento della Array.

colori.shift(); 
console.log(colori);


// indexOf -- mostra la posizione dell'elemento della Array, devo aggiungere la formula 'console.log'

console.log(colori.indexOf('blu'));

// slice -- creo una nuova costante per estrarre una parte della Array

const nuovo = colori.slice(0, 2)

console.log(nuovo);

// concat -- per concatenare due Arrays

const arr1 = ['facebook', 'instagram'];
const arr2 = ['whatsapp'];

console.log(arr1.concat(arr2));


console.log(colori); // fa riferimento per i metodi che non hanno ‘console.log’






// Esercizio 1

const colori = ['rosso', 'blu', 'verde', 'viola'];

console.log(colori[colori.lenght - 2]);
// lenght è 4, perchè sono 4 i colori, si fa 4-2 ed esce fuori verde poiché 2 è la posizione del colore verde (0,1,2..etc)





// Esercizio 2

const social = [
    ['facebook', 'IG'], // 0
    ['whatsapp', 'telegram'], // 1
    ['tiktok', 'snapchat'], // 2 
]

console.log(social[1][1]); // soluzione 'telegram' -- prima quadra fa riferimento alla prima array, la seconda quadra fa riferimento alla posizione dell'elemento nella prima Array.

console.log(social[2][0]) // soluzione 'tiktok' -- prima quadra fa riferimento alla terza array, la seconda quadra fa riferimento alla posizione dell'elemento nella terza Array.

// OGGETTI - Struttura di dati

const arr = ['valore1', 'valore2'];

const persona = {
    // chiave: 'nome' valore: 'cam'
    nome: 'cam',
    eta: 46,
    indirizzo: {citta: 'missouri', via:'california street'},
    emaggiorenne: true,
    colorepreferito : ['rosa']
}

// prendere i valori

// così vediamo il valore 'eta'
console.log(persona.eta)

// cosi vediamo la citta
console.log(persona.indirizzo.citta)

// un'altra metodologia per accedere ai valori 
console.log(persona["colorepreferito"][0]) // possiamo anche aggiungere la posizione per vedere un valore della array



// CREARE OGGETTI

// 1.

const persona = {};
persona.nome = "anastasia";
persona.eta = 25;

console.log(persona)

// 2.

const persona2 = { nome: 'gloria' };

console.log(persona2)

// 3. 

const persona3 = new Object;
persona3.cognome = "Delgado";
persona3.cognome = "Pricett"

console.log(persona3)


// OGGETTI vs ARRAY

// OGGETTI
const persona = {
    nome: 'alex'
}

persona.nome
persona["nome"]

persona.cognome = "dunphy"
persona.cognome = "scott" // cambiamo cognome

delete persona.nome; // così cancello il nome dall'oggetto

console.log(persona)





// ARRAY
const persone = ['claire'];
persone[0]
persone[0] = 'gloria'

persone.push('pritchett')
persone.pop(); // così cancello l'ultimo elemento

console.log(persone)

// DATE
// 1.
let oggi = new Date(); // comando per conoscere la data di oggi;
console.log(oggi)

// 2.
let compleanno = new Date('07-07-1996')
console.log(compleanno) 
 

// IF ELSE

1) esempio
const maggioreEta = 18;
const etaCam = 45;

if (etaCam > maggioreEta) {
    console.log('Cam puo bere la birra')
} else {
    console.log('Cam puo bere il latte')
}

2) esempio

const etaCam = 45;

if (etaCam < 11) {
    console.log('Cam è un bambino')
} else if (etaCam > 20 && etaCam < 50) {
    console.log('Cam è un adulto')
} else {
    console.log('Cam è un anziano')
}

3) esempio

// == valore è uguale 
// === valore e tipo (esempio: stringa, boolean, numero) devono essere uguali —> usare sempre questo, perché da più certezza di uguaglianza

const id = 70;

if (id === 70) { 
    console.log('id è 70')
} else {
    console.log('id non è 70')
}



// OPERATORI LOGICI 

// 1. AND &&
const etaCam = 45;

if (etaCam < 11) {
    console.log('Cam è un bambino')
} else if (etaCam > 20 && etaCam < 50) { // Prende in causa due condizioni, devono essere entrambe vere per essere eseguite
    console.log('Cam è un adulto')
} else {
    console.log('Cam è un anziano')
}

// 2. OR || - Solo una condizione deve essere vero

const eta = 34 
if (eta < 3 || eta > 99) {
    console.log('non pupi giocare')
} else {
    console.log('puoi giocare')
}

// 3. NOT !

const id = 100;

if (id !== 100) { // rendiamo contraria la funzione con il "!"
    console.log('id è uguale a 100')
} else {
    console.log('id non è 100')
}

// 4. Ternary operator

const id = 100; // i due punti in questo caso stanno come la funzione "OR"

id === 100 ? console.log('id è 100') : console.log('id non è 100')

// SWITCH -- è simile alla funzione IF ELSE, in quan

const nome = 'mitchell';

switch(nome) {
    case 'jonny':
        console.log('nome è jonny')
        break;
    case 'cam':
        console.log('nome è cam')
    case 'mitchell':
        console.log('nome è mitchell')
    default:
        console.log('nome non è jonnhy/cam/mitchell')
        break;
}

// come funziona 'switch'
switch(valore) {
    case valore1:
        // fa qualcosa
        break;
    case valore2:
        // fa qualcosa
        break;
        default:
        // nessun valore
        break;
}

// FUNZIONI

// function declaration

function salutare(nome, cognome) { 
  // all'interno delle parentesi tonde metto dei parametri, che definisco accanto all'azione in fondo.
    // se non vengono definiti i valori dei parametri in fondo, posso metterli nelle parentesi tonde, ma avranno più importanza quelli in fondo.
  console.log('ciao' + ' ' + nome + ' ' + cognome)
}

salutare('anastasia', 'rossi');

// funzione 'return'

function salutare() { 
    return 3 * 5
}
  
console.log(salutare());

// --> il risultato sarà 15

// function expression

const doppio = function(x) {
return x * 2
}

console.log(doppio(10));
// --> risultato sarà 20




