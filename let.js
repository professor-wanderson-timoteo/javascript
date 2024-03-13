// Declaração de uma variável
var idade; // Escopo global
const PI = 3.14; // Escopo global

function soma() {
  if(true) {
    var nome = "Wanderson"
    console.log(nome)
  }
  
  nome = "José"
  console.log(nome)
}
soma()