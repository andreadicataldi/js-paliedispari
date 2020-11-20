var strArray = [];
var revArray = [];
function isPalindrome(str) {
  var palindromo = false;
  strArray = str.split("");
  for (var i = strArray.length - 1; i >= 0; i--) {
    revArray.push(strArray[i]);
  }
  if (strArray.join() == revArray.join()) {
    palindromo = true;
  }
  return palindromo;
}
// chiedo all'utente di inserire una parola
var parola = prompt("Inserisci una parola. Verificherò se è palindroma.");
// invoco la funzione
var palindromo = isPalindrome(parola);
// do un feedback all'utente
if (palindromo == true) {
  alert("Complimenti, hai inserito una parola palindroma.");
} else {
  alert("Purtroppo la parola inserita non è palindroma.");
}
//creo funzione per stabilire se un numero è pari
function isEven(num) {
  return num % 2 == 0;
}
//creo funzione per generare numero random
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// chiedo a utente di scegliere
var sceltaUtente = prompt("Scegli PARI o DISPARI?").toLowerCase();
var numeroUtente = Number(prompt("Scegli un NUMERO da 1 a 5"));
alert("Hai scelto: " + numeroUtente);
//genero numero PC
var numeroPc = getRndInteger(1, 5);
alert("Il PC ha scelto: " + numeroPc);
//sommo numeri
var somma = numeroUtente + numeroPc;
alert("La somma è: " + somma);
//condizione di vittoria
if (isEven(somma) == true && sceltaUtente == "pari") {
  alert("Hai vinto!");
} else if (isEven(somma) == false && sceltaUtente == "dispari") {
  alert("Hai vinto!");
} else {
  alert("Hai perso!");
}
