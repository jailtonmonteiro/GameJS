alert("Bem Vindo ao número secreto!");

let maximo = 50;
let numeroSecreto = parseInt(Math.random() * maximo + 1);
let chute;
let tentativas = 0;


console.log(numeroSecreto);

while (chute != numeroSecreto) {
  chute = prompt(`Digite o número entre 1 e ${maximo}: `);
  tentativas++;
  if (numeroSecreto == chute) {
    alert(`O número é ${numeroSecreto}! Você Acertou com ${tentativas} tentativas`);
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O numero secreto é menor que ${chute}!`);
    } else {
      alert(`O numero secreto é maior que ${chute}!`);
    }
  }
}
