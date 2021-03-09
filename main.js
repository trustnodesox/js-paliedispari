var domanda = prompt("Inserisci una parola")

function palindroma(domanda) {
  return domanda == domanda.split('').reverse('').join('');
}

if (palindroma = true) {
  document.getElementById('palindroma').innerHTML = "Complimenti, la parola che hai inserito è palindroma"
} else {   document.getElementById('palindroma').innerHTML = "Mi dispiace, la parola che hai inserito non è palindroma"

}
