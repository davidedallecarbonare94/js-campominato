/* Istuzioni:
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */

//Il computer deve generare 16 numeri casuali tra 1 e 100.
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//creo un array dove inserire questi numeri
var pcNumbers = [];

//creo un ciclo che mi inserisca i 16 numeri dati dal pc in un array

for (var i = 0; i < 16; i++){
    pcNumbers.push(getRandomNumber(1, 100));
}
console.log(pcNumbers);

//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.


var arrayUserNumbers = [];

for (var j = 0; j <= 84; j++) {
    var userChosenNumber = Number(parseInt(prompt("Inserisci un numero da 1 a 100")));
    while (userChosenNumber < 1 || userChosenNumber > 100 || isNaN(userChosenNumber)) {
        alert("Devi inserire un numero tra 1 e 100!")
        userChosenNumber = Number(parseInt(prompt("Inserisci un numero da 1 a 100")));
    }
    if ( !arrayUserNumbers.includes(userChosenNumber)) {
        if (pcNumbers.includes(userChosenNumber)) {
            alert("Peccato, hai trovato la mina! Punteggio: " + arrayUserNumbers.length);
            break;
        }
        arrayUserNumbers.push(userChosenNumber);
    } else {
        alert('Hai giá inserito questo numero! ' + arrayUserNumbers);
        i--;
    }
    console.log(arrayUserNumbers);
}
     
 