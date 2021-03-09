function palindroma (stringa) {
  var stringa = domanda;
  var contrario = domanda.split('').reverse('').join('');
  return contrario === stringa;
}

var domanda = prompt("Inserisci una parola!");
if (domanda === palindroma) {
  document.getElementById('palindroma').innerHTML = "Hai inserito una parola palindroma";
} else {
  document.getElementById('palindroma').innerHTML = "La parola che hai inserito non è palindroma";
}

console.log(palindroma(domanda));
