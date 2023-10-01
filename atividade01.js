function calcularSoma() {
  let soma = 0;

  for (let i = 1; i <= 100; i++) {
    soma += i;
  }

  window.alert("A soma dos números de 1 até 100 é: " + soma);

  document.getElementById("resultado").innerText =
    "A soma dos números de 1 até 100 é: " + soma;
}
