alert("Bem Vindo ao número secreto!");

let numeroSecreto = 8;
console.log('Numero Secreto: ' + numeroSecreto);
let chute = prompt("Digite o número entre 1 e 10: ");
console.log('Chute: '+ chute);

if (numeroSecreto == chute) {
  alert(`O número é ${numeroSecreto}! Você Acertou`);
} else {
  alert("Errou o numero secreto!");
}
