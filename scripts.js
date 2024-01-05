const number = document.querySelectorAll(".number");
const generateBtn = document.querySelector("#generate");
const quantidadeNumeros = document.querySelector("#quantidade")

function generateNumbers() {
  const max = 60;
  const min = 1;
  const result = [];
  const qtd = quantidadeNumeros.value

  while (result.length < qtd) {
    const number = Math.floor(Math.random() * (max * min + 1)) + min;

    if (!result.includes(number)) {
      result.push(number);
    }
  }
  for (let i = 0; i < number.length; i++) {

    number[i].textContent =result[i]
    
  }
}

generateBtn.addEventListener("click", generateNumbers);
