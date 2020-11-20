function isPalindrome (str) {
  // rimuove caratteri non alfanumerici e rende tutto minuscolo
  str = str.replace(/[^a-z0-9]/i, "").toLowerCase();
  //compara la stringa con la sua versione invertita (se non vuota)
  return (str.length > 0) && str.split("").reverse().join("") === str;
}

// chiedo all'utente di inserire una parola
var parola = prompt("Inserisci una parola. Verificherò se è palindroma.");
// invoco la funzione
var palindromo = isPalindrome(parola);

// do un feedback all'utente
if (palindromo == true) {
  alert("Complimenti, hai inserito una parola palindroma.")
} else {
  alert("Purtroppo la parola inserita non è palindroma.")
}