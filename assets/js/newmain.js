/* 
Istruzioni:
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

//Il computer deve generare 16 numeri casuali tra 1 e 100.
function random_bombe(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//creo un array vuoto per inserire i numeri dati dal pc
var lista_bombe = [];
//inserisco i 16 numeri nell'array e verifico che non siano doppie
var numero;
while (lista_bombe.length < 16) {
    numero = random_bombe(1, 100);

    if (!lista_bombe.includes(numero)) {
        lista_bombe.push(numero);
    }
}
//console.log(lista_bombe);

//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var i = 0;
var lista = []
do {
    var userNumber = Number(prompt("Inserisci un numero"));
    if (lista.includes(userNumber)) {
        alert("Numero gà inserito!")
    } else {
        lista.push(userNumber)
    }
    i++;
} while (i < 3);
console.log(lista);