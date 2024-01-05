const generateBtn = document.querySelector("#generate");
const quantidadeNumero = document.querySelector("#quantidade");
const numbersContainer = document.querySelector("#numbers");

function generateNumbers() {
  const max = 60;
  const min = 1;
  const result = [];
  const qtd = quantidadeNumero.value;

  // Limpa o conteúdo anterior
  numbersContainer.innerHTML = "";

  while (result.length < qtd) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!result.includes(number)) {
      result.push(number);
    }
  }

  for (let i = 0; i < result.length; i++) {
    const span = document.createElement("span");
    span.classList.add("number");
    span.textContent = result[i];
    numbersContainer.appendChild(span);

  }
}

generateBtn.addEventListener("click", generateNumbers);
