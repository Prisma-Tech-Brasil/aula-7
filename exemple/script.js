const formulario = document.querySelector("#formulario");
const resultadoTexto = document.querySelector("#resultadoTexto");

function calculoImc(altura, peso) {
  return peso / (altura * altura);
}

formulario.onsubmit = (event) => {
  event.preventDefault(); // Impede o comportamento padrão de envio do formulário

  const altura = parseFloat(document.querySelector("#altura").value);
  const peso = parseFloat(document.querySelector("#peso").value);

  const imc = calculoImc(altura, peso);
  resultadoTexto.textContent = `Seu IMC é ${imc.toFixed(2)}`;
};
